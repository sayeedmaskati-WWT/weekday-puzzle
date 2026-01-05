// WeekDay Calendar Puzzle Solver - JavaScript Logic

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const COLOR_MAP = {
    '0': 'var(--color-0)',
    '1': 'var(--color-1)',
    '2': 'var(--color-2)',
    '3': 'var(--color-3)',
    '4': 'var(--color-4)',
    '5': 'var(--color-5)',
    '6': 'var(--color-6)',
    '7': 'var(--color-7)',
    '8': 'var(--color-8)',
    '9': 'var(--color-9)',
    'M': 'var(--color-selected)',
    'D': 'var(--color-selected)',
    'W': 'var(--color-selected)',
    '#': 'var(--color-wall)'
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initializeSelects();
    setupEventListeners();
    highlightTodaySelection();
});

function initializeSelects() {
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const weekdaySelect = document.getElementById('weekday');
    
    // Populate months
    MONTHS.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
    
    // Populate days
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
    
    // Populate weekdays
    WEEKDAYS.forEach((day, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = day;
        weekdaySelect.appendChild(option);
    });
    
    // Set to today's date
    const today = new Date();
    monthSelect.value = today.getMonth() + 1;
    daySelect.value = today.getDate();
    weekdaySelect.value = today.getDay();
}

function setupEventListeners() {
    const solveBtn = document.getElementById('solve-btn');
    solveBtn.addEventListener('click', solvePuzzle);
    
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const weekdaySelect = document.getElementById('weekday');
    
    monthSelect.addEventListener('change', updateBoardHighlight);
    daySelect.addEventListener('change', updateBoardHighlight);
    weekdaySelect.addEventListener('change', updateBoardHighlight);
}

function highlightTodaySelection() {
    updateBoardHighlight();
}

function updateBoardHighlight() {
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const weekday = parseInt(document.getElementById('weekday').value);
    
    // Clear all selections
    document.querySelectorAll('#board-template .cell').forEach(cell => {
        cell.classList.remove('selected');
    });
    
    // Calculate positions
    const monthIdx = month - 1;
    const dayIdx = day + 13; // days start at position 14 (row 2)
    const weekdayIdx = weekday < 4 ? 45 + weekday : 49 + weekday; // weekdays position
    
    const allCells = document.querySelectorAll('#board-template .cell');
    if (allCells[monthIdx]) allCells[monthIdx].classList.add('selected');
    if (allCells[dayIdx]) allCells[dayIdx].classList.add('selected');
    if (allCells[weekdayIdx]) allCells[weekdayIdx].classList.add('selected');
}

async function solvePuzzle() {
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const weekday = parseInt(document.getElementById('weekday').value);
    const allowFlip = document.getElementById('allow-flip').checked;
    
    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('solution-section').style.display = 'none';
    
    try {
        // Try to use WASM solver
        await solvePuzzleWithWASM(month, day, weekday, allowFlip);
    } catch (error) {
        console.error('Error solving puzzle:', error);
        alert('Error solving puzzle. Please try again.');
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

async function solvePuzzleWithWASM(month, day, weekday, allowFlip) {
    try {
        // Load the WASM module from main.js
        const wasmModule = await import('./main.js');
        if (wasmModule.default) await wasmModule.default(); // Initialize WASM
        
        const boardStr = wasmModule.find_solution(
            month,
            day,
            weekday,
            3, // WeekDay puzzle type
            allowFlip
        );
        
        if (!boardStr || boardStr === '') {
            document.getElementById('solution-info').innerHTML = `
                <div style="padding: 20px; background: #fff3cd; border-radius: 8px;">
                    ❌ No solution found for ${MONTHS[month-1]} ${day}, ${WEEKDAYS[weekday]}<br>
                    Try enabling "Allow piece flipping" option
                </div>
            `;
            document.getElementById('solution-section').style.display = 'block';
            return;
        }
        
        displaySolution(boardStr, month, day, weekday);
    } catch (error) {
        console.error('WASM error:', error);
        await solvePuzzleWithJS(month, day, weekday, allowFlip);
    }
}

async function solvePuzzleWithJS(month, day, weekday, allowFlip) {
    // Fallback message if WASM not compiled
    document.getElementById('solution-info').innerHTML = `
        <div style="padding: 20px; background: #fff3cd; border-radius: 8px; border: 2px solid #ffc107;">
            <h3>🔧 Setup Required</h3>
            <p>To solve puzzles, you need to compile the Rust solver to WebAssembly:</p>
            <ol style="text-align: left; margin: 15px 0; padding-left: 30px;">
                <li>Open terminal in project root</li>
                <li>Run: <code style="background: #f5f5f5; padding: 2px 6px; border-radius: 3px;">npm install</code></li>
                <li>Run: <code style="background: #f5f5f5; padding: 2px 6px; border-radius: 3px;">npm run build</code></li>
                <li>Refresh this page</li>
            </ol>
            <p><strong>Selected:</strong> ${MONTHS[month-1]} ${day}, ${WEEKDAYS[weekday]}</p>
        </div>
    `;
    document.getElementById('solution-section').style.display = 'block';
}

function displaySolution(boardStr, month, day, weekday) {
    const lines = boardStr.trim().split('\n');
    const board = lines.map(line => line.trim().split(' '));
    
    document.getElementById('solution-info').innerHTML = `
        <strong>✅ Solution found for ${MONTHS[month-1]} ${day}, ${WEEKDAYS[weekday]}</strong>
    `;
    
    const solutionBoard = document.getElementById('solution-board');
    solutionBoard.innerHTML = '';
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // Row 7: Handle banner text spanning 4 columns
            if (i === 7 && j === 0) {
                const banner = document.createElement('div');
                banner.className = 'banner-text';
                banner.textContent = 'A Puzzle A Day';
                banner.style.background = COLOR_MAP['#'];
                solutionBoard.appendChild(banner);
                j += 3; // Skip next 3 cells as banner spans 4 columns
                continue;
            }
            
            const cell = document.createElement('div');
            cell.className = 'cell';
            
            const value = board[i][j];
            cell.style.background = COLOR_MAP[value] || COLOR_MAP['#'];
            
            if (value === 'M') {
                cell.textContent = MONTHS[month - 1];
            } else if (value === 'D') {
                cell.textContent = day;
            } else if (value === 'W') {
                cell.textContent = WEEKDAYS[weekday];
            } else if (value !== '#' && value !== '.') {
                cell.textContent = value;
            }
            
            solutionBoard.appendChild(cell);
        }
    }
    
    document.getElementById('solution-section').style.display = 'block';
    document.getElementById('solution-section').scrollIntoView({ behavior: 'smooth' });
}
