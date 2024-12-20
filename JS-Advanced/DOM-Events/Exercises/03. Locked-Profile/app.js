function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('.profile'));

    profiles.forEach(profile => {
        const button = profile.querySelector('button');
        const unlockRadio = profile.querySelector('input[value="unlock"]');

        button.addEventListener('click', () => {
            if(unlockRadio.checked) {
                const hiddenInfo = profile.querySelector('div');
                hiddenInfo.style.display = hiddenInfo.style.display === 'block' ? 'none' : 'block';
                button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more';
            }
        })
    })
}