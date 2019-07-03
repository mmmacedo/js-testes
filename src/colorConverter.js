module.exports = {
    toHex: function (rgb) {
        let finalHex = '#'
        for (let i = 0; i < rgb.length; i++) {
            let hex = Number(rgb[i]).toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }
            finalHex += hex;
        }
        return finalHex;
    },
    toRGB: function (hex) {
        if (hex[0] === '#') {
            hex = hex.substring(1, hex.length);
        }

        const red = parseInt(hex.substring(0, 2), 16);
        const green = parseInt(hex.substring(2, 4), 16);
        const blue = parseInt(hex.substring(4, 6), 16);

        return [red, green, blue]
    }
};