document.addEventListener('DOMContentLoaded', init);

function init() {
    loadContent('movie'); // Load default content on page load
}

function loadContent(topic) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    // Load data from corresponding script file
    const script = document.createElement('script');
    script.src = `${topic}.js`;
    script.onload = function() {
        displayImages(window[topic]); // Call displayImages with the loaded data
    };
    document.head.appendChild(script);
}

function displayImages(images) {
    const contentDiv = document.getElementById('content');
    const grid = document.createElement('div');
    grid.classList.add('grid');

    images.forEach(image => {
        const item = document.createElement('div');
        item.classList.add('item');
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        const caption = document.createElement('p');
        caption.textContent = image.caption;
        const link = document.createElement('a');
        link.href = image.link;
        link.textContent = 'Xem chi tiết';
        link.target = '_blank';

        item.appendChild(img);
        item.appendChild(caption);
        item.appendChild(link);
        grid.appendChild(item);
    });

    contentDiv.appendChild(grid);
}
