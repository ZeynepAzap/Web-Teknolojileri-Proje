document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'wG3D03LvOfcbgok1FIuXhID0zxy76wZ4kMyae9oR ';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('API\'ye erişilemiyor.');
            }
            return response.json();
        })
        .then(data => {
            displayImage(data.url, data.title, data.explanation);
        })
        .catch(error => {
            console.error('Hata:', error);
            alert('Uzay görseli alınırken bir hata oluştu.');
        });
});

function displayImage(imageUrl, title, explanation) {
    const imageContainer = document.getElementById('imageContainer');

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = title;
    imageElement.style.width = '100%';

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const explanationElement = document.createElement('p');
    explanationElement.textContent = explanation;

    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(titleElement);
    imageContainer.appendChild(explanationElement);
}
