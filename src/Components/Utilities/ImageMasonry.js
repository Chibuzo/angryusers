import React, { useEffect, useState } from "react";
import ReactImageMasonry from "react-image-masonry";

const ImageMasonry = ({ images, imgCount }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        (function () {
            let imgs = [];
            for (let i = 0; i < imgCount; i++) {
                imgs.push(images[i]);
                if (i === 4) break;
            }
            setSelectedImages(imgs);
        })();
    }, [images]);

    return (
        <ReactImageMasonry
            imageUrls={selectedImages}
            numCols={2}
            animate={true}
        >
        </ReactImageMasonry>
    );
}

export default ImageMasonry;