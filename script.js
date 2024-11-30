document.addEventListener('DOMContentLoaded', () => {
    // Image Carousel
    const carousel = document.querySelector('.image-carousel');
    const images = [
        '/api/placeholder/800/400',
        '/api/placeholder/800/400',
        '/api/placeholder/800/400'
    ];
    let currentImageIndex = 0;

    function rotateImages() {
        const carouselImage = carousel.querySelector('img');
        carouselImage.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(rotateImages, 5000);  // Change image every 5 seconds

    // Poll Interaction
    const genrePoll = document.getElementById('genre-poll');
    genrePoll.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedGenre = document.querySelector('input[name="genre"]:checked').value;
        alert(`You voted for ${selectedGenre} genre!`);
        // TODO: Implement actual vote tracking
    });

    // RSS Feed Simulation (Replace with actual RSS API integration)
    function fetchRSSFeed() {
        const rssFeed = document.getElementById('rss-feed');
        const mockNews = [
            { title: 'New Anime Season Announced', link: '#' },
            { title: 'Top 10 Anime of the Year', link: '#' },
            { title: 'Upcoming Manga Adaptations', link: '#' }
        ];

        rssFeed.innerHTML = mockNews.map(news => 
            `<div class="news-item">
                <a href="${news.link}">${news.title}</a>
            </div>`
        ).join('');
    }

    fetchRSSFeed();

    // YouTube and Twitter placeholders
    // TODO: Replace with actual API integrations
});
