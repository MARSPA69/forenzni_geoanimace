@echo off
chcp 65001 >nul
cd /d "C:\Users\mspan\Desktop\forenzni_geoanimace_repo"

echo ============================================
echo   Aktualizace webu - Forenzni geoanimace
echo ============================================
echo.

git add .
git status --short
echo.

set /p POPIS="Popis zmeny (Enter = Aktualizace webu): "
if "%POPIS%"=="" set POPIS=Aktualizace webu

git commit -m "%POPIS%"
git push origin main

echo.
echo ============================================
echo   Hotovo! Vercel (forenzni_geoanimace_app)
echo   nasadi nejblizsi deploy.
echo   URL: https://forenzni-geoanimace-app.vercel.app
echo ============================================
echo.
pause
