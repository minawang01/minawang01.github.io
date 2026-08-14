const menuView = document.getElementById('menu-view');

document.querySelectorAll('.menu-item[data-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.target + '-view').classList.add('active');
        menuView.classList.add('menu-hidden');
    });
});

document.querySelectorAll('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.closest('.panel').classList.remove('active');
        menuView.classList.remove('menu-hidden');
    });
});

// Add filenames + captions here as photos are dropped into public/images/background/
const backgroundPhotos = [
    { filename: 'bg-01.jpg', caption: 'national gallery of ireland, 2024' },
    { filename: 'bg-02.jpg', caption: 'brooklyn museum wallpaper, 2024' },
    { filename: 'bg-03.jpg', caption: 'national gallery of art, dc, 2024' },
    { filename: 'bg-04.jpg', caption: 'vase of flowers, jan davidsz de heem, national gallery of art, dc, 2024' },
    { filename: 'bg-05.jpg', caption: 'the voyage of life, thomas cole, national gallery of art, dc, 2024' },
    { filename: 'bg-06.jpg', caption: 'L.H.O.O.Q., marcel duchamp, moma, 2026' },
    { filename: 'bg-07.jpg', caption: 'marcel duchamp, moma, 2026' },
];

const bgContainer = document.getElementById('bg-photos');
const bgCaption = document.getElementById('bg-caption');
if (bgContainer && backgroundPhotos.length > 0) {
    const layers = backgroundPhotos.map((photo) => {
        const layer = document.createElement('div');
        layer.className = 'bg-photo';
        layer.style.backgroundImage = `url(/public/images/background/${photo.filename})`;
        bgContainer.appendChild(layer);
        return layer;
    });

    const captionLayers = bgCaption
        ? backgroundPhotos.map((photo) => {
              const item = document.createElement('div');
              item.className = 'bg-caption-item';
              item.textContent = photo.caption;
              bgCaption.appendChild(item);
              return item;
          })
        : [];

    let index = 0;
    layers[0].classList.add('active');
    if (captionLayers[0]) captionLayers[0].classList.add('active');

    if (layers.length > 1) {
        setInterval(() => {
            layers[index].classList.remove('active');
            if (captionLayers[index]) captionLayers[index].classList.remove('active');
            index = (index + 1) % layers.length;
            layers[index].classList.add('active');
            if (captionLayers[index]) captionLayers[index].classList.add('active');
        }, 6000);
    }
}
