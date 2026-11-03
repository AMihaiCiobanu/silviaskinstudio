const boosterBenefits = [
    "Deeply hydrates and improves skin quality",
    "Enhances skin elasticity and firmness",
    "Smooths fine lines and improves texture",
    "Restores radiance and healthy skin appearance"
];
const boosterIntro = "Advanced injectable treatments designed to improve skin quality, hydration, elasticity and overall appearance from within. Different formulations are selected according to your individual skin concerns and treatment goals.";
const boosterRecommendedFor = "Clients experiencing dehydrated, dull, or tired-looking skin, early signs of ageing, or loss of skin elasticity, who want natural-looking skin rejuvenation without volume enhancement.";
const boosterFrequency = "For optimal results, a course of treatments is recommended, typically 2–3 sessions spaced 3–4 weeks apart, with maintenance every 4–6 months. Treatment recommendation and protocol will be discussed during consultation.";
const patchTest = "A patch test is required at least 48 hours prior to treatment to ensure suitability and prevent any adverse reactions.";

export const servicesData = {
    facials: [
        {
            title: "Complimentary Skin Consultation",
            description: "Every skin journey should begin with understanding your skin. A personalised 15-minute consultation to assess your skin and plan the right treatments for your goals.",
            fullDescription: "Every skin journey should begin with understanding your skin. During your complimentary 15-minute personalised consultation, we'll assess your skin, discuss your main concerns, current skincare routine and the results you would like to achieve. Using this information, I can recommend the most suitable professional treatments, advanced skin options and homecare products, creating a personalised plan designed specifically for your skin and your goals. Because beautiful results begin with understanding your skin.",
            benefits: ["Personalised skin assessment", "Treatment & homecare plan", "Free of charge"],
            detailedBenefits: [
                "A professional assessment of your skin",
                "A discussion of your main concerns and current skincare routine",
                "Recommendations for professional treatments, advanced skin options and homecare products",
                "A personalised plan designed for your skin and your goals"
            ],
            recommendedFor: "Anyone looking to improve hydration, texture, pigmentation, congestion, signs of ageing or overall skin health. Your consultation is the first step towards making informed choices and achieving the best possible results.",
            price: "Complimentary",
            duration: "15 mins"
        },
        {
            title: "PRO Calm Facial",
            description: "A soothing facial designed to gently calm and comfort sensitive or reactive skin. Reduces redness, irritation, and inflammation while strengthening the skin's natural barrier.",
            fullDescription: "A soothing facial designed to gently calm and comfort sensitive or reactive skin. This treatment uses calming ingredients to reduce redness, irritation, and inflammation while restoring hydration and strengthening the skin's natural barrier. Ideal for sensitive skin types or anyone experiencing skin stress, the Calm Facial promotes a balanced, calm, and refreshed complexion.",
            benefits: ["Reduces redness & irritation", "Calms inflammation", "Restores moisture", "Strengthens barrier"],
            detailedBenefits: [
                "Reduces redness and soothes irritation",
                "Calms inflammation and skin sensitivity",
                "Restores moisture and strengthens the skin barrier",
                "Leaves skin feeling soft, balanced, and refreshed"
            ],
            recommendedFor: "Sensitive, reactive, or irritated skin in need of gentle care and soothing relief.",
            treatmentFrequency: "Recommended every 4–6 weeks to maintain skin calmness and resilience.",
            price: "£42 / £78 / £102",
            duration: "25 / 55 / 85 mins"
        },
        {
            title: "PRO Glow Facial",
            description: "A premium, results-driven treatment designed to deeply cleanse, gently exfoliate, and intensely hydrate for a visibly smoother, brighter, and healthier-looking complexion.",
            fullDescription: "A premium, results-driven treatment designed to deeply cleanse, gently exfoliate, and intensely hydrate for a visibly smoother, brighter, and healthier-looking complexion. Infused with nourishing, skin-boosting ingredients, it helps to refine pores, even skin tone, improve texture, and promote healthy cell renewal.",
            benefits: ["Instantly brighter skin", "Refined pores", "Deep hydration", "Healthy, youthful glow"],
            detailedBenefits: [
                "Instantly brighter, more radiant skin",
                "Smoother texture and refined pores",
                "Deep hydration and nourishment",
                "Promotes a healthy, youthful glow"
            ],
            recommendedFor: "All skin types, especially dull, dehydrated, or tired-looking skin, and as a pre-event treatment.",
            treatmentFrequency: "For best results, we recommend every 4–6 weeks to maintain skin health and radiance.",
            price: "£42 / £78 / £102",
            duration: "25 / 55 / 85 mins"
        },
        {
            title: "PRO Firm Facial",
            description: "A comprehensive firming and lifting treatment for the face and neck, combining deep tissue facial massage with Dermalogica's advanced firming active ingredients.",
            fullDescription: "A comprehensive firming and lifting treatment for the face and neck. Utilising targeted deep tissue facial massage techniques combined with Dermalogica's advanced firming and replenishing active ingredients to improve elasticity, tone, and skin resilience for a visibly tighter, more youthful appearance.",
            benefits: ["Improves firmness", "Lifts & contours", "Reduces fine lines", "Enhances radiance"],
            detailedBenefits: [
                "Improves skin firmness and elasticity",
                "Lifts and contours the face and neck",
                "Reduces the appearance of fine lines and wrinkles",
                "Enhances skin tone, texture, and radiance"
            ],
            recommendedFor: "Clients concerned with loss of firmness, fine lines, and ageing skin, seeking a results-driven facial to restore a smoother, more sculpted complexion.",
            treatmentFrequency: "For best results, recommended every 4–6 weeks to maintain firmness, support collagen production, and prolong visible results.",
            price: "£42 / £78 / £102",
            duration: "25 / 55 / 85 mins"
        },
        {
            title: "Teen Facial – Pamper & Perfect Skin",
            description: "A gentle and nurturing facial designed specifically for teenage skin. Deep cleanses, calms inflammation, and balances oil production to help prevent breakouts.",
            fullDescription: "A gentle and nurturing facial designed specifically for teenage skin. This treatment focuses on deep cleansing, calming inflammation, and balancing oil production to help prevent breakouts and promote a clear, healthy complexion. Using soothing ingredients and expert care, it leaves young skin feeling refreshed, balanced, and beautifully pampered.",
            benefits: ["Deep cleanses pores", "Soothes irritation", "Balances oil", "Promotes clarity"],
            detailedBenefits: [
                "Deep cleanses and unclogs pores",
                "Reduces inflammation and soothes irritation",
                "Balances oil production to help prevent breakouts",
                "Promotes clearer, healthier skin"
            ],
            recommendedFor: "Teenagers experiencing oily, combination, or acne-prone skin who are seeking a gentle yet effective skincare solution.",
            treatmentFrequency: "For best results, recommended every 4 weeks to maintain skin clarity and balance.",
            price: "£42 / £78",
            duration: "25 / 55 mins"
        },
        {
            title: "Dermaplaning Facial",
            description: "A gentle, non-invasive exfoliation using a sterile surgical blade to remove dead skin cells and peach fuzz, revealing a smoother, brighter complexion.",
            fullDescription: "A gentle, non-invasive exfoliation treatment that uses a sterile surgical blade to remove dead skin cells and fine vellus hair (“peach fuzz”). This process instantly reveals a smoother, brighter complexion, enhances product absorption, and creates the perfect canvas for flawless makeup application. Suitable for most skin types, it leaves your skin feeling silky soft and visibly refreshed.",
            benefits: ["Instantly smoother skin", "Removes peach fuzz", "Better product absorption", "Flawless makeup base"],
            detailedBenefits: [
                "Instantly smoother, brighter skin",
                "Removes fine facial hair and dead skin cells",
                "Improves skincare product absorption",
                "Creates a flawless base for makeup"
            ],
            recommendedFor: "Anyone looking to improve skin texture, remove peach fuzz, or achieve a smooth, radiant glow.",
            treatmentFrequency: "For optimal results, we recommend every 4–6 weeks as part of your regular skincare routine.",
            price: "£42 / £78",
            duration: "25 / 55 mins"
        },
        {
            title: "Microneedling Facial",
            description: "A minimally invasive treatment using fine, controlled micro-needles to stimulate collagen and elastin. Improves texture, fine lines, acne scars, and pigmentation.",
            fullDescription: "A minimally invasive treatment that uses fine, controlled micro-needles to create tiny punctures in the skin, stimulating the body's natural collagen and elastin production. This process helps to improve skin texture, reduce the appearance of fine lines, acne scars, and pigmentation, and promote overall skin rejuvenation. Suitable for most skin types, this facial supports firmer, smoother, and more youthful-looking skin.",
            benefits: ["Stimulates collagen", "Reduces acne scars", "Improves texture", "Evens skin tone"],
            detailedBenefits: [
                "Stimulates collagen and elastin production",
                "Reduces fine lines, wrinkles, and acne scars",
                "Improves skin texture and firmness",
                "Evens skin tone and reduces pigmentation"
            ],
            recommendedFor: "Clients with uneven texture, fine lines, scarring, or pigmentation concerns seeking skin renewal and rejuvenation.",
            treatmentFrequency: "For optimal results, we recommend a course of 4–6 sessions spaced 4–6 weeks apart, followed by maintenance treatments every 3–6 months.",
            price: "£98 / £125",
            duration: "55 / 85 mins"
        },
        {
            title: "Pro Power Peel Facial",
            description: "A powerful, professional-grade resurfacing treatment using Dermalogica's advanced peel solutions to exfoliate, renew, and retexture the skin with minimal downtime.",
            fullDescription: "A powerful, professional-grade resurfacing treatment designed to exfoliate, renew, and retexture the skin rapidly. Using Dermalogica's advanced peel solutions, this treatment targets multiple skin concerns to deliver smoother, brighter, and more refined skin with minimal downtime.",
            benefits: ["Accelerates renewal", "Improves texture & tone", "Reduces pigmentation", "Clears congestion"],
            detailedBenefits: [
                "Accelerates skin cell renewal",
                "Improves skin texture and tone",
                "Reduces the appearance of fine lines and pigmentation",
                "Helps to clear congestion and refine pores"
            ],
            recommendedFor: "Clients concerned with dullness, uneven skin tone, pigmentation, fine lines, or congested skin, seeking visible results and skin renewal.",
            treatmentFrequency: "For best results, recommended as a course or every 4–6 weeks, depending on skin condition and professional recommendation.",
            price: "£85",
            duration: "55 mins"
        },
        {
            title: "Hydro Facial",
            description: "A non-invasive, multi-step treatment that deeply cleanses, exfoliates, and hydrates the skin using advanced vortex technology for a radiant, refreshed complexion.",
            fullDescription: "A non-invasive, multi-step treatment that deeply cleanses, exfoliates, and hydrates the skin using advanced vortex technology. This facial effectively removes impurities while delivering intense moisture and essential nutrients, resulting in a radiant, refreshed, and revitalised complexion. Suitable for all skin types, the Hydro Facial helps improve skin texture, reduce fine lines, and brighten dull skin without irritation.",
            benefits: ["Deep cleanse & exfoliate", "Intense hydration", "Improves texture", "No downtime"],
            detailedBenefits: [
                "Deeply cleanses and exfoliates dead skin cells",
                "Hydrates and nourishes skin intensely",
                "Improves skin texture and tone",
                "Reduces fine lines and enhances radiance",
                "Suitable for sensitive skin with no downtime"
            ],
            recommendedFor: "Anyone seeking a gentle yet effective treatment to refresh and rejuvenate their skin with immediate visible results.",
            treatmentFrequency: "Recommended every 4–6 weeks for ongoing skin health and luminosity.",
            price: "£85 / £110",
            duration: "55 / 85 mins"
        }
    ],
    skinBoosters: [
        {
            title: "Profhilo Structura",
            description: "Advanced injectable skin booster from the Profhilo range, selected according to your individual skin concerns and treatment goals.",
            benefits: ["Deep hydration", "Improves elasticity", "Natural-looking results"],
            fullDescription: boosterIntro,
            detailedBenefits: boosterBenefits,
            recommendedFor: boosterRecommendedFor,
            treatmentFrequency: boosterFrequency,
            price: "£300"
        },
        {
            title: "Profhilo",
            description: "Deeply hydrating injectable treatment to improve skin quality from within. Enhances hydration, elasticity, and texture without adding volume.",
            benefits: ["Deep hydration", "Improves elasticity", "No added volume"],
            fullDescription: boosterIntro,
            detailedBenefits: boosterBenefits,
            recommendedFor: boosterRecommendedFor,
            treatmentFrequency: boosterFrequency,
            price: "£200"
        },
        {
            title: "Sunekos",
            description: "Injectable skin booster to improve skin quality, hydration and elasticity from within.",
            benefits: ["Improves elasticity", "Smooths fine lines", "Restores radiance"],
            fullDescription: boosterIntro,
            detailedBenefits: boosterBenefits,
            recommendedFor: boosterRecommendedFor,
            treatmentFrequency: boosterFrequency,
            price: "£150"
        },
        {
            title: "Polynucleotide",
            description: "Regenerative injectable skin booster to rejuvenate skin quality, hydration and elasticity from within.",
            benefits: ["Improves skin quality", "Enhances firmness", "Restores radiance"],
            fullDescription: boosterIntro,
            detailedBenefits: boosterBenefits,
            recommendedFor: boosterRecommendedFor,
            treatmentFrequency: boosterFrequency,
            price: "£155"
        }
    ],
    massage: [
        {
            title: "Swedish Massage",
            description: "A classic full-body massage using long, flowing strokes, kneading, and gentle rhythmic movements to promote relaxation and improve circulation.",
            benefits: ["Relieves muscle tension", "Improves circulation", "Reduces stress", "Enhances flexibility"],
            fullDescription: "A classic, full-body massage technique designed to promote relaxation and improve circulation. Using long, flowing strokes, kneading, and gentle rhythmic movements, this massage helps to relieve muscle tension, reduce stress, and enhance overall well-being. Ideal for those seeking a soothing and rejuvenating experience to unwind both body and mind.",
            detailedBenefits: [
                "Relieves muscle tension and stiffness",
                "Improves blood circulation",
                "Reduces stress and promotes relaxation",
                "Enhances flexibility and range of motion"
            ],
            recommendedFor: "Anyone looking to relax, reduce muscular discomfort, and improve overall physical and mental wellbeing.",
            treatmentFrequency: "Recommended regularly, depending on individual needs, lifestyle and personal preference.",
            price: "£30 / £55 / £85",
            duration: "25 / 55 / 85 mins"
        },
        {
            title: "Advanced Therapeutic Massage",
            description: "A targeted deep tissue massage for chronic muscle tension, pain, and injury rehabilitation, using trigger point therapy and myofascial release.",
            benefits: ["Relieves chronic pain", "Breaks down adhesions", "Improves mobility", "Supports recovery"],
            fullDescription: "A targeted, deep tissue massage designed to address chronic muscle tension, pain, and injury rehabilitation. Using a combination of techniques such as deep kneading, trigger point therapy, and myofascial release, this treatment helps to alleviate persistent discomfort, improve mobility, and support muscle recovery. Ideal for clients seeking relief from specific muscular issues or recovering from physical strain.",
            detailedBenefits: [
                "Relieves chronic muscle tension and pain",
                "Breaks down adhesions and scar tissue",
                "Enhances muscle flexibility and range of motion",
                "Supports rehabilitation and injury recovery"
            ],
            recommendedFor: "Clients experiencing chronic muscle pain, stiffness, or recovering from injury, and those needing targeted, therapeutic treatment.",
            treatmentFrequency: "Recommended based on individual needs; often part of a treatment plan with sessions spaced weekly or biweekly for optimal results.",
            price: "£40 / £65 / £95",
            duration: "25 / 55 / 85 mins"
        },
        {
            title: "Lava Shell Massage",
            description: "A luxurious, deeply relaxing massage using naturally heated shells that combine soothing warmth with therapeutic massage techniques.",
            benefits: ["Soothes tired muscles", "Improves circulation", "Promotes mental calm", "Comforting warmth"],
            fullDescription: "A luxurious, deeply relaxing massage using naturally heated shells that glide smoothly over the body, combining soothing warmth with therapeutic massage techniques. The gentle heat helps relax the muscles, allowing deeper areas of tension to be worked comfortably while creating an indulgent sense of calm.",
            detailedBenefits: [
                "Soothes and relaxes tired muscles",
                "Improves blood circulation and lymphatic drainage",
                "Reduces stress and promotes mental calmness",
                "Provides comforting warmth and gentle pressure"
            ],
            recommendedFor: "Perfect for clients experiencing muscular tension, general stiffness, stress or fatigue, or anyone who enjoys the therapeutic effect of heat during massage.",
            treatmentFrequency: "Recommended regularly, depending on individual needs, personal preference and levels of muscle tension or stress.",
            price: "£35 / £60 / £90",
            duration: "25 / 55 / 85 mins"
        },
        {
            title: "Indian Head Massage",
            description: "A deeply relaxing treatment for the upper back, shoulders, neck, scalp and head, easing muscular tension and promoting relaxation and wellbeing.",
            benefits: ["Eases neck & shoulder tension", "Deep relaxation", "Stimulates the scalp", "Reduces everyday stress"],
            fullDescription: "A deeply relaxing treatment focusing on the upper back, shoulders, neck, scalp and head, using a combination of massage techniques to ease muscular tension and promote relaxation and wellbeing.",
            detailedBenefits: [
                "Helps ease tension in the neck, shoulders and scalp",
                "Encourages deep relaxation",
                "Helps reduce feelings of everyday stress",
                "Stimulates the scalp and local circulation",
                "Helps relieve the feeling of a heavy, tense head",
                "Promotes an overall sense of wellbeing",
                "Leaves you feeling relaxed, refreshed and rebalanced"
            ],
            recommendedFor: "Ideal for clients experiencing stress, muscular tension, tight shoulders, scalp tension, or anyone who finds it difficult to fully switch off and relax. Also perfect as a regular wellbeing treatment for clients spending long periods at a desk, driving or using computers and mobile devices.",
            treatmentFrequency: "For general relaxation and wellbeing: every 3–4 weeks.",
            price: "£40",
            duration: "40 mins"
        }
    ],
    browsLashes: [
        {
            title: "Lash Lift",
            description: "A semi-permanent treatment that lifts and curls your natural lashes from the root for a longer, fuller look without extensions.",
            benefits: ["Longer, fuller lashes", "No extensions needed", "Lasts several weeks", "Low maintenance"],
            fullDescription: `A semi-permanent treatment that enhances your natural lashes by lifting and curling them from the root, creating the appearance of longer, fuller lashes without the need for extensions. This low-maintenance procedure opens up the eyes, providing a natural yet striking look that lasts for several weeks. ${patchTest}`,
            price: "£45",
            duration: "55 mins"
        },
        {
            title: "Lash Tint",
            description: "A professional tint that deepens your natural lash colour for darker, more defined lashes without daily mascara.",
            benefits: ["Darker, defined lashes", "No daily mascara", "Natural finish"],
            fullDescription: `A professional tint that deepens and enhances your natural lash colour, creating the appearance of darker, more defined lashes without the need for daily mascara. ${patchTest}`,
            price: "£15",
            duration: "15 mins"
        },
        {
            title: "Brow Lamination",
            description: "A professional treatment that smooths, lifts and sets the brow hairs for a fuller, more defined and beautifully shaped appearance.",
            benefits: ["Fuller, defined brows", "Tames unruly hairs", "Naturally polished look"],
            fullDescription: "A professional treatment that smooths, lifts and sets the brow hairs to create a fuller, more defined and beautifully shaped appearance. Perfect for unruly, sparse or uneven brows, with results that look naturally polished and effortlessly styled.",
            price: "£40",
            duration: "45 mins"
        },
        {
            title: "Eyebrow Tint",
            description: "A professional tinting treatment that enhances your natural brow colour for a fuller, more defined and polished appearance.",
            benefits: ["Adds depth & definition", "Fuller-looking brows", "Natural finish"],
            fullDescription: `A professional tinting treatment that enhances your natural brow colour, creating a fuller, more defined and polished appearance. Perfect for adding depth and definition while maintaining a beautifully natural finish. ${patchTest}`,
            price: "£10",
            duration: "15 mins"
        },
        {
            title: "Eyebrow Wax and Tint",
            description: "Shapes and defines the brows with precise waxing and professional tinting for a cleaner, fuller and more polished look.",
            benefits: ["Precise shaping", "Professional tint", "Polished finish"],
            fullDescription: `A combination treatment that shapes and defines the brows with precise waxing and professional tinting. Perfect for creating a cleaner, fuller and more polished appearance while beautifully enhancing your natural brow shape. ${patchTest}`,
            price: "£15",
            duration: "20 mins"
        }
    ],
    nails: [
        {
            title: "File and Paint",
            description: "Quick tidy and polish refresh to keep nails neat and glossy.",
            benefits: ["Shape and smooth", "Fresh polish", "Clean finish"],
            fullDescription: "A quick tidy-up for nails that need a clean, polished finish. Includes gentle filing and shaping, light cuticle care, and a fresh coat of polish to leave nails neat and glossy.",
            detailedBenefits: [
                "Neat nail shape and smooth edges",
                "Fresh, glossy polish application",
                "Quick refresh for hands on the go",
                "Clean and tidy overall finish"
            ],
            recommendedFor: "Anyone who wants a quick nail refresh with a tidy, polished look.",
            treatmentFrequency: "As needed or every 2–3 weeks to keep nails looking neat.",
            price: "£25",
            duration: "25 mins"
        },
        {
            title: "Luxury Manicure",
            description: "Hydrating manicure with mask for soft, smooth hands.",
            benefits: ["Deep hydration", "Soft skin", "Longer lasting finish"],
            fullDescription: "A luxurious manicure with added hydration. Includes all the essentials plus a nourishing mask to soften and condition the hands for a silky, pampered finish.",
            detailedBenefits: [
                "Deeply hydrates and softens skin",
                "Smooths and conditions hands",
                "Neat, polished nails",
                "Longer-lasting, well-groomed feel"
            ],
            recommendedFor: "Dry hands or anyone wanting extra nourishment with their manicure.",
            treatmentFrequency: "Every 3–4 weeks or as needed for hydration.",
            price: "£40",
            duration: "55 mins"
        },
        {
            title: "Luxury Pedicure",
            description: "Spa-style pedicure with nourishing mask for extra softness.",
            benefits: ["Intense moisture", "Silky feet", "Polished finish"],
            fullDescription: "A spa-style pedicure with added hydration. Includes all standard pedicure steps plus a rich nourishing mask to soften and restore dry feet.",
            detailedBenefits: [
                "Deeply moisturises and softens skin",
                "Smooths rough, dry areas",
                "Neat, polished nails",
                "Spa-level comfort and care"
            ],
            recommendedFor: "Dry or tired feet, or anyone wanting extra pampering.",
            treatmentFrequency: "Every 4–6 weeks or as needed for softness.",
            price: "£40",
            duration: "55 mins"
        },
        {
            title: "Gel Manicure",
            description: "Long-lasting gel colour with a glossy, chip-resistant finish.",
            benefits: ["High shine", "Chip resistant", "Lasting wear"],
            fullDescription: "A gel manicure for long-lasting, glossy colour. Includes nail shaping, cuticle care, and gel polish cured for a durable, chip-resistant finish.",
            detailedBenefits: [
                "Glossy, salon-fresh finish",
                "Chip-resistant wear for weeks",
                "Neat cuticles and clean edges",
                "Durable, low-maintenance colour"
            ],
            recommendedFor: "Anyone wanting longer-lasting polish with high shine.",
            treatmentFrequency: "Every 2–3 weeks for best appearance and maintenance.",
            price: "£45",
            duration: "55 mins"
        },
        {
            title: "Gel Pedicure",
            description: "Gel polish for toes with durable shine and clean finish.",
            benefits: ["High shine", "Durable finish", "Long wear"],
            fullDescription: "A gel pedicure for long-lasting, glossy toes. Includes nail shaping, cuticle care, and gel polish for a durable, chip-resistant finish.",
            detailedBenefits: [
                "Long-lasting, glossy finish",
                "Chip-resistant wear",
                "Neat cuticles and tidy nails",
                "Perfect for holidays and busy schedules"
            ],
            recommendedFor: "Anyone wanting durable, high-shine colour on toes.",
            treatmentFrequency: "Every 3–4 weeks for best upkeep.",
            price: "£45",
            duration: "55 mins"
        },
        {
            title: "Soak Off Gel",
            description: "Safe gel removal to protect and maintain nail health.",
            benefits: ["Gentle removal", "Protects nails", "Clean base"],
            fullDescription: "Gentle gel removal to protect the natural nail. The gel is soaked off safely to leave nails clean and ready for a fresh treatment or polish.",
            detailedBenefits: [
                "Safe removal without damage",
                "Protects natural nail health",
                "Clean, smooth nail surface",
                "Preps nails for next treatment"
            ],
            recommendedFor: "Anyone removing gel polish safely between treatments.",
            treatmentFrequency: "As needed when gel polish is ready to be removed.",
            price: "£15",
            duration: "20 mins"
        },
        {
            title: "Soak Off & Reapplication",
            description: "Remove old gel and refresh with a new, flawless set.",
            benefits: ["Clean removal", "Fresh new colour", "Smooth finish"],
            fullDescription: "A complete refresh that includes safe gel removal and a new gel application. Nails are prepped and polished for a flawless, long-lasting finish.",
            detailedBenefits: [
                "Safe removal of previous gel",
                "Fresh, glossy new colour",
                "Smooth, even finish",
                "Long-lasting, chip-resistant wear"
            ],
            recommendedFor: "Anyone who wants a full gel refresh in one appointment.",
            treatmentFrequency: "Every 2–3 weeks to maintain gel colour.",
            price: "£30",
            duration: "60 mins"
        }
    ],
    packages: [
        {
            title: "Microneedling Essential",
            description: "3 professional microneedling treatments (55 minutes) + medical-grade serums + barrier-repair mask.",
            benefits: ["3 microneedling sessions", "Skin-specific serums", "Soothing repair mask"],
            fullDescription: "A results-driven microneedling programme designed to enhance skin texture, stimulate collagen production, and restore natural radiance. This treatment supports cellular renewal while improving overall skin quality in a controlled, medical-grade environment.",
            detailedBenefits: [
                "3 professional microneedling treatments (55 minutes)",
                "Medical-grade, skin-specific serums",
                "Post-treatment soothing and barrier-repair mask"
            ],
            price: "£255"
        },
        {
            title: "Advanced Skin Boost",
            description: "3 microneedling treatments (55 minutes) + 2 Profhilo skin boosters.",
            benefits: ["3 microneedling sessions", "2 Profhilo boosters", "Deep hydration"],
            fullDescription: "An advanced aesthetic programme combining collagen induction therapy with injectable-grade skin boosters. Designed to deeply hydrate, restore elasticity, and visibly rejuvenate the skin at a cellular level.",
            detailedBenefits: [
                "3 microneedling treatments (55 minutes)",
                "2 Profhilo skin boosters"
            ],
            price: "£655"
        },
        {
            title: "Ultimate Skin Transformation",
            description: "3 microneedling treatments (55 minutes) + 2 Polynucleotide skin boosters.",
            benefits: ["3 microneedling sessions", "2 Polynucleotide boosters", "Long-term results"],
            fullDescription: "A comprehensive skin transformation programme tailored for clients seeking long-term, visible improvement. This protocol combines repeated microneedling sessions with premium skin boosters to achieve optimal regeneration, improved elasticity, and refined skin texture.",
            detailedBenefits: [
                "3 microneedling treatments (55 minutes)",
                "2 Polynucleotide skin boosters"
            ],
            price: "£505"
        },
        {
            title: "Signature Relax & Glow",
            description: "Full body massage + bespoke 25-minute facial + scalp and décolleté massage.",
            benefits: ["Full body massage", "Bespoke facial", "Scalp & décolleté massage"],
            fullDescription: "A signature treatment designed to promote deep relaxation while restoring skin vitality. This carefully curated experience combines a therapeutic full body massage with a customised facial to rebalance the body and enhance skin radiance.",
            detailedBenefits: [
                "Relaxing full body massage",
                "Bespoke 25-minute facial tailored to skin type",
                "Cleansing, exfoliation, mask & hydration",
                "Scalp and décolleté massage",
                "SPF application"
            ],
            price: "£85",
            duration: "85 mins"
        },
        {
            title: "Luxury Body and Skin",
            description: "55-minute full body massage + 55-minute advanced facial treatment.",
            benefits: ["55-min full body massage", "55-min advanced facial", "Regenerating mask"],
            fullDescription: "An elevated wellness and skin rejuvenation experience combining tension-releasing massage with an advanced facial treatment. Designed to improve circulation, promote lymphatic drainage, and restore skin health and luminosity.",
            detailedBenefits: [
                "55-minute full body massage",
                "55-minute advanced facial treatment",
                "Deep cleanse, exfoliation & targeted serums",
                "Facial massage (lifting & drainage techniques)",
                "Regenerating mask",
                "Finishing products"
            ],
            price: "£120",
            duration: "110 mins"
        }
    ]
};
