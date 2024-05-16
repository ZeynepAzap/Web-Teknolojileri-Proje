document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');
    const bookList = document.getElementById('book-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const searchTerm = document.getElementById('search-input').value.trim();

        if (searchTerm === '') {
            alert('Lütfen bir kitap adı veya yazar adı girin.');
            return;
        }

        const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('API isteği başarısız oldu.');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                bookList.innerHTML = ''; // Kitap listesini temizle

                if (data.docs && data.docs.length > 0) {
                    const booksToShow = data.docs.slice(0, 10); // İlk 10 kitabı al

                    booksToShow.forEach(book => {
                        const title = book.title;
                        const author = book.author_name ? book.author_name.join(', ') : 'Bilinmiyor';

                        const li = document.createElement('li');
                        li.textContent = `${title} - ${author}`;
                        bookList.appendChild(li);
                    });
                } else {
                    const li = document.createElement('li');
                    li.textContent = 'Aradığınız kitap bulunamadı.';
                    bookList.appendChild(li);
                }
            })
            .catch(error => {
                console.error('API isteği başarısız oldu:', error);
                const li = document.createElement('li');
                li.textContent = 'Kitap araması sırasında bir hata oluştu.';
                bookList.appendChild(li);
            });
    });
});
