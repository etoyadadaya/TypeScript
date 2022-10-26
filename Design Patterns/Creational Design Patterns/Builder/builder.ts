enum ImageFormat {
    PNG = 'png',
    JPEG = 'jpeg',
}

interface IResolution {
    width: number;
    height: number;
}

interface IImageConversion extends IResolution{
    format: ImageFormat;
}


class ImageBuilder {
    private formats: ImageFormat[] = [];
    private resolutions: IResolution[] = [];

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

    addResolution(width: number, height: number) {
        this.resolutions.push({ width, height });
        return this;
    }

    // packaging in just one item
    build(): IImageConversion[] {
        const res: IImageConversion[] = [];
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

// creating new instance and printing
console.log(new ImageBuilder()
    .addJPEG()
    .addPNG()
    .addResolution(800, 600)
    .addResolution(1920, 1080)
    .build()
);


/*
     [LOG]: [{
         "format": "jpeg",
         "width": 800,
         "height": 600
     }, {
         "format": "png",
         "width": 800,
         "height": 600
     }, {
         "format": "jpeg",
         "width": 1920,
         "height": 1080
     }, {
         "format": "png",
         "width": 1920,
         "height": 1080
     }]
*/
