const imageGallery = document.getElementById("image-gallery");
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image6.jpg",
        "image7.jpg"
    ];

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Intro image";
        img.loading = "lazy";
        img.style.width = "100%"; // Optional: Style images
        img.style.marginBottom = "10px";
        imageGallery.appendChild(img);
    });