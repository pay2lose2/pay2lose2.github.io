// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();

console.log(audioElement);
const source = audioCtx.createMediaElementSource(audioElement);
source.connect(analyser);
source.connect(audioCtx.destination);

analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function Update() {
    requestAnimationFrame(Update);
    analyser.getByteFrequencyData(dataArray);
    const Average = dataArray.reduce((sum, valume) => sum +valume, 0) / bufferLength;

    if (audioElement.paused) {
        audioTextElement.style.textShadow = ``;
        return;
    }

    const Intensity = Math.min(Average / 255 * 15, 15);
    const Tick = (Date.now() / 1000)
    const YOffset = Math.sin(Tick * 2) * (Intensity * 2.5)
    const XOffset = Math.cos(Tick * 2) * Intensity
    audioTextElement.style.textShadow = `
     1px 1px 0 var(--opposite),
    -1px 1px 0 var(--opposite),
    1px -1px 0 var(--opposite),
    -1px -1px 0 var(--opposite),
    ${YOffset}px ${XOffset}px 1px var(--accent-color),
    ${-YOffset}px ${-XOffset}px 1px var(--accent-color)`

    audioTextElement.style.transform = `scaleY(1.3) skewX(${-Intensity * 4}deg)`

    // world record for the worst ux ever? 
}

Update();

/* you can fucking index a variable in other script and then use it in another script???????????? crazy shit */
audioElement.addEventListener("play", function() {
    audioCtx.resume().then(() => {
        Update();
    });
})