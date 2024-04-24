const cardRow=document.getElementById("cardRow")
const searched=document.getElementsByClassName("searched")
async function logCards() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const cards = await response.json();
    cards.forEach(card => {
        const cardHtml =`
            <div class="col-md-4 searched">
                <div class="card mt-5 mb-5" style="width: 18rem; height:350px; box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;">
                    <div class="card-body">
                        <h5 class="card-title mb-4">${card.title}</h5>
                        <p class="card-text">${card.body}</p>
                    </div>
                </div>
            </div>
        `;
        cardRow.innerHTML += cardHtml;
    });
  }
logCards()
function searchField() {
    const searchField = document.getElementById("mySearch").value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector(".card-title").textContent.toLowerCase();      
        if (title.includes(searchField)) {
            searched[i].style.display ="block";
        } else {
            searched[i].style.display ="none";
        }
    }
}
 document.getElementById("searchBtn").addEventListener("click", searchField);
