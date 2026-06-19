const logo = document.getElementById('main-logo');
const audio = document.getElementById('bgm');
const text = document.getElementById('top-text');
const links = document.getElementById('links');

logo.addEventListener('click', () => {

    if (audio.paused)
    {
        audio.currentTime = 0;
        audio.play();
        text.textContent = "music playing";
        logo.classList.add('logo-pulsing');

        links.classList.remove('fade-in-links');
        links.classList.add('fade-out-links');

        text.classList.add('text-move-center');
    }

    else
    {
        audio.pause();
        text.textContent = "I make games sometimes, periodically, seldomly, occasionally";
        logo.classList.remove('logo-pulsing');

        links.classList.remove('fade-out-links');
        links.classList.add('fade-in-links');

        text.classList.remove('text-move-center');
    }

});

audio.addEventListener('ended', () => {
    logo.classList.remove('logo-pulsing');
    text.textContent = "I make games sometimes, periodically, seldomly, occasionally";

    links.classList.remove('fade-out-links');
    links.classList.add('fade-in-links');

    text.classList.remove('text-move-center');
});