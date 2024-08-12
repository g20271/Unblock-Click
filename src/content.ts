// content.js

document.querySelectorAll('.article__wrap_img img').forEach(img => {
  img.classList.add('custom-img-style');
});

document.addEventListener('contextmenu', function (e) { e.stopPropagation(); }, true);
