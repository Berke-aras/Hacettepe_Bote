const modal = document.getElementById("modal");

function show() {
    modal.classList.add("open");
}

function closee() {
    console.log("sdadsddas");
    modal.classList.remove("open");
    console.log("sdadsddas");
}

const myTimeout = setTimeout(show, 500);
const myTimeout2 = setTimeout(closee, 4000);
