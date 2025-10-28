// Fade-in on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add('visible');
  });
});

// Image popup
const popup = document.getElementById('image-popup');
const popupImg = popup.querySelector('img');
const closeBtn = popup.querySelector('.close');

document.querySelectorAll('.clickable').forEach(img => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = img.src;
  });
});
closeBtn.onclick = () => popup.style.display = 'none';
popup.onclick = e => { if (e.target === popup) popup.style.display = 'none'; };
