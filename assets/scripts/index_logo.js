const Logo = document.getElementById("logo")
const LogoElements = Logo.children

function Animate() {
    let Tick = (Date.now() / 1000);

    for (let index = 0; index < LogoElements.length; index++) {
        const element = LogoElements[index];

        if (!element) continue;

        // Formula: sin/cos(Tick * Speed + Offset) * Scale
        //      sin for horizontal movement
        //      cos for vertical movement (if you want to make a circle ig)
        let XOffset = Math.sin(Tick * 2.5 + (index * 1.75)) * 7.5;
        let YOffset = Math.cos(Tick * 5 + (index * 1.25)) * 2.5;

        element.style.transform = `translateY(${YOffset}px) translateX(${XOffset}px)`;
    }
}

setInterval(() => {
    Animate();
}, 10);