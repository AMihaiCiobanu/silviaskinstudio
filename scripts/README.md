<!-- @format -->

# Image Optimization Script

## Ce face acest script?

Convertește toate imaginile JPEG/PNG din proiect în format **WebP**, care este mult mai eficient pentru web:

- Reduce dimensiunea imaginilor cu ~80-85%
- Păstrează calitatea vizuală
- Accelerează încărcarea site-ului

## Cum se folosește?

```bash
npm run optimize-images
```

## Configurare

Editează `scripts/optimize-images.js` pentru a ajusta:

- **webpQuality**: calitatea imaginilor (1-100, default: 82)
- **maxWidth/maxHeight**: dimensiunea maximă (default: 1920px)
- **inputDirs**: directoarele procesate

## Rezultate

După rulare, vei găsi:

- Fișiere `.webp` alături de originalele `.jpeg`/`.jpg`/`.png`
- Un raport detaliat cu economii de spațiu
- Imaginile originale rămân neatinse (pentru siguranță)

## După optimizare

1. ✅ Testează site-ul în browser
2. ✅ Verifică că toate imaginile se încarcă corect
3. ⚠️ Dacă totul funcționează, poți șterge fișierele JPEG originale pentru a economisi spațiu

## Rulare pe viitor

Rulează scriptul din nou după ce adaugi imagini noi în proiect. Scriptul va sări peste imaginile deja optimizate.
