document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const name = card.querySelector('.card-content h3').textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords') ? card.getAttribute('data-keywords').toLowerCase() : '';
            // Debugging: log the query, name, and keywords for checking
            console.log('Query:', query, 'Name:', name, 'Keywords:', keywords);
            const isMatch = name.includes(query) || keywords.includes(query);
            // Debugging: log whether the card is being displayed or not
            console.log('Displaying card:', isMatch);
            card.style.display = isMatch ? '' : 'none';
        });
    });
});
//
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});