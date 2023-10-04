<script>
    // Fungsi untuk mengambil dan menampilkan feed RSS
    function fetchRSS() {
        const rssFeedUrl = 'https://indonesiya.com/feed/';
        const rssFeedContainer = document.getElementById('rss-feed');

        fetch(rssFeedUrl)
            .then(response => response.text())
            .then(data => {
                // Menguraikan feed RSS menjadi objek XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');

                // Mendapatkan semua elemen item dalam feed RSS
                const items = xmlDoc.querySelectorAll('item');

                // Menampilkan setiap item sebagai tautan dalam daftar
                items.forEach(item => {
                    const title = item.querySelector('title').textContent;
                    const link = item.querySelector('link').textContent;
                    const listItem = document.createElement('li');
                    const linkElement = document.createElement('a');
                    linkElement.href = link;
                    linkElement.textContent = title;
                    listItem.appendChild(linkElement);
                    rssFeedContainer.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // Panggil fungsi fetchRSS saat halaman dimuat
    window.addEventListener('load', fetchRSS);
</script>
