"use strict";
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["PNG"] = "png";
    ImageFormat["JPEG"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPNG() {
        if (this.formats.includes(ImageFormat.PNG)) {
            return this;
        }
        this.formats.push(ImageFormat.PNG);
        return this;
    }
    addJPEG() {
        if (this.formats.includes(ImageFormat.JPEG)) {
            return this;
        }
        this.formats.push(ImageFormat.JPEG);
        return this;
    }
    addResolution(width, height) {
        this.resolutions.push({ width, height });
        return this;
    }
    build() {
        const res = [];
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height,
                });
            }
        }
        return res;
    }
}
console.log(new ImageBuilder()
    .addJPEG()
    .addPNG()
    .addResolution(800, 600)
    .addResolution(1920, 1080)
    .build());
