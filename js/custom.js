document.addEventListener('click', function (e) {
  const span = document.createElement('span');
  span.innerText = '⚡';
  span.style.position = 'fixed';
  span.style.left = e.clientX + 'px';
  span.style.top = e.clientY + 'px';
  span.style.color = '#00f0ff';
  span.style.pointerEvents = 'none';
  span.style.transition = 'all 0.5s ease';
  document.body.appendChild(span);

  setTimeout(() => {
    span.style.top = (e.clientY - 50) + 'px';
    span.style.opacity = '0';
  }, 10);

  setTimeout(() => span.remove(), 500);
});
