document.getElementById('fetch-cat').addEventListener('click', fetchCatImage);

function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImageUrl = data[0].url;
            const catImage = document.getElementById('cat-image');
            catImage.src = catImageUrl;
            catImage.style.display = 'block'; // Resmi göster
        })
        .catch(error => {
            console.error('Error fetching the cat image:', error);
        });
}
