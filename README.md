# 📅 WeekDay Calendar Puzzle Solver

An interactive web-based solver for the WeekDay calendar puzzle. Select any date (month, day, and weekday) and the solver will instantly find the solution showing how to place all 10 unique pieces on the board to reveal your chosen date.

## 🎮 How It Works

The **WeekDay Calendar Puzzle** is a physical puzzle where you must fit 10 uniquely-shaped pieces onto a board to reveal any date on the calendar. This web application:

1. **Takes your date input** - Choose month, day, and weekday
2. **Runs the solver** - Uses a Rust-compiled WebAssembly solver for lightning-fast computation
3. **Shows the solution** - Displays the pieces visually on the calendar board
4. **Step-by-step visualization** - Watch each piece being placed one at a time with the Next Step button
5. **Real-time highlighting** - Shows your selected date with an animated glow effect throughout solving

## ✨ Features

✅ **Interactive Date Selection** - Choose any month, day, and weekday combination  
✅ **Auto-weekday Calculation** - Automatically calculates the correct weekday when you select month/day  
✅ **Instant WebAssembly Solver** - Lightning-fast solutions powered by Rust/WASM  
✅ **Step-by-Step Visualization** - Animated piece placement to see the solution unfold  
✅ **Dynamic Date Highlighting** - Selected date tiles show persistent animated glow during solving  
✅ **All 10 Puzzle Pieces** - Visual display of each unique piece shape with toggle show/hide  
✅ **Today's Date Preselected** - Automatically highlights today's date on page load  
✅ **Mobile Responsive Design** - Optimized layout for phones, tablets, and desktops  
✅ **Dynamic Year Display** - Year automatically updates each year (2027, 2028, etc.)  
✅ **Modern UI** - Beautiful gradient design with smooth animations and pulsing effects  

### Recent Enhancements (2026)
- ✨ **Animated glow effect** on current date tiles with pulsing border animation
- ✨ **Auto-weekday calculation** - Eliminates manual weekday selection errors
- ✨ **Mobile-optimized controls** - Horizontal layout for month/day/weekday dropdowns
- ✨ **Dynamic year tiles** - Calendar year automatically updates based on system date
- ✨ **Persistent highlighting** - Date highlighting remains visible during solve steps
- ✨ **Reset functionality** - Board refresh maintains date highlighting
- ✨ **Responsive button layout** - Smart centering for mobile (single button centered, dual buttons side-by-side)
- ✨ **Compact mobile spacing** - Minimized gaps between controls, solve button, and calendar on mobile

## 🚀 Quick Start

### Prerequisites
- Python 3.x (for local HTTP server)
- Or any other local HTTP server
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Running Locally

**Option 1: Using PowerShell Script (Recommended for Windows)**
```powershell
cd weekday-puzzle
.\serve.ps1
```
Then open **http://localhost:8000** in your browser.

**Option 2: Using Python**
```bash
cd weekday-puzzle

# If you have Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```
Then open **http://localhost:8000** in your browser.

**Option 3: Using Node.js**
```bash
cd weekday-puzzle
npx http-server -p 8000
```
Then open **http://localhost:8000** in your browser.

**Option 4: Using VS Code Live Server**
- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

### Why Do I Need a Server?

The puzzle uses WebAssembly (WASM) files which browsers block when opening HTML files directly from the file system (`file://` protocol). Running an HTTP server (`http://`) solves this security restriction.

## 📱 Mobile Responsive Design

The application is fully optimized for mobile devices:

- **Responsive Controls** - Month, Day, and Weekday dropdowns display horizontally on mobile
- **Compact Calendar** - Calendar grid scales appropriately for smaller screens
- **Smart Button Layout** - Buttons intelligently center when single or display side-by-side when multiple
- **Touch-Friendly** - Large tap targets for easy mobile interaction
- **Optimized Spacing** - Minimized gaps between sections for better mobile viewing
- **Full-Width Container** - Mobile layout uses full screen width for better space utilization
- **Smaller Text** - Font sizes adjust for readability on mobile devices

**Tested on:**
- iPhone (various sizes)
- Android phones
- Tablets (iPad, Android tablets)
- Desktop browsers

## 🎮 How to Use

1. **Select a month** from the dropdown (Jan-Dec)
2. **Select a day** (1-31)
3. **Select a weekday** (Sun-Sat) - or let it auto-calculate when you change month/day
4. Click **"Solve Puzzle"** to find the solution
5. Use **"Next Step"** button to watch pieces being placed one at a time
6. Click **"Reset"** to try a different date or start over
7. Click **"Show Puzzle Pieces"** to see all 10 piece shapes

**Pro Tips:**
- The current date is automatically preselected when you load the page
- Selected date tiles highlight with an animated glow effect
- Weekday is automatically calculated - just pick month and day!
- Puzzle pieces can be toggled on/off for cleaner view

## 🔄 Dynamic Year Functionality

The year display automatically updates based on the current system date:
- In 2026: Shows "20" and "26" 
- In 2027: Shows "20" and "27"
- In 2030: Shows "20" and "30"
- **No code changes needed!** The application is future-proof

The footer copyright and all year calculations update automatically with the system date.

## 📁 Project Structure

```
weekday-puzzle/
├── index.html              # Main puzzle application (all-in-one file)
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
- **Animation**: CSS @keyframes for smooth pulsing glow effects
- **Responsive Framework**: CSS Grid with mobile-first media queries

## 🌐 Deployment

This project is configured and ready to deploy to:
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
**Collaborators**: Woodwhiz Toys Team (@sayeedmaskati-WWT)  
**Property of**: Woodwhiz Toys™  
**Year**: 2026  
**License**: All Rights Reserved

---

Made with ❤️ for puzzle enthusiasts worldwide 🧩
