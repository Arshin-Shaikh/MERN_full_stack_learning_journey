const skipBtn = document.querySelector('.skip-btn');
const addBtn = document.querySelector('.add-btn');
const cardContainer = document.getElementById('cards');
const tableBody = document.querySelector('tbody');
const totalAmount = document.querySelector('tfoot th:last-child');
const bookingForm = document.getElementById('bookingForm');
let index = 0;
let cart = [];

const cards = [
    {
        Item: "Wash and fold",
        image: "image/image1.jpeg",
        Price: "129",
    },
    {
        Item: "Ironing",
        image: "image/image2.jpeg",
        Price: "99",
    },
    {
        Item: "Stream ironing",
        image: "image/image3.jpeg",
        Price: "149",
    },
    {
        Item: "Blanket cleaning",
        image: "image/image4.jpeg",
        Price: "199",
    },
    {
        Item: "Dry cleaning",
        image: "image/image5.jpeg",
        Price: "500",
    },
    {
        Item: "Sofa cleaning",
        image: "image/image6.jpeg",
        Price: "999",
    },
    {
        Item: "shoes cleaning",
        image: "image/image7.jpeg",
        Price: "799",
    }
]

function switchCard(cards, index) {
    // Implementation for creating cards
    const cardContainer = document.getElementById('cards');
    if (index < cards.length) {
        const card = cards[index];
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${card.image}" alt="items-img">
            <h2>${card.Item}</h2>
            <h2>Price: ₹${card.Price}</h2>
        `;
        cardContainer.innerHTML = "";
        cardContainer.appendChild(cardElement);

    }
}

switchCard(cards, index);

skipBtn.addEventListener('click', () => {
    if (index < cards.length - 1 ) {
        index++;
    } else {
        index = 0;
    }

    switchCard(cards, index);
});

addBtn.addEventListener('click', () => {
    if (index < cards.length - 1 ) {
        index++;
    } else {
        index = 0;
    }

    switchCard(cards, index);
});

addBtn.addEventListener('click', () => {

    const selectedItem = cards[index];

    cart.push(selectedItem);

    updateCart();

});

function updateCart() {

    tableBody.innerHTML = '';

    let total = 0;

    cart.forEach((item, i) => {

        total += parseInt(item.Price);

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

bookingForm.addEventListener('submit', (event) => {

    event.preventDefault();

    // Check form validation
    if (bookingForm.checkValidity()) {

        // Open checkout page
        window.location.href = "checkout.html";

    }

});