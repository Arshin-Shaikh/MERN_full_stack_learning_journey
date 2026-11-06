
const skipBtn = document.querySelector('.skip-btn');
const addBtn = document.querySelector('.add-btn');
const cardContainer = document.getElementById('cards');
const tableBody = document.querySelector('tbody');
const totalAmount = document.getElementById('totalAmount');
const bookingForm = document.getElementById('bookingForm');

let index = 0;
let cart = [];

const cards = [
    {
        Item: "Wash and fold",
        image: "image/image1.jpeg",
        Price: 129,
    },
    {
        Item: "Ironing",
        image: "image/image2.jpeg",
        Price: 99,
    },
    {
        Item: "Stream ironing",
        image: "image/image3.jpeg",
        Price: 149,
    },
    {
        Item: "Blanket cleaning",
        image: "image/image4.jpeg",
        Price: 199,
    },
    {
        Item: "Dry cleaning",
        image: "image/image5.jpeg",
        Price: 500,
    },
    {
        Item: "Sofa cleaning",
        image: "image/image6.jpeg",
        Price: 999,
    },
    {
        Item: "Shoes cleaning",
        image: "image/image7.jpeg",
        Price: 799,
    }
];

// Display current card
function switchCard(cards, index) {

    const card = cards[index];

    cardContainer.innerHTML = `
        <div class="card">
            <img src="${card.image}" alt="${card.Item}">
            <h2>${card.Item}</h2>
            <h2>Price: ₹${card.Price}</h2>
        </div>
    `;
}

// Display first card
switchCard(cards, index);

// Skip current item
skipBtn.addEventListener('click', () => {

    index++;

    if (index >= cards.length) {
        index = 0;
    }

    switchCard(cards, index);
});

// Add current item to cart
addBtn.addEventListener('click', () => {

    const selectedItem = cards[index];

    cart.push(selectedItem);

    updateCart();

    // Move to next card
    index++;

    if (index >= cards.length) {
        index = 0;
    }

    switchCard(cards, index);
});

// Update cart table and total
function updateCart() {

    tableBody.innerHTML = '';

    let total = 0;

    cart.forEach((item, i) => {

        total += item.Price;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${item.Item}</td>
            <td>₹${item.Price}</td>
        `;

        tableBody.appendChild(row);

    });

    totalAmount.textContent = `₹${total}`;
}

// Booking form submission
bookingForm.addEventListener('submit', (event) => {

    event.preventDefault();

    if (bookingForm.checkValidity()) {

        if (cart.length === 0) {
            alert("Please add at least one service to your cart!");
            return;
        }

        // Save cart for checkout page
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = "checkout.html";
    }

});
