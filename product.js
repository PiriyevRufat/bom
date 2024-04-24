const cardRow = document.getElementById("cardRow");

async function logCards() {
const response = await fetch("https://fakestoreapi.com/products");
const cards = await response.json();
renderCards(cards);
}

function renderCards(cards) {
            cardRow.innerHTML = "";
            cards.forEach(card => {
                const cardHtml = `
                    <div class="col-md-4">
                        <div class="card mt-5 mb-5" style="width: 18rem; box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;">
                            <div class="card-body">
                                <img src=${card.image} alt="" style="width: 200px;height: 150px;">
                                <h5 class="card-title mb-4">${card.title}</h5>
                                <p class="card-text">Price : ${card.price}</p>
                                <p class="card-text description" style="width: 250px;height: 50px; overflow: hidden; text-overflow: ellipsis;">${card.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                cardRow.innerHTML += cardHtml;
            });
        }
document.getElementById("sortFromLow").addEventListener("click", async () => {
const response = await fetch("https://fakestoreapi.com/products");
const cards = await response.json();
const sortedCards = cards.sort((a, b) => a.price - b.price);
renderCards(sortedCards);
 });

document.getElementById("sortFromHigh").addEventListener("click", async () => {
const response = await fetch("https://fakestoreapi.com/products");
const cards = await response.json();
const sortedCards = cards.sort((a, b) => b.price - a.price);
renderCards(sortedCards);
 });
logCards();