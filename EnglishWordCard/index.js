// Örnek kelime kartları (kategorili)
let allCards = [
    // Hayvanlar
    { english: "Cat", turkish: "Kedi", category: "animal" },
    { english: "Dog", turkish: "Köpek", category: "animal" },
    { english: "Bird", turkish: "Kuş", category: "animal" },
    { english: "Fish", turkish: "Balık", category: "animal" },
    
    // Yiyecekler
    { english: "Apple", turkish: "Elma", category: "food" },
    { english: "Bread", turkish: "Ekmek", category: "food" },
    { english: "Water", turkish: "Su", category: "food" },
    { english: "Cheese", turkish: "Peynir", category: "food" },
    
    // Renkler
    { english: "Red", turkish: "Kırmızı", category: "color" },
    { english: "Blue", turkish: "Mavi", category: "color" },
    { english: "Green", turkish: "Yeşil", category: "color" },
    { english: "Yellow", turkish: "Sarı", category: "color" },
    
    // Sayılar
    { english: "One", turkish: "Bir", category: "number" },
    { english: "Two", turkish: "İki", category: "number" },
    { english: "Three", turkish: "Üç", category: "number" },
    { english: "Ten", turkish: "On", category: "number" }
];

let cards = [...allCards];
let currentIndex = 0;
let currentCategory = 'all';
const cardElement = document.getElementById('card');

// Kartı çevir
cardElement.addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Kartları karıştır
function shuffleCards() {
    // Fisher-Yates shuffle algoritması
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;
    showCard(currentIndex);
}

// Kategori filtrele
function filterCategory(category) {
    currentCategory = category;
    currentIndex = 0;
    
    // Aktif butonu güncelle
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Kartları filtrele
    if (category === 'all') {
        cards = [...allCards];
    } else {
        cards = allCards.filter(card => card.category === category);
    }
    
    // Kartları otomatik karıştır
    shuffleCards();
}

// Kartı göster
function showCard(index) {
    // Önce kartı ön yüze çevir
    cardElement.classList.remove('flipped');
    
    // Kısa bir gecikme sonrası içeriği değiştir (animasyon tamamlansın)
    setTimeout(() => {
        const card = cards[index];
        document.getElementById('english-word').textContent = card.english;
        document.getElementById('turkish-word').textContent = card.turkish;
        document.getElementById('current').textContent = index + 1;
        document.getElementById('total').textContent = cards.length;
    }, 300);
}

// Sonraki kart
function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

// Önceki kart
function previousCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

// Klavye kısayolları
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        previousCard();
    } else if (e.key === 'ArrowRight') {
        nextCard();
    } else if (e.key === ' ') {
        e.preventDefault();
        cardElement.classList.toggle('flipped');
    }
});

// İlk yüklemede kartları karıştır ve göster
shuffleCards();