// Fullscreen otomatis saat disentuh (HP)
document.body.addEventListener('click', () => {
    const musik = document.getElementById("musik");
    musik.play();

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
});

// Fireworks sederhana
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

function Firework() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height / 2;
    this.radius = Math.random() * 3 + 2;
    this.life = 100;
}

function drawFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
        fireworks.push(new Firework());
    }

    fireworks.forEach((f, i) => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
        ctx.fill();
        f.life--;

        if (f.life <= 0) fireworks.splice(i, 1);
    });

    requestAnimationFrame(drawFireworks);
}

drawFireworks();

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
