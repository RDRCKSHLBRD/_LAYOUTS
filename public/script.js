// StateJS System - Central Coordinate Hub
const LayoutState = {
    viewport: { width: 0, height: 0 },
    blocks: [],
    selectedBlock: null,
    dragState: null,
    resizeState: null,
    blockCounter: 0
};

// Color Palette - Your Gray Collection
const grayPalette = [
    { name: "Champinon", hex: "#eaeddd" },
    { name: "Texture", hex: "#8e8d87" },
    { name: "Experiment", hex: "#bebfba" },
    { name: "Pony", hex: "#4f4f4a" },
    { name: "Cat II", hex: "#8b8c85" },
    { name: "Exponent I", hex: "#dbdac8" },
    { name: "Naples", hex: "#e4e8e2" },
    { name: "Pussy Cat", hex: "#bfc4bb" },
    { name: "smokeSignal", hex: "#2b2a29" },
    { name: "Asmodius", hex: "#666d6b" },
    { name: "Kull", hex: "#2b2a27" },
    { name: "Tester", hex: "#6d6969" },
    { name: "ProjectCover", hex: "#caccb4" },
    { name: "Wednesday", hex: "#7a7272" },
    { name: "SilverFox", hex: "#c6c4be" },
    { name: "tarpaulin", hex: "#b2aea1" },
    { name: "Bark Modern", hex: "#636055" },
    { name: "Wetland", hex: "#3f3d2d" },
    { name: "Centre", hex: "#929b84" },
    { name: "outerWalls", hex: "#e4ead8" },
    { name: "Floor", hex: "#343531" },
    { name: "interiorWall", hex: "#aab29a" },
    { name: "SilverFox", hex: "#888b87" },
    { name: "Maybe", hex: "#b7bab5" },
    { name: "Modern Button", hex: "#515151" },
    { name: "Tech Support", hex: "#a5a2a2" },
    { name: "Seurat", hex: "#282825" },
    { name: "Conte II", hex: "#3f372a" },
    { name: "Barcelona", hex: "#3d3a36" },
    { name: "St. Etienne", hex: "#525445" },
    { name: "Placeholder II", hex: "#b8bca7" },
    { name: "Amalfi", hex: "#dcddca" },
    { name: "Gallery", hex: "#AAB29A" },
    { name: "NEW-Reed", hex: "#9DAA9F" },
    { name: "AppleStore", hex: "#E5E5E5" },
    { name: "AccentGray", hex: "#E2E2D5" },
    { name: "Technique", hex: "#ADACA1" },
    { name: "Apple", hex: "#8b8c85" },
    { name: "Modernist", hex: "#E0E2D7" },
    { name: "Snow Clouds II", hex: "#D5D9C3" },
    { name: "Snow Clouds III", hex: "#CCD1B9" },
    { name: "Snow Clouds IV", hex: "#A7A891" },
    { name: "Snow Clouds V", hex: "#CCD2BA" },
    { name: "Snow Clouds VI", hex: "#9AA28D" },
    { name: "Snow Clouds VII", hex: "#C3C9B4" },
    { name: "Rocket", hex: "#BCBCBB" },
    { name: "Professional", hex: "#7C796D" },
    { name: "Jumpsuit", hex: "#727268" },
    { name: "Manual", hex: "#E2E2DC" },
    { name: "HI FI", hex: "#605E4A" },
    { name: "Schema", hex: "#AAAAA3" },
    { name: "Noveaux", hex: "#b5c6bd" },
    { name: "Mushroom", hex: "#e1e5d6" },
    { name: "Mushroom II", hex: "#F9F8F4" },
    { name: "Mosco", hex: "#888e7c" },
    { name: "Cartesian", hex: "#b7b19e" },
    { name: "Math Class", hex: "#b7b1a5" },
    { name: "Forged Steel", hex: "#A9A9A9" },
    { name: "Weathered Stone", hex: "#BFBFBF" },
    { name: "Ironclad", hex: "#4A4A4A" },
    { name: "Morning Mist", hex: "#DADADA" },
    { name: "Silver Lining", hex: "#ECECEC" },
    { name: "Milan II", hex: "#dfe2cf" },
    { name: "Venician Coat", hex: "#C1BBA0" },
    { name: "Old Flag", hex: "#C1BEA4" },
    { name: "Oyster 2", hex: "#BAB5A0" },
    { name: "Oyster 3", hex: "#999B89" },
    { name: "Lichen III", hex: "#B7B69E" },
    { name: "Wooden Boat", hex: "#B8BFAC" },
    { name: "Old Moss", hex: "#443E35" },
    { name: "Running Shoe", hex: "#75695d" },
    { name: "Elephant", hex: "#969487" },
    { name: "Model Plane", hex: "#8A9EA0" },
    { name: "Airplane", hex: "#BCBAB1" },
    { name: "Eiderdown", hex: "#E0E0D5" },
    { name: "Antler", hex: "#D8D5CB" },
    { name: "Antler II", hex: "#D1CEC5" },
    { name: "Concrete", hex: "#777068" },
    { name: "Designer", hex: "#6B6B5F" },
    { name: "Smokey", hex: "#7A7968" },
    { name: "Shark", hex: "#BDC2C6" },
    { name: "Ash", hex: "#C2C4BB" },
    { name: "Smoke", hex: "#D3D3CB" },
    { name: "Elephant", hex: "#E2E2E2" },
    { name: "SilverWitch", hex: "#A0A39F" },
    { name: "SilverWitch 2", hex: "#C9C7C5" },
    { name: "Elephant II", hex: "#B7B3A9" },
    { name: "Navvy Jack", hex: "#B5B4B1" },
    { name: "Industrial", hex: "#A09F9A" },
    { name: "Malcolm", hex: "#707069" },
    { name: "Kaolin", hex: "#E1E2DE" },
    { name: "Sharky", hex: "#AAA9A3" },
    { name: "Pompeii", hex: "#87857B" },
    { name: "Castle", hex: "#D8DCD2" },
    { name: "Clay Paint", hex: "#617068" },
    { name: "New Ash", hex: "#92937D" },
    { name: "StoneHouse", hex: "#C5C6B6" },
    { name: "Pebble", hex: "#EDECE2" },
    { name: "SeaStone", hex: "#5A5956" },
    { name: "Boot", hex: "#494842" },
    { name: "SeaStone", hex: "#E2E0D7" },
    { name: "Designer II", hex: "#D1D6C5" },
    { name: "Iris I", hex: "#606062" },
    { name: "Slate II", hex: "#44423A" },
    { name: "overCoat", hex: "#44423A" },
    { name: "Tidal Sand", hex: "#D3D2CA" },
    { name: "Math Class", hex: "#59584F" },
    { name: "SeaPebble", hex: "#626154" },
    { name: "Smoke", hex: "#41454D" },
    { name: "Glacier", hex: "#D9D9D9" },
    { name: "Glacier II", hex: "#E3E3E0" },
    { name: "StoneHouse", hex: "#C5C6B6" },
    { name: "Pottery", hex: "#BBBCA7" }
];

// Ratio Engine - Core calculation system
function calculateRatios(block) {
    return {
        xRatio: block.x / LayoutState.viewport.width,
        yRatio: block.y / LayoutState.viewport.height,
        wRatio: block.width / LayoutState.viewport.width,
        hRatio: block.height / LayoutState.viewport.height
    };
}

// Viewport initialization and management
function initializeViewport() {
    const viewport = document.getElementById('viewport');
    LayoutState.viewport.width = viewport.clientWidth;
    LayoutState.viewport.height = viewport.clientHeight;
    
    // Create initial block if none exist
    if (LayoutState.blocks.length === 0) {
        createBlock(50, 50, 200, 150, grayPalette[0].hex, "Block 1");
    }
}

// Block creation and management
function createBlock(x, y, width, height, color, title) {
    LayoutState.blockCounter++;
    
    const block = {
        id: LayoutState.blockCounter,
        x: Math.max(0, Math.min(x, LayoutState.viewport.width - width)),
        y: Math.max(0, Math.min(y, LayoutState.viewport.height - height)),
        width: Math.max(20, width),
        height: Math.max(20, height),
        color,
        title,
        element: null,
        locked: false
    };
    
    LayoutState.blocks.push(block);
    renderBlock(block);
    return block;
}

function renderBlock(block) {
    const viewport = document.getElementById('viewport');
    
    // Remove existing element if it exists
    if (block.element && block.element.parentNode) {
        block.element.parentNode.removeChild(block.element);
    }
    
    const blockEl = document.createElement('div');
    blockEl.className = 'block';
    blockEl.style.left = block.x + 'px';
    blockEl.style.top = block.y + 'px';
    blockEl.style.width = block.width + 'px';
    blockEl.style.height = block.height + 'px';
    blockEl.style.backgroundColor = block.color;
    blockEl.textContent = block.title;
    blockEl.dataset.blockId = block.id;
    
    // Add resize handles
    const handles = ['nw', 'ne', 'sw', 'se', 'n', 's', 'e', 'w'];
    handles.forEach(direction => {
        const handle = document.createElement('div');
        handle.className = `resize-handle ${direction}`;
        handle.dataset.direction = direction;
        blockEl.appendChild(handle);
    });
    
    block.element = blockEl;
    viewport.appendChild(blockEl);
    
    // Event listeners
    blockEl.addEventListener('mousedown', handleBlockMouseDown);
    blockEl.addEventListener('click', selectBlock);
}

function selectBlock(e) {
    e.stopPropagation();
    const blockId = parseInt(e.target.closest('.block').dataset.blockId);
    const block = LayoutState.blocks.find(b => b.id === blockId);
    
    // Remove previous selection
    if (LayoutState.selectedBlock) {
        LayoutState.selectedBlock.element.classList.remove('selected');
    }
    
    LayoutState.selectedBlock = block;
    block.element.classList.add('selected');
    
    // Update controls
    document.getElementById('blockTitle').value = block.title;
    document.getElementById('blockColor').value = block.color;
}

function deleteSelectedBlock() {
    if (LayoutState.selectedBlock) {
        const blockIndex = LayoutState.blocks.indexOf(LayoutState.selectedBlock);
        if (blockIndex > -1) {
            LayoutState.selectedBlock.element.remove();
            LayoutState.blocks.splice(blockIndex, 1);
            LayoutState.selectedBlock = null;
            
            // Clear controls
            document.getElementById('blockTitle').value = '';
            document.getElementById('blockColor').value = '#eaeddd';
        }
    }
}

// Mouse interaction handlers
function handleBlockMouseDown(e) {
    if (e.target.classList.contains('resize-handle')) {
        startResize(e);
    } else {
        startDrag(e);
    }
}

function startDrag(e) {
    e.preventDefault();
    const blockId = parseInt(e.target.closest('.block').dataset.blockId);
    const block = LayoutState.blocks.find(b => b.id === blockId);
    
    if (block.locked) return;
    
    LayoutState.dragState = {
        block,
        startX: e.clientX - block.x,
        startY: e.clientY - block.y
    };
    
    block.element.classList.add('dragging');
    selectBlock(e);
}

function startResize(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const blockId = parseInt(e.target.closest('.block').dataset.blockId);
    const block = LayoutState.blocks.find(b => b.id === blockId);
    const direction = e.target.dataset.direction;
    
    if (block.locked) return;
    
    LayoutState.resizeState = {
        block,
        direction,
        startX: e.clientX,
        startY: e.clientY,
        startWidth: block.width,
        startHeight: block.height,
        startLeft: block.x,
        startTop: block.y
    };
    
    selectBlock({ target: block.element, stopPropagation: () => {} });
}

// Mouse move and resize logic
function handleMouseMove(e) {
    if (LayoutState.dragState) {
        const block = LayoutState.dragState.block;
        const newX = e.clientX - LayoutState.dragState.startX;
        const newY = e.clientY - LayoutState.dragState.startY;
        
        block.x = Math.max(0, Math.min(LayoutState.viewport.width - block.width, newX));
        block.y = Math.max(0, Math.min(LayoutState.viewport.height - block.height, newY));
        
        block.element.style.left = block.x + 'px';
        block.element.style.top = block.y + 'px';
    }
    
    if (LayoutState.resizeState) {
        handleResize(e);
    }
}

function handleResize(e) {
    const { block, direction, startX, startY, startWidth, startHeight, startLeft, startTop } = LayoutState.resizeState;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    let newWidth = startWidth;
    let newHeight = startHeight;
    let newX = startLeft;
    let newY = startTop;
    
    if (direction.includes('e')) newWidth = Math.max(20, startWidth + deltaX);
    if (direction.includes('w')) {
        newWidth = Math.max(20, startWidth - deltaX);
        newX = startLeft + (startWidth - newWidth);
    }
    if (direction.includes('s')) newHeight = Math.max(20, startHeight + deltaY);
    if (direction.includes('n')) {
        newHeight = Math.max(20, startHeight - deltaY);
        newY = startTop + (startHeight - newHeight);
    }
    
    // Constrain to viewport
    newX = Math.max(0, Math.min(LayoutState.viewport.width - newWidth, newX));
    newY = Math.max(0, Math.min(LayoutState.viewport.height - newHeight, newY));
    
    block.x = newX;
    block.y = newY;
    block.width = newWidth;
    block.height = newHeight;
    
    block.element.style.left = newX + 'px';
    block.element.style.top = newY + 'px';
    block.element.style.width = newWidth + 'px';
    block.element.style.height = newHeight + 'px';
}

function handleMouseUp() {
    if (LayoutState.dragState) {
        LayoutState.dragState.block.element.classList.remove('dragging');
        LayoutState.dragState = null;
    }
    LayoutState.resizeState = null;
}

// Control event handlers
function setupControls() {
    document.getElementById('addBlock').addEventListener('click', () => {
        const count = parseInt(document.getElementById('blockCount').value);
        for (let i = 0; i < count; i++) {
            const x = Math.random() * (LayoutState.viewport.width - 150);
            const y = Math.random() * (LayoutState.viewport.height - 100);
            const color = grayPalette[Math.floor(Math.random() * grayPalette.length)].hex;
            createBlock(x, y, 150, 100, color, `Block ${LayoutState.blockCounter + 1}`);
        }
    });

    document.getElementById('blockTitle').addEventListener('input', (e) => {
        if (LayoutState.selectedBlock) {
            LayoutState.selectedBlock.title = e.target.value;
            LayoutState.selectedBlock.element.textContent = e.target.value;
        }
    });

    document.getElementById('blockColor').addEventListener('change', (e) => {
        if (LayoutState.selectedBlock) {
            LayoutState.selectedBlock.color = e.target.value;
            LayoutState.selectedBlock.element.style.backgroundColor = e.target.value;
        }
    });

    document.getElementById('viewButton').addEventListener('click', showModal);
    document.getElementById('exportButton').addEventListener('click', exportLayout);
}

// Modal and export functionality
function showModal() {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modalContent');
    
    // Generate layout details
    let html = '<h4>Layout Statistics</h4>';
    html += `<p>Viewport: ${LayoutState.viewport.width} × ${LayoutState.viewport.height}</p>`;
    html += `<p>Total Blocks: ${LayoutState.blocks.length}</p><br>`;
    
    html += '<h4>Block Details</h4>';
    LayoutState.blocks.forEach(block => {
        const ratios = calculateRatios(block);
        html += `<p><strong>${block.title}</strong> - x:${ratios.xRatio.toFixed(3)} y:${ratios.yRatio.toFixed(3)} w:${ratios.wRatio.toFixed(3)} h:${ratios.hRatio.toFixed(3)}</p>`;
    });
    
    // Add export formats
    html += '<h4>Export Options</h4>';
    html += '<button onclick="exportJSON()">Export JSON</button> ';
    html += '<button onclick="exportCSS()">Export CSS</button> ';
    html += '<button onclick="exportXML()">Export XML</button>';
    
    content.innerHTML = html;
    
    // Render color palette
    renderColorPalette();
    
    modal.style.display = 'flex';
}

function renderColorPalette() {
    const palette = document.getElementById('colorPalette');
    palette.innerHTML = '';
    grayPalette.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color.hex;
        swatch.title = color.name;
        swatch.addEventListener('click', () => {
            if (LayoutState.selectedBlock) {
                LayoutState.selectedBlock.color = color.hex;
                LayoutState.selectedBlock.element.style.backgroundColor = color.hex;
                document.getElementById('blockColor').value = color.hex;
            }
        });
        palette.appendChild(swatch);
    });
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Export functions
function exportLayout() {
    exportJSON();
}

function exportJSON() {
    const layout = {
        viewport: LayoutState.viewport,
        timestamp: new Date().toISOString(),
        blocks: LayoutState.blocks.map(block => ({
            id: block.id,
            title: block.title,
            color: block.color,
            locked: block.locked,
            ...calculateRatios(block),
            // Also include absolute coordinates for reference
            absoluteX: block.x,
            absoluteY: block.y,
            absoluteWidth: block.width,
            absoluteHeight: block.height
        }))
    };
    
    downloadFile(JSON.stringify(layout, null, 2), 'layout-export.json', 'application/json');
}

function exportCSS() {
    let css = '/* Generated Layout CSS */\n';
    css += '.layout-container {\n';
    css += '  position: relative;\n';
    css += '  width: 100%;\n';
    css += '  height: 100vh;\n';
    css += '}\n\n';
    
    LayoutState.blocks.forEach(block => {
        const ratios = calculateRatios(block);
        const className = block.title.toLowerCase().replace(/\s+/g, '-');
        css += `.block-${className} {\n`;
        css += '  position: absolute;\n';
        css += `  left: ${(ratios.xRatio * 100).toFixed(2)}%;\n`;
        css += `  top: ${(ratios.yRatio * 100).toFixed(2)}%;\n`;
        css += `  width: ${(ratios.wRatio * 100).toFixed(2)}%;\n`;
        css += `  height: ${(ratios.hRatio * 100).toFixed(2)}%;\n`;
        css += `  background-color: ${block.color};\n`;
        css += '}\n\n';
    });
    
    downloadFile(css, 'layout-export.css', 'text/css');
}

function exportXML() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<layout>\n';
    xml += `  <viewport width="${LayoutState.viewport.width}" height="${LayoutState.viewport.height}" />\n`;
    xml += '  <blocks>\n';
    
    LayoutState.blocks.forEach(block => {
        const ratios = calculateRatios(block);
        xml += '    <block ';
        xml += `id="${block.id}" `;
        xml += `title="${block.title}" `;
        xml += `color="${block.color}" `;
        xml += `xRatio="${ratios.xRatio.toFixed(4)}" `;
        xml += `yRatio="${ratios.yRatio.toFixed(4)}" `;
        xml += `wRatio="${ratios.wRatio.toFixed(4)}" `;
        xml += `hRatio="${ratios.hRatio.toFixed(4)}" `;
        xml += '/>\n';
    });
    
    xml += '  </blocks>\n';
    xml += '</layout>';
    
    downloadFile(xml, 'layout-export.xml', 'application/xml');
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
}

// Keyboard shortcuts
function handleKeyDown(e) {
    if (e.key === 'Delete' || e.key === 'Backspace') {
        if (LayoutState.selectedBlock && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            deleteSelectedBlock();
        }
    }
    
    if (e.key === 'Escape') {
        closeModal();
        if (LayoutState.selectedBlock) {
            LayoutState.selectedBlock.element.classList.remove('selected');
            LayoutState.selectedBlock = null;
        }
    }
    
    // Copy/Paste functionality
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'c' && LayoutState.selectedBlock) {
            e.preventDefault();
            localStorage.setItem('copiedBlock', JSON.stringify({
                width: LayoutState.selectedBlock.width,
                height: LayoutState.selectedBlock.height,
                color: LayoutState.selectedBlock.color,
                title: LayoutState.selectedBlock.title + ' Copy'
            }));
        }
        
        if (e.key === 'v') {
            e.preventDefault();
            const copiedData = localStorage.getItem('copiedBlock');
            if (copiedData) {
                const blockData = JSON.parse(copiedData);
                createBlock(
                    Math.random() * (LayoutState.viewport.width - blockData.width),
                    Math.random() * (LayoutState.viewport.height - blockData.height),
                    blockData.width,
                    blockData.height,
                    blockData.color,
                    blockData.title
                );
            }
        }
    }
}

// Global event listeners
function setupEventListeners() {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('keydown', handleKeyDown);
    
    // Deselect on viewport click
    document.getElementById('viewport').addEventListener('click', (e) => {
        if (e.target === e.currentTarget && LayoutState.selectedBlock) {
            LayoutState.selectedBlock.element.classList.remove('selected');
            LayoutState.selectedBlock = null;
            document.getElementById('blockTitle').value = '';
            document.getElementById('blockColor').value = '#eaeddd';
        }
    });
    
    // Window resize handler
    window.addEventListener('resize', () => {
        const newWidth = document.getElementById('viewport').clientWidth;
        const newHeight = document.getElementById('viewport').clientHeight;
        
        // Proportionally adjust all blocks if viewport changes
        const scaleX = newWidth / LayoutState.viewport.width;
        const scaleY = newHeight / LayoutState.viewport.height;
        
        LayoutState.blocks.forEach(block => {
            block.x *= scaleX;
            block.y *= scaleY;
            block.width *= scaleX;
            block.height *= scaleY;
            renderBlock(block);
        });
        
        LayoutState.viewport.width = newWidth;
        LayoutState.viewport.height = newHeight;
    });
}

// Initialize application
function initializeApp() {
    initializeViewport();
    setupControls();
    setupEventListeners();
    
    console.log('Layout Designer initialized');
    console.log('Keyboard shortcuts:');
    console.log('- Delete/Backspace: Delete selected block');
    console.log('- Ctrl/Cmd+C: Copy selected block');
    console.log('- Ctrl/Cmd+V: Paste block');
    console.log('- Escape: Deselect/Close modal');
}

// Start the application
window.addEventListener('load', initializeApp);