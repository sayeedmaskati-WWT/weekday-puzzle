# Quick local server for testing the WeekDay puzzle
# Run this from the weekday-puzzle directory

Write-Host "🚀 Starting local server for WeekDay Puzzle..." -ForegroundColor Green
Write-Host "📂 Serving from: weekday-puzzle/" -ForegroundColor Cyan
Write-Host "🌐 Open: http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
Write-Host ""

# Check if Python is available
if (Get-Command python -ErrorAction SilentlyContinue) {
    python -m http.server 8000
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    python3 -m http.server 8000
} else {
    Write-Host "❌ Python not found. Install Python or use another server." -ForegroundColor Red
    Write-Host "Alternatives:" -ForegroundColor Yellow
    Write-Host "  - Install 'http-server': npm install -g http-server && http-server -p 8000" -ForegroundColor Gray
    Write-Host "  - Use VS Code Live Server extension" -ForegroundColor Gray
}
