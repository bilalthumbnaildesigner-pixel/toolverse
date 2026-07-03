// ToolVerse Live Search

const searchInput = document.querySelector(".search-box input");

const toolCards = document.querySelectorAll(".tool");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        toolCards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}