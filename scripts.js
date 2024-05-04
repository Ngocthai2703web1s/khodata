// Function to download a file
function downloadFile(link) {
    window.location.href = link;
}

// Function to open a link in a new tab
function watchOnline(link) {
    window.open(link, '_blank');
}

// List of image links
const imageList = [
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liv4ti5qbcuq31", link: "https://adpvn.co/N3SV" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgxi84ov6uwj68", link: "https://adpvn.co/Cxkt" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lshz9916843o20", link: "https://adpvn.top/XfbV" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltn80bhbyfild2", link: "https://adpvn.co/879E" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lukfz1iwj0o542", link: "https://adpvn.co/neCh" },
    { src: "https://down-vn.img.susercontent.com/file/b0eb0c5921628a9a33714e39777a65ea", link: "https://adpvn.co/Y8K2" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lni5tsvh3gcac7", link: "https://adpvn.co/wnTV" },
    { src: "https://down-vn.img.susercontent.com/file/7d790eb4be525065a593ffbf0be18535", link: "https://adpvn.co/JAAJ" },
    { src: "https://down-vn.img.susercontent.com/file/5e182bd3d13381f756040251b750e152", link: "https://adpvn.co/Ccwz" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lufthv68tf6t71", link: "https://adpvn.co/Wcdn" },
    { src: "https://down-vn.img.susercontent.com/file/da9cc5f0e34c5e762c1ccdf0c59b85bb", link: "https://adpvn.co/fGc3" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrduo4hpfna1ec", link: "https://adpvn.co/ouM5" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsrx1xcuqvmh4c", link: "https://adpvn.co/4QSK" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lshz9916843o20", link: "https://adpvn.co/aQ31" },
    { src: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsgqyxk0x6tg23", link: "https://adpvn.co/MHFb" }
];

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Select 5 random images from the list
const selectedImages = [];
while (selectedImages.length < 5) {
    const randomImage = getRandomElement(imageList);
    if (!selectedImages.some(img => img.src === randomImage.src)) {
        selectedImages.push(randomImage);
    }
}

// Display selected images in a grid
const imageGrid = document.querySelector(".image-grid");

selectedImages.forEach(image => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    
    // Create anchor element
    const link = document.createElement("a");
    link.href = image.link; // Set the href attribute to the image link
    link.target = "_blank"; // Open link in a new tab
    
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = "Random Image";
    
    // Append image to the anchor
    link.appendChild(img);
    
    // Append anchor to the image container
    imageContainer.appendChild(link);
    
    // Append image container to the image grid
    imageGrid.appendChild(imageContainer);
});

// Function to update images with new random ones every 5 seconds
function randomImages() {
    let shuffledImages = [...imageList].sort(() => Math.random() - 0.5).slice(0, 5);
    for (let i = 0; i < 5; i++) {
        // Update the src and href attributes of the img tag and the anchor
        imageGrid.children[i].firstChild.href = shuffledImages[i].link;
        imageGrid.children[i].firstChild.firstChild.src = shuffledImages[i].src;
    }
}

randomImages(); // Initial random images

setInterval(randomImages, 5000); // Change images every 5 seconds
