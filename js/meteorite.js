const w = window.innerWidth;
const h = window.innerHeight;
const meteoriteImage = new Image();

let ctxYTranslation = 0;
var canvaElem;

function animate(ctx) {
    if (ctxYTranslation > (h + 200)) {
        canvaElem.remove();
        canvaElem = null;

        // boom
        setTimeout(() => {
            document.body.classList.add('animate-boom');
        }, 500);

        return;
    }

    ctx.clearRect(0, -200, w + 100, h);
    ctx.translate(-6, 6);
    ctxYTranslation += 6;

    ctx.drawImage(meteoriteImage, w - 100, -200, 200, 200);
    window.requestAnimationFrame(() => animate(ctx));
}

document.addEventListener('keyup', (event) => {
    if (event.key === 'm') {
        if (canvaElem) return;

        // Init
        ctxYTranslation = 0;
        document.body.classList.remove('animate-boom');

        canvaElem = document.createElement('canvas');
        canvaElem.id = 'meteorite';
        canvaElem.width = w;
        canvaElem.height = h;
        canvaElem.style = "width: 100vw; height: 100vh; position: fixed;";
        document.body.prepend(canvaElem);

        if (canvaElem.getContext) {
            const ctx = canvaElem.getContext("2d");
            ctx.globalCompositeOperation = "destination-over";

            meteoriteImage.onload = () => {
                window.requestAnimationFrame(() => {
                    animate(ctx);
                });
            };

            meteoriteImage.src = 'https://static.vecteezy.com/system/resources/previews/023/271/181/original/meteorite-illustrations-free-png.png';
        }
    }
});