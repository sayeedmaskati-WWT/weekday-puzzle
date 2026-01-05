# 📅 WeekDay Calendar Puzzle Solver

An interactive web-based solver for the WeekDay calendar puzzle. Select any date (month, day, and weekday) and the solver will instantly find the solution showing how to place all 10 unique pieces on the board to reveal your chosen date.

> **Note:** This project is currently in local development mode and not yet hosted online.

## ✨ Features

✅ **Interactive Date Selection** - Choose any month, day, and weekday combination  
✅ **Instant WebAssembly Solver** - Lightning-fast solutions powered by Rust/WASM  
✅ **Step-by-Step Visualization** - Animated piece placement to see the solution unfold  
✅ **All 10 Puzzle Pieces** - Visual display of each unique piece shape  
✅ **Responsive Design** - Optimized for desktop and mobile devices  
✅ **Modern UI** - Beautiful gradient design with smooth animations  
✅ **Today's Date Preselected** - Automatically highlights today's date on load

## 🚀 Quick Start

### Prerequisites
- Python 3.x (for local HTTP server)
- Or any other local HTTP server

### Running Locally

**Option 1: Using PowerShell Script (Recommended for Windows)**
```powershell
.\serve.ps1
```
Then open **http://localhost:8000** in your browser.

**Option 2: Using Python**
```bash
# If you have Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```
Then open **http://localhost:8000** in your browser.

**Option 3: Using Node.js**
```bash
npx http-server -p 8000
```

**Option 4: Using VS Code Live Server**
- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

### Why Do I Need a Server?

The puzzle uses WebAssembly (WASM) files which browsers block when opening HTML files directly from the file system (`file://` protocol). Running an HTTP server (`http://`) solves this security restriction.

## 🎮 How to Use

1. **Select a month** from the dropdown (Jan-Dec)
2. **Select a day** (1-31)
3. **Select a weekday** (Sun-Sat)
4. Click **"Solve Puzzle"** to find the solution
5. Use **"Next Step"** button to watch pieces being placed one at a time
6. Click **"Reset"** to try a different date or start over

**Tip:** The current date is automatically preselected when you load the page!

## 📁 Project Structure

```
weekday-puzzle/
├── index.html              # Main puzzle application (standalone)
├── app.js                  # Alternative UI logic
├── main.js                 # Additional JavaScript utilities
├── worker.js               # Service worker for Cloudflare deployment
├── style.css               # Styling
├── serve.ps1               # PowerShell script to start local server
├── package.json            # NPM configuration
├── wrangler.toml           # Cloudflare Workers configuration
├── pkg/                    # WebAssembly solver module
│   ├── *.wasm              # Compiled Rust solver (binary)
│   ├── *.js                # WASM JavaScript bindings
│   └── package.json        # Package metadata
└── favicon/                # App icons and PWA assets
    └── site.webmanifest    # Web app manifest
```

## 🧩 About the Puzzle

The **WeekDay Calendar Puzzle** is a physical puzzle where you must fit 10 uniquely-shaped pieces onto a board to reveal any date on the calendar. Each piece is a different shape, and finding the correct arrangement requires spatial reasoning and logical thinking. This solver helps you find solutions instantly!

## 🎯 Technical Details

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Solver Engine**: Rust compiled to WebAssembly for optimal performance
- **Algorithm**: Backtracking with constraint satisfaction
- **Build Tool**: wasm-pack (for Rust to WASM compilation)
- **Hosting Options**: Ready for Cloudflare Pages, Netlify, Vercel, or GitHub Pages

## 🚀 Future Deployment Options

This project is configured and ready to deploy to:
- **Cloudflare Pages** (config: `wrangler.toml`)
- **Netlify** (drag & drop ready)
- **Vercel** (zero-config deployment)
- **GitHub Pages** (static hosting)
- **Firebase Hosting**
- **Surge.sh**

## 🐛 Troubleshooting

**Problem:** "Error: Make sure to run from http server and build is complete"  
**Solution:** You must run the app through an HTTP server (not open index.html directly). Use `.\serve.ps1` or any other local server.

**Problem:** Server won't start  
**Solution:** Make sure Python is installed, or use an alternative server method listed above.

## 👨‍💻 Credits

**Developer**: Sayeed Maskati  
**Property of**: Woodwhiz Toys™  
**Year**: 2025  
**License**: All Rights Reserved

---

Made with ❤️ for puzzle enthusiasts worldwide 🧩
