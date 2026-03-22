document.addEventListener('click', function(e) {
    let el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    el.style.width = '15px';
    el.style.height = '15px';
    el.style.border = '2px solid rgba(0, 150, 255, 0.8)';
    el.style.borderRadius = '50%';
    el.style.pointerEvents = 'none';
    el.style.transform = 'translate(-50%, -50%) scale(1)';
    el.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
    el.style.zIndex = '9999';
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.transform = 'translate(-50%, -50%) scale(4)';
        el.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        el.remove();
    }, 410);
});