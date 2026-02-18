/** @format */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const config = {
    // Directories to process
    inputDirs: [
        'public/assets/gallery',
        'public/assets/certificates',
        'public/assets',
    ],
    // WebP quality (1-100, recommended 80-85)
    webpQuality: 82,
    // Maximum width for images (maintains aspect ratio)
    maxWidth: 1920,
    // Maximum height for images (maintains aspect ratio)
    maxHeight: 1920,
    // File extensions to process
    extensions: ['.jpg', '.jpeg', '.png'],
};

/**
 * Get all image files from a directory
 */
async function getImageFiles(dir) {
    try {
        const files = await fs.readdir(dir);
        return files
            .filter((file) => {
                const ext = path.extname(file).toLowerCase();
                return config.extensions.includes(ext);
            })
            .map((file) => path.join(dir, file));
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
        return [];
    }
}

/**
 * Get file size in KB
 */
async function getFileSize(filePath) {
    const stats = await fs.stat(filePath);
    return (stats.size / 1024).toFixed(2);
}

/**
 * Optimize and convert image to WebP
 */
async function optimizeImage(inputPath) {
    const dir = path.dirname(inputPath);
    const name = path.basename(inputPath, path.extname(inputPath));
    const outputPath = path.join(dir, `${name}.webp`);

    try {
        // Get original size
        const originalSize = await getFileSize(inputPath);

        // Check if WebP already exists
        try {
            await fs.access(outputPath);
            console.log(`⏭️  Skipping ${path.basename(inputPath)} - WebP already exists`);
            return null;
        } catch {
            // WebP doesn't exist, proceed with conversion
        }

        // Process image
        await sharp(inputPath)
            .resize(config.maxWidth, config.maxHeight, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({ quality: config.webpQuality })
            .toFile(outputPath);

        // Get optimized size
        const optimizedSize = await getFileSize(outputPath);
        const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

        return {
            input: path.basename(inputPath),
            output: path.basename(outputPath),
            originalSize: `${originalSize} KB`,
            optimizedSize: `${optimizedSize} KB`,
            savings: `${savings}%`,
        };
    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error.message);
        return null;
    }
}

/**
 * Main function
 */
async function main() {
    console.log('🖼️  Image Optimization Script');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log(`Quality: ${config.webpQuality}%`);
    console.log(`Max dimensions: ${config.maxWidth}x${config.maxHeight}px\n`);

    const results = [];
    let totalOriginal = 0;
    let totalOptimized = 0;

    // Process each directory
    for (const dir of config.inputDirs) {
        console.log(`\n📁 Processing directory: ${dir}`);
        console.log('─'.repeat(50));

        const imageFiles = await getImageFiles(dir);

        if (imageFiles.length === 0) {
            console.log('  No images found');
            continue;
        }

        // Process images sequentially to avoid overwhelming the system
        for (const imagePath of imageFiles) {
            const result = await optimizeImage(imagePath);
            if (result) {
                results.push(result);
                console.log(
                    `✅ ${result.input} → ${result.output} (${result.originalSize} → ${result.optimizedSize}, saved ${result.savings})`
                );

                totalOriginal += parseFloat(result.originalSize);
                totalOptimized += parseFloat(result.optimizedSize);
            }
        }
    }

    // Summary
    if (results.length > 0) {
        const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📊 Summary');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`✅ Images optimized: ${results.length}`);
        console.log(`📦 Original size: ${totalOriginal.toFixed(2)} KB`);
        console.log(`📦 Optimized size: ${totalOptimized.toFixed(2)} KB`);
        console.log(`💰 Total savings: ${totalSavings}% (${(totalOriginal - totalOptimized).toFixed(2)} KB)`);
        console.log('\n💡 Next steps:');
        console.log('   1. Update your code to use .webp extensions');
        console.log('   2. Test images on your website');
        console.log('   3. Consider deleting original files if everything works\n');
    } else {
        console.log('\n✨ All images already optimized!\n');
    }
}

// Run the script
main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
});
