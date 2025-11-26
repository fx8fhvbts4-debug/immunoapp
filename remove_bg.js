const { Jimp } = require('jimp');

async function removeBackground() {
    try {
        const image = await Jimp.read('icon_cell_v2.png');
        const targetColor = { r: 255, g: 255, b: 255, a: 255 }; // White
        const threshold = 30; // Tolerance for "near white"

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // Calculate distance from white
            const dist = Math.sqrt(
                Math.pow(r - targetColor.r, 2) +
                Math.pow(g - targetColor.g, 2) +
                Math.pow(b - targetColor.b, 2)
            );

            if (dist < threshold) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
            }
        });

        await image.write('icon_cell_final.png');
        console.log('Background removed successfully!');
    } catch (err) {
        console.error('Error:', err);
    }
}

removeBackground();
