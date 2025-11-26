 // Örnek kelime kartları (kategorili)
let allCards = [
    // Meslek & Kişiler (Professions & People)
    { english: "Author", turkish: "Yazar", category: "profession" },
    { english: "Mine", turkish: "Madenci", category: "profession" },
    
    // Fiiller (Verbs)
    { english: "Grew Up", turkish: "Bi Civarda Büyümek", category: "verb" },
    { english: "Publish", turkish: "Yayınlamak", category: "verb" },
    { english: "Show", turkish: "Göstermek", category: "verb" },
    { english: "Struggle", turkish: "Çabalamak, Mücadele Etmek", category: "verb" },
    { english: "Bring", turkish: "Getirmek", category: "verb" },
    { english: "Cared", turkish: "Umursamak", category: "verb" },
    { english: "Lick", turkish: "Yalamak", category: "verb" },
    
    // Sıfatlar (Adjectives)
    { english: "Poor", turkish: "Fakir", category: "adjective" },
    { english: "Tough", turkish: "Zorlu Çetin", category: "adjective" },
    { english: "Ancient", turkish: "Antik", category: "adjective" },
    
    // İsimler & Kavramlar (Nouns & Concepts)
    { english: "Passion", turkish: "Hırs, Tutku", category: "concept" },
    { english: "Journey", turkish: "Yolculuk", category: "concept" },
    { english: "Experience", turkish: "Deneyim", category: "concept" },
    { english: "Nature", turkish: "Doğa", category: "concept" },
    { english: "Issues", turkish: "Sorun, Problem", category: "concept" },
    { english: "Chapter", turkish: "Bölüm, Kısım", category: "concept" },
    { english: "Concerns", turkish: "Kaygılar", category: "concept" },
    { english: "Justice", turkish: "Adalet", category: "concept" },
    { english: "Belief", turkish: "İnanç", category: "concept" },
    { english: "Hope", turkish: "Umut", category: "concept" },
    { english: "Society", turkish: "Toplum, Dernek, Cemiyet", category: "concept" },
    { english: "Impact", turkish: "Darbe", category: "concept" },
    { english: "Wilderness", turkish: "Issız Yer", category: "concept" },
    
    // Zaman Zarfları (Time Adverbs)
    { english: "During", turkish: "Zarfinda, Sırasında, Süresince", category: "adverb" },
    { english: "Eventually", turkish: "Eninde Sonunda", category: "adverb" },
    { english: "Mainly", turkish: "Daha Çok, Başlıca", category: "adverb" },
    
    // Duygular (Emotions)
    { english: "Happy", turkish: "Mutlu, Sevinçli", category: "emotion" },
    { english: "Sad", turkish: "Hüzünlü", category: "emotion" },
    { english: "Excited", turkish: "Heyecanlı", category: "emotion" },
    { english: "Bored", turkish: "Sıkılmış", category: "emotion" },
    { english: "Proud", turkish: "Gururlu", category: "emotion" },
    { english: "Anxious", turkish: "Endişeli", category: "emotion" },
    { english: "Calm", turkish: "Sakin", category: "emotion" },
    { english: "Nervous", turkish: "Gergin", category: "emotion" },
    { english: "Confused", turkish: "Kafası Karışık", category: "emotion" },
    { english: "Miserable", turkish: "Sefil", category: "emotion" },
    { english: "Grateful", turkish: "Minnettar", category: "emotion" },
    { english: "Ungrateful", turkish: "Nankör", category: "emotion" },
    
    // Fiziksel Özellikler (Physical)
    { english: "Big", turkish: "Büyük", category: "physical" },
    { english: "Small", turkish: "Küçük", category: "physical" },
    { english: "Tall", turkish: "Uzun", category: "physical" },
    { english: "Short", turkish: "Kısa", category: "physical" },
    { english: "Fast", turkish: "Hızlı", category: "physical" },
    { english: "Slow", turkish: "Yavaş", category: "physical" },
    { english: "Strong", turkish: "Güçlü", category: "physical" },
    { english: "Weak", turkish: "Zayıf", category: "physical" },
    { english: "Bright", turkish: "Parlak, Aydınlık", category: "physical" },
    { english: "Dark", turkish: "Karanlık", category: "physical" },
    { english: "Warm", turkish: "Ilık/Sıcak", category: "physical" },
    { english: "Cold", turkish: "Soğuk", category: "physical" },
    { english: "Clean", turkish: "Temiz", category: "physical" },
    { english: "Dirty", turkish: "Kirli", category: "physical" },
    { english: "Loud", turkish: "Gürültülü", category: "physical" },
    { english: "Quiet", turkish: "Sessiz", category: "physical" },
    
    // Görünüş (Appearance)
    { english: "Beautiful", turkish: "Güzel", category: "appearance" },
    { english: "Ugly", turkish: "Çirkin", category: "appearance" },
    { english: "Neat", turkish: "Düzenli", category: "appearance" },
    { english: "Messy", turkish: "Dağınık", category: "appearance" },
    
    // Karakter (Character)
    { english: "Smart", turkish: "Zeki", category: "character" },
    { english: "Dumb", turkish: "Aptal", category: "character" },
    { english: "Brave", turkish: "Yiğit", category: "character" },
    { english: "Cowardly", turkish: "Ödlek", category: "character" },
    { english: "Kind", turkish: "Kibar / Nazik", category: "character" },
    { english: "Mean", turkish: "Kaba / Kötü Kalpli", category: "character" },
    { english: "Generous", turkish: "Cömert", category: "character" },
    { english: "Stingy", turkish: "Cimri", category: "character" },
    { english: "Honest", turkish: "Dürüst", category: "character" },
    { english: "Dishonest", turkish: "Yalancı", category: "character" },
    { english: "Friendly", turkish: "Arkadaş Canlısı", category: "character" },
    { english: "Hostile", turkish: "Düşmanca", category: "character" },
    { english: "Gentle", turkish: "Kibar", category: "character" },
    { english: "Rough", turkish: "Kaba", category: "character" },
    { english: "Polite", turkish: "Nazik", category: "character" },
    { english: "Rude", turkish: "Kaba", category: "character" },
    { english: "Humble", turkish: "Mütevazı", category: "character" },
    { english: "Innocent", turkish: "Masum", category: "character" },
    { english: "Guilty", turkish: "Suçlu", category: "character" },
    { english: "Sincere", turkish: "İçten Samimi", category: "character" },
    { english: "Insincere", turkish: "Samimiyetsiz", category: "character" },
    { english: "Reliable", turkish: "Güvenilir, İtimat Edilir", category: "character" },
    { english: "Unreliable", turkish: "Güvenilmez", category: "character" },
    
    // Kişilik (Personality)
    { english: "Shy", turkish: "Utangaç", category: "personality" },
    { english: "Outgoing", turkish: "Dışa Dönük", category: "personality" },
    { english: "Confident", turkish: "Kendine Güvenen", category: "personality" },
    { english: "Curious", turkish: "Meraklı", category: "personality" },
    { english: "Indifferent", turkish: "Umursamaz", category: "personality" },
    { english: "Fierce", turkish: "Kızgın, Vahşi", category: "personality" },
    { english: "Peaceful", turkish: "Huzurlu", category: "personality" },
    { english: "Patient", turkish: "Sabırlı", category: "personality" },
    { english: "Impatient", turkish: "Sabırsız", category: "personality" },
    { english: "Ambitious", turkish: "Hırslı", category: "personality" },
    { english: "Lazy", turkish: "Tembel", category: "personality" },
    { english: "Helpful", turkish: "Yardımsever", category: "personality" },
    { english: "Useless", turkish: "İşe Yaramaz", category: "personality" },
    { english: "Enthusiastic", turkish: "Çoşkulu", category: "personality" },
    { english: "Pessimistic", turkish: "Karamsar", category: "personality" },
    { english: "Optimistic", turkish: "İyimser", category: "personality" },
    { english: "Skeptical", turkish: "Şüpheci", category: "personality" },
    { english: "Creative", turkish: "Kreatif", category: "personality" },
    { english: "Dull", turkish: "Donuk, Sıkıcı", category: "personality" },
    { english: "Cautious", turkish: "Tedbirli", category: "personality" },
    { english: "Careless", turkish: "Dikkatsiz", category: "personality" },
    { english: "Serious", turkish: "Ciddi", category: "personality" },
    { english: "Silly", turkish: "Saçma Sapan, Aptal", category: "personality" },
    { english: "Flexible", turkish: "Esnek", category: "personality" },
    { english: "Stiff", turkish: "Katı", category: "personality" },
    { english: "Independent", turkish: "Bağımsız", category: "personality" },
    { english: "Dependent", turkish: "Bağımlı", category: "personality" },
    { english: "Resourceful", turkish: "Çözüm Üreten / İş Bitirici", category: "personality" },
    { english: "Clumsy", turkish: "Sakar", category: "personality" },
    
    // Fiziksel Durumlar (Physical States)
    { english: "Hungry", turkish: "Aç", category: "state" },
    { english: "Full", turkish: "Tok", category: "state" },
    { english: "Tired", turkish: "Yorgun", category: "state" },
    { english: "Energetic", turkish: "Enerjik", category: "state" },
    { english: "Clear", turkish: "Net, Açık", category: "state" }
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