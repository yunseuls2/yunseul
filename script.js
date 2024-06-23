document.addEventListener("DOMContentLoaded", function () {
  const navLinkItems = document.querySelectorAll('.nav-link');

  navLinkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const productCards = document.querySelectorAll('.card');

  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
  });
});

function scrollToAbout() {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
}

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

const stars = [];
const numStars = 200;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width,
  });
}

function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  for (let star of stars) {
    const x = (star.x - canvas.width / 2) * (canvas.width / star.z);
    const y = (star.y - canvas.height / 2) * (canvas.width / star.z);
    const radius = canvas.width / star.z / 2;

    ctx.beginPath();
    ctx.arc(x + canvas.width / 2, y + canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  moveStars();
  requestAnimationFrame(draw);
}

function moveStars() {
  for (let star of stars) {
    star.z -= 2;
    if (star.z <= 0) {
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * canvas.height;
      star.z = canvas.width;
    }
  }
}

draw();
