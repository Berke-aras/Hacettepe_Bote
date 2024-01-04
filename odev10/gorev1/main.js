const modal = document.getElementById("modal");

function show() {
    modal.classList.add("open");
}

function closee() {
    modal.classList.remove("open");
}

const myTimeout = setTimeout(show, 500);
const myTimeout2 = setTimeout(closee, 4000);
