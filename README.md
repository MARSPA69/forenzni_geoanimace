# Forenzní geoanimace (statický web pro Vercel)

Public-facing web + chráněná sekce s odkazem na archiv animační aplikace SSHR Bohuslavice.

## Struktura
- `index.html` – hlavní stránka, shrnutí Metodiky, Uživatelského manuálu, Obchodní strategie a Hodnoticí zprávy.
- `login.html` – jednoduchý heslový vstup; po ověření se zobrazí odkaz ke stažení archivu.
- `assets/css/styles.css` – stylování v odstínech modré/navy, fonty Space Grotesk + Manrope.
- `assets/js/main.js` – drobná UX logika (smooth scroll).
- `assets/js/login.js` – ověření hesla a odhalení odkazu na archiv.
- `downloads/SSHR_Bohuslavice.zip` – exportovaný archiv `adminlte/dist/SSHR_Bohuslavice`.
- `vercel.json` – statické nasazení, čisté URL, cache hlavičky pro assets/downloads.

## Heslo
- Konstantně nastaveno v `assets/js/login.js`: `AnimacniAPKA2023`.
- Po úspěšném ověření se uloží flag do `sessionStorage` a formulář se skryje.

## Nasazení na Vercel
1. Vytvořte nový Vercel projekt s rootem `forenzni_geoanimace/`.
2. Build command: none (statický web). Output directory: `.` (výchozí).
3. Po deploy ověřte: `index.html`, `login.html`, a stažení `downloads/SSHR_Bohuslavice.zip`.

## Co ještě doplnit
- Přidat PDF/DOCX verze dokumentů do nové složky (např. `docs/`) a odkázat je z bloku „Dokumentace“.
- Nahrát fotky/obrázky do `assets/` a vložit do sekcí podle potřeby.
- Pokud bude nutná silnější ochrana neveřejné části, použijte Vercel middleware (edge) místo client-side hesla.
