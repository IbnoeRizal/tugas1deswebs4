
const products = [
{
    id: 1,
    name: "iPhone 13 Pro 256GB - Graphite",
    price: 12500000,
    condition: "A",
    category: "elektronik",
    description: "iPhone 13 Pro 256GB warna Graphite dalam kondisi seperti baru. Kelengkapan fullset, baterai 95%, tidak ada goresan, garansi masih aktif 3 bulan.",
    date: "12 Apr 2025",
    image: "img/iphone.jpeg"
},
{
    id: 2,
    name: "MacBook Air M2 - 8GB/256GB",
    price: 14300000,
    condition: "B",
    category: "elektronik",
    description: "MacBook Air M2 dengan RAM 8GB dan SSD 256GB. Kondisi masih bagus dengan sedikit goresan halus. Performa sangat baik untuk pekerjaan sehari-hari.",
    date: "10 Apr 2025",
    image: "img/MacBoox.jpeg"
},
{
    id: 3,
    name: "Sony Alpha A7 III Kit 28-70mm",
    price: 18900000,
    condition: "A",
    category: "elektronik",
    description: "Kamera mirrorless Sony Alpha A7 III dengan lensa kit 28-70mm. Kondisi seperti baru, shutter count baru 5000, lengkap dengan box dan aksesoris.",
    date: "14 Apr 2025",
    image: "img/sony.jpeg"
},
{
    id: 4,
    name: "Honda PCX 160 2023 - Hitam",
    price: 28500000,
    condition: "B",
    category: "otomotif",
    description: "Honda PCX 160 tahun 2023 warna hitam. Kilometer masih rendah (5.000 KM), kondisi mesin terawat baik, body mulus dengan sedikit goresan kecil.",
    date: "9 Apr 2025",
    image: "img/Honda-pcx.jpeg"
},
{
    id: 5,
    name: "Hot Toys Iron Man Mark LXXXV",
    price: 7200000,
    condition: "A",
    category: "hobi",
    description: "Action figure Hot Toys Iron Man Mark LXXXV edisi Avengers Endgame. Kondisi seperti baru, lengkap dengan box dan aksesoris.",
    date: "11 Apr 2025",
    image: "img/IronMan.jpg"
},
{
    id: 6,
    name: "Vinyl Pink Floyd - The Dark Side of the Moon",
    price: 950000,
    condition: "B",
    category: "hobi",
    description: "Vinyl Pink Floyd - The Dark Side of the Moon original pressing. Kondisi sleeve sedikit wear, namun piringan masih bagus dengan sedikit noise.",
    date: "8 Apr 2025",
    image: "img/pinkfloyddarkside.jpg"
},
{
    id: 7,
    name: "iPad Air 2022 - 64GB WiFi",
    price: 5800000,
    condition: "A",
    category: "elektronik",
    description: "iPad Air 2022 dengan kapasitas 64GB versi WiFi. Kondisi seperti baru, masih ada sisa garansi resmi Apple 6 bulan. Layar masih mulus, baterai 99%.",
    date: "5 May 2025",
    image: "img/ipad_air_2022.jpg"
},
{
    id: 8,
    name: "Sofa 3 Seater Minimalis - Abu-abu",
    price: 3500000,
    condition: "B",
    category: "furniture",
    description: "Sofa 3 seater bergaya minimalis dengan warna abu-abu. Bahan kain premium, nyaman, dan masih dalam kondisi bagus. Umur pakai baru 1 tahun.",
    date: "3 May 2025",
    image: "img/Sofa 3 Seater Minimalis - Abu-abu.jpg"
},
{
    id: 9,
    name: "Tas Tote Coach Original - Black",
    price: 2300000,
    condition: "A",
    category: "fashion",
    description: "Tas Tote Coach Original warna hitam. Kondisi seperti baru, hanya dipakai beberapa kali. Dilengkapi dengan dustbag dan kartu autentikasi.",
    date: "1 May 2025",
    image: "img/Tas Tote Coach Original - Black.jpg"
},
{
    id: 10,
    name: "Toyota Fortuner 2.4 VRZ 2022 - Putih",
    price: 265000000,
    condition: "A",
    category: "otomotif",
    description: "Toyota Fortuner 2.4 VRZ tahun 2022 warna putih. Kilometer rendah (15.000 KM), kondisi seperti baru, service record lengkap di bengkel resmi.",
    date: "2 May 2025",
    image: "img/Toyota Fortuner 2.4 VRZ 2022 - Putih.jpg"
},
{
    id: 11,
    name: "Fender Stratocaster MIM 2019 - Sunburst",
    price: 4750000,
    condition: "B",
    category: "hobi",
    description: "Gitar listrik Fender Stratocaster Made in Mexico tahun 2019 warna Sunburst. Kondisi bagus, sedikit wear pada fret, suara masih jernih.",
    date: "30 Apr 2025",
    image: "img/Fender Stratocaster MIM 2019 - Sunburst.jpg"
},
// Additional products for pagination
{
    id: 12,
    name: "Samsung Galaxy S24 Ultra - Titanium Black",
    price: 15800000,
    condition: "A",
    category: "elektronik",
    description: "Samsung Galaxy S24 Ultra dengan memory 256GB. Kondisi seperti baru, baterai 98%, fitur AI terbaru, kamera 200MP sangat jernih.",
    date: "29 Apr 2025",
    image: "img/Samsung Galaxy S24 Ultra - Titanium Black.jpg"
},
{
    id: 13,
    name: "Sepeda Polygon Strattos S3 - Red",
    price: 7500000,
    condition: "B",
    category: "hobi",
    description: "Sepeda balap Polygon Strattos S3 warna merah. Frame carbon, groupset Shimano 105, kondisi terawat dengan beberapa goresan ringan.",
    date: "28 Apr 2025",
    image: "img/Sepeda Polygon Strattos S3 - Red.jpg"
},
{
    id: 14,
    name: "Canon EOS R6 Kit 24-105mm",
    price: 24700000,
    condition: "A",
    category: "elektronik",
    description: "Kamera mirrorless Canon EOS R6 dengan lensa kit 24-105mm. Kondisi seperti baru, shutter count rendah, IBIS sangat stabil untuk video.",
    date: "27 Apr 2025",
    image: "img/Canon EOS R6 Kit 24-105mm.jpg"
},
{
    id: 15,
    name: "Meja Kerja Industrial - Oak",
    price: 2100000,
    condition: "B",
    category: "furniture",
    description: "Meja kerja bergaya industrial dengan top kayu oak solid dan kaki besi. Luas permukaan 140x70cm, dilengkapi dengan rak penyimpanan.",
    date: "26 Apr 2025",
    image: "img/Meja Kerja Industrial - Oak.jpg"
},
{
    id: 16,
    name: "Jam Tangan Seiko Prospex SRPE93",
    price: 4350000,
    condition: "A",
    category: "fashion",
    description: "Seiko Prospex 'Turtle' SRPE93 dengan diameter 45mm. Kondisi seperti baru, water resistant 200m, bezel diver yang responsif.",
    date: "25 Apr 2025",
    image: "img/Jam Tangan Seiko Prospex SRPE93.jpg"
},
{
    id: 17,
    name: "Honda Brio RS 2022 - Orange",
    price: 155000000,
    condition: "A",
    category: "otomotif",
    description: "Honda Brio RS tahun 2022 warna orange. Kilometer rendah (8.000 KM), fitur lengkap, sangat ekonomis dan lincah untuk mobilitas perkotaan.",
    date: "24 Apr 2025",
    image: "img/Honda Brio RS 2022 - Orange.jpg"
},
{
    id: 18,
    name: "Yamaha Keyboard PSR-SX900",
    price: 18900000,
    condition: "B",
    category: "hobi",
    description: "Keyboard Yamaha PSR-SX900 dengan 61 keys. Fitur lengkap, suara berkualitas tinggi, dan interface yang intuitif untuk produksi musik.",
    date: "23 Apr 2025",
    image: "img/Yamaha Keyboard PSR-SX900.jpg"
},
{
    id: 19,
    name: "Asus ROG Zephyrus G14 2023",
    price: 18500000,
    condition: "A",
    category: "elektronik",
    description: "Laptop gaming Asus ROG Zephyrus G14 dengan Ryzen 9 dan RTX 4070. Kondisi seperti baru, performa tinggi dengan portabilitas yang baik.",
    date: "22 Apr 2025",
    image: "img/Asus ROG Zephyrus G14 2023.jpg"
},
{
    id: 20,
    name: "Sepatu Running Nike Pegasus 39",
    price: 1650000,
    condition: "B",
    category: "fashion",
    description: "Sepatu running Nike Pegasus 39 ukuran 42. Kondisi masih bagus, nyaman untuk berlari jarak jauh dengan bantalan yang responsif.",
    date: "21 Apr 2025",
    image: "img/Sepatu Running Nike Pegasus 39.jpg"
},
{
    id: 21,
    name: "Lemari Pakaian Sliding Door",
    price: 3900000,
    condition: "C",
    category: "furniture",
    description: "Lemari pakaian 3 pintu sliding dengan cermin. Dimensi 180x60x200cm, material particle board berkualitas, kondisi masih bagus dengan beberapa goresan.",
    date: "20 Apr 2025",
    image: "img/Lemari Pakaian Sliding Door.jpg"
},
{
    id: 22,
    name: "Samsung Galaxy Tab S9 - 256GB",
    price: 9200000,
    condition: "A",
    category: "elektronik",
    description: "Tablet Samsung Galaxy Tab S9 dengan S-Pen, memori 256GB. Kondisi seperti baru, layar AMOLED yang jernih, dan performa yang tangguh.",
    date: "19 Apr 2025",
    image: "img/Samsung Galaxy Tab S9 - 256GB.jpg"
},
{
    id: 23,
    name: "Vespa Primavera 150 - 2022",
    price: 45000000,
    condition: "A",
    category: "otomotif",
    description: "Vespa Primavera 150 tahun 2022. Kilometer rendah, kondisi seperti baru, warna putih klasik yang elegan dan timeless.",
    date: "18 Apr 2025",
    image: "img/Vespa Primavera 150 - 2022.jpg"
},
// Additional products for page 4
{
    id: 24,
    name: "Kamera GoPro Hero 11 Black",
    price: 5300000,
    condition: "B",
    category: "elektronik",
    description: "Action camera GoPro Hero 11 Black dengan stabilisasi HyperSmooth 5.0. Kondisi bagus dengan beberapa goresan kecil pada layar.",
    date: "17 Apr 2025",
    image: "img/Kamera GoPro Hero 11 Black.jpg"
},
{
    id: 25,
    name: "Jaket Kulit Schott Perfecto",
    price: 3700000,
    condition: "B",
    category: "fashion",
    description: "Jaket kulit asli Schott Perfecto model 618. Kulit sapi tebal berkualitas, warna hitam klasik yang sudah developing patina yang indah.",
    date: "16 Apr 2025",
    image: "img/Jaket Kulit Schott Perfecto.jpg"
},
{
    id: 26,
    name: "Monitor Dell Ultrasharp 27\" 4K",
    price: 5800000,
    condition: "A",
    category: "elektronik",
    description: "Monitor Dell Ultrasharp 27 inch resolusi 4K dengan color accuracy 99% Adobe RGB. Kondisi seperti baru, ideal untuk designer dan content creator.",
    date: "15 Apr 2025",
    image: "img/Monitor Dell Ultrasharp 27 4K.jpg"
},
{
    id: 27,
    name: "Kursi Gaming Secretlab Titan Evo",
    price: 6500000,
    condition: "A",
    category: "furniture",
    description: "Kursi gaming Secretlab Titan Evo 2022 dengan material SoftWeave Plus. Ergonomis dengan lumbar support yang dapat disesuaikan.",
    date: "14 Apr 2025",
    image: "img/Kursi Gaming Secretlab Titan Evo.jpg"
},
{
    id: 28,
    name: "Datsun Go+ Panca 2020",
    price: 95000000,
    condition: "B",
    category: "otomotif",
    description: "Datsun Go+ Panca tahun 2020 tipe tertinggi. 7 seater yang ekonomis, perawatan rutin, AC dingin dan mesin responsif.",
    date: "13 Apr 2025",
    image: "img/Datsun Go+ Panca 2020.jpg"
},
{
    id: 29,
    name: "Nintendo Switch OLED - White",
    price: 4200000,
    condition: "A",
    category: "elektronik",
    description: "Nintendo Switch versi OLED warna putih. Kondisi seperti baru, screen protector terpasang, dockable dengan layar TV.",
    date: "12 Apr 2025",
    image: "img/Nintendo Switch OLED - White.jpg"
},
{
    id: 30,
    name: "Karpet Persia Handmade 2x3m",
    price: 8500000,
    condition: "B",
    category: "furniture",
    description: "Karpet Persia handmade ukuran 2x3m dengan motif klasik. Material wool premium dengan ketebalan yang nyaman untuk kaki.",
    date: "11 Apr 2025",
    image: "img/Karpet Persia Handmade 2x3m.jpg"
},
// Additional products for page 5
{
    id: 31,
    name: "iPhone 14 Pro Max 512GB - Gold",
    price: 13900000,
    condition: "A",
    category: "elektronik",
    description: "iPhone 14 Pro Max 512GB warna Gold. Kondisi seperti baru, Dynamic Island yang interaktif, kamera 48MP yang mengesankan.",
    date: "10 Apr 2025",
    image: "img/iPhone 14 Pro Max 512GB - Gold.jpg"
},
{
    id: 32,
    name: "Yamaha R15 V4 2023 - Racing Blue",
    price: 35000000,
    condition: "A",
    category: "otomotif",
    description: "Motor sport Yamaha R15 V4 tahun 2023 warna Racing Blue. Kondisi seperti baru dengan Quick Shifter dan fitur Traction Control.",
    date: "9 Apr 2025",
    image: "img/Yamaha R15 V4 2023 - Racing Blue.jpg"
},
{
    id: 33,
    name: "DJI Mini 3 Pro Combo",
    price: 8900000,
    condition: "B",
    category: "elektronik",
    description: "Drone DJI Mini 3 Pro dengan Fly More Combo. Kondisi bagus, baterai masih sehat, dapat merekam video 4K dengan sensor 1/1.3\".",
    date: "8 Apr 2025",
    image: "img/DJI Mini 3 Pro Combo.jpg"
},
{
    id: 34,
    name: "Jam Tangan Rolex Datejust Replika",
    price: 2700000,
    condition: "A",
    category: "fashion",
    description: "Jam tangan Rolex Datejust replika kualitas premium. Mesin automatic, water resistant, dan finish yang rapi menyerupai aslinya.",
    date: "7 Apr 2025",
    image: "img/Jam Tangan Rolex Datejust Replika.jpg"
},
{
    id: 35,
    name: "Kulkas 2 Pintu Samsung Digital Inverter",
    price: 7800000,
    condition: "B",
    category: "elektronik",
    description: "Kulkas 2 pintu Samsung dengan teknologi Digital Inverter yang hemat energi. Kapasitas 300L, kondisi terawat dan bersih.",
    date: "6 Apr 2025",
    image: "img/Kulkas 2 Pintu Samsung Digital Inverter.jpg"
},
{
    id: 36,
    name: "Raket Badminton Yonex Astrox 99 Pro",
    price: 1850000,
    condition: "A",
    category: "hobi",
    description: "Raket badminton Yonex Astrox 99 Pro original. Head-heavy balance untuk pukulan smash yang mematikan, kondisi seperti baru.",
    date: "5 Apr 2025",
    image: "img/Raket Badminton Yonex Astrox 99 Pro.jpg"
}
];

// Variables for pagination
const itemsPerPage = 9;
let currentPage = 1;
let filteredProducts = [...products];

// DOM elements
const productGrid = document.getElementById('product-grid');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const sortSelect = document.getElementById('sort-select');
const applyFilterBtn = document.getElementById('apply-filter');

function formatPrice(price) {
return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function renderProducts() {
productGrid.innerHTML = '';

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

if (paginatedProducts.length === 0) {
    productGrid.innerHTML = '<div class="col-12 text-center py-5"><h5>Tidak ada produk yang sesuai dengan filter Anda.</h5></div>';
    return;
}

paginatedProducts.forEach(product => {
    const productCol = document.createElement('div');
    productCol.className = 'col-md-6 col-lg-4 mb-4';
    
    const conditionText = {
    'A': 'Seperti Baru',
    'B': 'Bagus',
    'C': 'Cukup'
    };
    
    productCol.innerHTML = `
    <div class="card product-card h-100">
        <div class="product-image">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        </div>
        <div class="card-body d-flex flex-column">
        <span class="badge condition-badge mb-2 align-self-start">Kondisi ${product.condition} (${conditionText[product.condition]})</span>
        <h6 class="card-title" style="height: 3em; overflow: hidden;">${product.name}</h6>
        <div class="price-text fs-5 mb-2">${formatPrice(product.price)}</div>
        <small class="text-muted mb-3">${product.date}</small>
        <div class="mt-auto">
            <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-gradient btn-sm detail-btn" data-id="${product.id}">Lihat Detail</button>
            <button class="btn btn-outline-success btn-sm buy-btn" data-id="${product.id}">Beli</button>
            </div>
        </div>
        </div>
    </div>
    `;
    productGrid.appendChild(productCol);
});

// Add event listeners for buttons after rendering
document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', function() {
    showProductDetail(parseInt(this.getAttribute('data-id')));
    });
});

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
    showBuyModal(parseInt(this.getAttribute('data-id')));
    });
});
}

// Generate pagination
function renderPagination() {
pagination.innerHTML = '';

const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

if (totalPages <= 1) return;

// Previous button
const prevLi = document.createElement('li');
prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
prevLi.innerHTML = `<a class="page-link" href="#" tabindex="-1">&laquo;</a>`;
if (currentPage > 1) {
    prevLi.querySelector('.page-link').addEventListener('click', (e) => {
    e.preventDefault();
    currentPage--;
    renderProducts();
    renderPagination();
    window.scrollTo(0, 0);
    });
}
pagination.appendChild(prevLi);

// Page numbers
for (let i = 1; i <= totalPages; i++) {
    const pageLi = document.createElement('li');
    pageLi.className = `page-item ${i === currentPage ? 'active' : ''}`;
    pageLi.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    pageLi.querySelector('.page-link').addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = i;
    renderProducts();
    renderPagination();
    window.scrollTo(0, 0);
    });
    pagination.appendChild(pageLi);
}

// Next button
const nextLi = document.createElement('li');
nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
nextLi.innerHTML = `<a class="page-link" href="#">&raquo;</a>`;
if (currentPage < totalPages) {
    nextLi.querySelector('.page-link').addEventListener('click', (e) => {
    e.preventDefault();
    currentPage++;
    renderProducts();
    renderPagination();
    window.scrollTo(0, 0);
    });
}
pagination.appendChild(nextLi);
}

// Show product detail modal
function showProductDetail(productId) {
const product = products.find(p => p.id === productId);
if (!product) return;

document.getElementById('modal-product-image').src = product.image;
document.getElementById('modal-product-name').textContent = product.name;
document.getElementById('modal-product-price').textContent = formatPrice(product.price);
document.getElementById('modal-product-description').textContent = product.description;

// Hide success message if visible
document.getElementById('success-message').classList.add('d-none');

// Show modal using Bootstrap's modal API
const detailModal = new bootstrap.Modal(document.getElementById('detail-modal'));
detailModal.show();
}

// Show buy modal
function showBuyModal(productId) {
const product = products.find(p => p.id === productId);
if (!product) return;

document.getElementById('buy-product-name').textContent = product.name;
document.getElementById('buy-product-price').textContent = formatPrice(product.price);

// Hide success message if visible
document.getElementById('buy-success-message').classList.add('d-none');

// Show modal using Bootstrap's modal API
const buyModal = new bootstrap.Modal(document.getElementById('buy-modal'));
buyModal.show();
}

// Apply filters
function applyFilters() {
// Category filters
const elektronikChecked = document.getElementById('elektronik').checked;
const otomotifChecked = document.getElementById('otomotif').checked;
const hobiChecked = document.getElementById('hobi').checked;
const fashionChecked = document.getElementById('fashion').checked;
const furnitureChecked = document.getElementById('furniture').checked;

// Condition filters
const kondisiAChecked = document.getElementById('kondisiA').checked;
const kondisiBChecked = document.getElementById('kondisiB').checked;
const kondisiCChecked = document.getElementById('kondisiC').checked;

// Price range
const minPrice = document.getElementById('price-min').value ? parseInt(document.getElementById('price-min').value) : 0;
const maxPrice = document.getElementById('price-max').value ? parseInt(document.getElementById('price-max').value) : Number.MAX_SAFE_INTEGER;

// Filter products
filteredProducts = products.filter(product => {
    // Category filters
    const categoryMatch = (
    (product.category === 'elektronik' && elektronikChecked) ||
    (product.category === 'otomotif' && otomotifChecked) ||
    (product.category === 'hobi' && hobiChecked) ||
    (product.category === 'fashion' && fashionChecked) ||
    (product.category === 'furniture' && furnitureChecked)
    );
    
    // Condition filters
    const conditionMatch = (
    (product.condition === 'A' && kondisiAChecked) ||
    (product.condition === 'B' && kondisiBChecked) ||
    (product.condition === 'C' && kondisiCChecked)
    );
    
    // Price range
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    
    return categoryMatch && conditionMatch && priceMatch;
});

// Search filter
const searchTerm = searchInput.value.toLowerCase().trim();
if (searchTerm) {
    filteredProducts = filteredProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm)
    );
}

// Apply sorting
applySorting();

// Reset to first page
currentPage = 1;

// Render products and pagination
renderProducts();
renderPagination();
}

// Apply sorting
function applySorting() {
const sortValue = sortSelect.value;

switch (sortValue) {
    case 'latest':
    // Sort by date (newest first)
    filteredProducts.sort((a, b) => {
        const dateA = new Date(a.date.split(' ').reverse().join(' '));
        const dateB = new Date(b.date.split(' ').reverse().join(' '));
        return dateB - dateA;
    });
    break;
    case 'price-low':
    // Sort by price (lowest first)
    filteredProducts.sort((a, b) => a.price - b.price);
    break;
    case 'price-high':
    // Sort by price (highest first)
    filteredProducts.sort((a, b) => b.price - a.price);
    break;
    case 'rating':
    // Sort by condition (A first, then B, then C)
    filteredProducts.sort((a, b) => {
        const order = { 'A': 1, 'B': 2, 'C': 3 };
        return order[a.condition] - order[b.condition];
    });
    break;
}
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
// Initial render
renderProducts();
renderPagination();

// Modal button references
const modalBuyBtn = document.getElementById('modal-buy-btn');
const successMessage = document.getElementById('success-message');
const confirmBuyBtn = document.getElementById('confirm-buy-btn');
const buySuccessMessage = document.getElementById('buy-success-message');

// Buy button in detail modal
modalBuyBtn.addEventListener('click', () => {
    // Show success message
    successMessage.classList.remove('d-none');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
    successMessage.classList.add('d-none');
    }, 3000);
});

// Confirm buy button
confirmBuyBtn.addEventListener('click', () => {
    // Show success message
    buySuccessMessage.classList.remove('d-none');
    
    // Hide success message and close modal after 3 seconds
    setTimeout(() => {
    buySuccessMessage.classList.add('d-none');
    // Hide modal using Bootstrap's modal API
    const buyModalEl = document.getElementById('buy-modal');
    const buyModal = bootstrap.Modal.getInstance(buyModalEl);
    if (buyModal) buyModal.hide();
    }, 3000);
});

// Apply filter button
applyFilterBtn.addEventListener('click', applyFilters);

// Search button
searchButton.addEventListener('click', applyFilters);

// Search on Enter key
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
    applyFilters();
    }
});

// Sort select
sortSelect.addEventListener('change', () => {
    applySorting();
    renderProducts();
});
});

// Sort select
sortSelect.addEventListener('change', () => {
    applySorting();
    renderProducts();
});
;