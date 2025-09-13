const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT) || 8080;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        service: 'Layout Designer',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// API endpoints for layout functionality
app.get('/api/palettes', (req, res) => {
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
        { name: "SilverFox", hex: "#c6c4be" },
        { name: "Bark Modern", hex: "#636055" },
        { name: "Centre", hex: "#929b84" },
        { name: "Floor", hex: "#343531" },
        { name: "Modern Button", hex: "#515151" },
        { name: "Seurat", hex: "#282825" },
        { name: "Barcelona", hex: "#3d3a36" },
        { name: "AppleStore", hex: "#E5E5E5" },
        { name: "Modernist", hex: "#E0E2D7" },
        { name: "Professional", hex: "#7C796D" },
        { name: "Schema", hex: "#AAAAA3" },
        { name: "Forged Steel", hex: "#A9A9A9" },
        { name: "Morning Mist", hex: "#DADADA" },
        { name: "Milan II", hex: "#dfe2cf" },
        { name: "Elephant", hex: "#E2E2E2" },
        { name: "Glacier", hex: "#D9D9D9" }
    ];
    
    res.json({
        palettes: {
            grays: grayPalette
        }
    });
});

app.post('/api/layouts', (req, res) => {
    // Save layout endpoint (could integrate with database)
    const layout = req.body;
    
    // Validate layout data
    if (!layout.viewport || !layout.blocks) {
        return res.status(400).json({ 
            error: 'Invalid layout data',
            message: 'Layout must include viewport and blocks'
        });
    }
    
    // Here you could save to database
    // For now, just acknowledge receipt
    res.json({
        message: 'Layout received successfully',
        timestamp: new Date().toISOString(),
        blockCount: layout.blocks.length,
        viewport: layout.viewport
    });
});

app.get('/api/layouts/:id', (req, res) => {
    // Load layout endpoint
    const layoutId = req.params.id;
    
    // This would typically load from database
    // For now, return a sample layout
    res.json({
        id: layoutId,
        message: 'Layout loading endpoint ready',
        sampleLayout: {
            viewport: { width: 1200, height: 800 },
            blocks: [
                {
                    id: 1,
                    title: "Sample Block",
                    color: "#eaeddd",
                    xRatio: 0.1,
                    yRatio: 0.1,
                    wRatio: 0.3,
                    hRatio: 0.2
                }
            ]
        }
    });
});

// Template generation endpoints
app.get('/api/templates/css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.send(`/* Layout Designer CSS Template */
.layout-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.layout-block {
  position: absolute;
  /* Add your block styles here */
}`);
});

app.get('/api/templates/html', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Layout</title>
    <link rel="stylesheet" href="/api/templates/css">
</head>
<body>
    <div class="layout-container">
        <!-- Your generated blocks will go here -->
    </div>
</body>
</html>`);
});

// Error handling
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        message: 'The layout endpoint you are looking for does not exist',
        availableEndpoints: [
            'GET /',
            'GET /health',
            'GET /api/palettes',
            'POST /api/layouts',
            'GET /api/layouts/:id',
            'GET /api/templates/css',
            'GET /api/templates/html'
        ]
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something broke in the layout engine!',
        message: 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`Layout Designer running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
    console.log('API endpoints available:');
    console.log(`  GET /health - Service health check`);
    console.log(`  GET /api/palettes - Color palette data`);
    console.log(`  POST /api/layouts - Save layout data`);
    console.log(`  GET /api/layouts/:id - Load layout data`);
    console.log(`  GET /api/templates/css - CSS template`);
    console.log(`  GET /api/templates/html - HTML template`);
});

module.exports = app;