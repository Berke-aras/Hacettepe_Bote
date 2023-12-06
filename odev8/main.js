// document.getElementById("imageid").src = "../template/save.png";
let data = window.performance.getEntriesByType("navigation")[0].type;
console.log(data);

if (data == "reload") {
    const imges = [
        "./img/1.png",
        "./img/2.jpg",
        "./img/3.png",
        "./img/4.jpg",
        "./img/5.png",
        "./img/6.webp",
        "./img/7.png",
        "./img/8.jpg",
        "./img/9.jpg",
        "./img/10.jpg",
    ];
    let random = Math.floor(Math.random() * 10);
    document.getElementById("firstimage").src = imges[random];

    const bg = [
        "#ffa07a",
        "#5a2476",
        "#a09ad1",
        "#8a33e1",
        "#9a9db9",
        "#4e5173",
        "#947d6e",
        "#ffa500",
        "#aca7c8",
        "#18140f",
    ];
    let random2 = Math.floor(Math.random() * 10);
    document.body.style.background = bg[random2];
}

function showImage1() {
    var img = document.getElementById("img1");
    img.style.visibility = "visible";
}
function showImage2() {
    var img = document.getElementById("img2");
    img.style.visibility = "visible";
}
function showImage3() {
    var img = document.getElementById("img3");
    img.style.visibility = "visible";
}

function hideImage1() {
    var img = document.getElementById("img1");
    img.style.visibility = "hidden";
}

function hideImage2() {
    var img = document.getElementById("img2");
    img.style.visibility = "hidden";
}

function hideImage3() {
    var img = document.getElementById("img3");
    img.style.visibility = "hidden";
}
