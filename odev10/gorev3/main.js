for (let i = 0; i < 10; i++) {
    const box = document.createElement("canvas");
    box.id = `canvas${i}`;
    const element = document.getElementById("div1");
    element.appendChild(box);

    const c = document.getElementById(`canvas${i}`);
    const ctx = c.getContext("2d");

    document.getElementById(`canvas${i}`).style.padding = "0 0 80px 0";
    document.getElementById(`canvas${i}`).style.color = "blue";
    ctx.beginPath();
    ctx.rect(20, 20, 200, 130);
    ctx.stroke();
}
