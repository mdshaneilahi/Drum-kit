{
    const playingDrum = 'playing',
       leftStick = document.getElementById('Left-stick'),
        rightStick = document.getElementById('Right-stick');

    const animateEOrD = () => {
        leftStick .style.transform = 'rotate(0deg) scale(1.5)';
    };

    const animateIOrK = () => {
       rightStick.style.top = '171px';
    };

    const playSound = e => {
        const keyCode = e.keyCode,
            keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

        if (!keyElement) return;

        const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
        audioElement.currentTime = 0;
        audioElement.play();

        switch (keyCode) {
            case 69:
            case 68:
                animateEOrD();
                break;
            case 73:
            case 75:
                animateIOrK();
                break;
        }

        keyElement.classList.add(playingDrum);
    };

    const removeCrashRideTransition = e => {
        if (e.propertyName !== 'transform') return;

        e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
    };

    const removeHiHatTopTransition = e => {
        if (e.propertyName !== 'top') return;

        e.target.style.top = '166px';
    };

    const removeKeyTransition = e => {
        if (e.propertyName !== 'transform') return;

        e.target.classList.remove(playingDrum)
    };

    const drumKeys = Array.from(document.querySelectorAll('.key'));

    drumKeys.forEach(key => {
        key.addEventListener('transitionend', removeKeyTransition);
    });

    leftStick .addEventListener('transitionend', removeCrashRideTransition);
    rightStick .addEventListener('transitionend', removeHiHatTopTransition);

    window.addEventListener('keydown', playSound);
}