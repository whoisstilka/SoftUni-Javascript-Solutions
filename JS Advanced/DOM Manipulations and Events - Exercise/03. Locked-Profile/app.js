function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((button) =>
        button.addEventListener('click', onClick)
    );

    function onClick(event) {
        const parent = event.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value="unlock"]');

        if (unlockedCheck.checked) {
            const DISPLAY_BLOCK = 'block';
            const SHOW_MORE = 'Show more';

            const hiidenDiv = parent.querySelector('div');
            hiidenDiv.style.display === DISPLAY_BLOCK
                ? (hiidenDiv.style.display = 'none')
                : (hiidenDiv.style.display = DISPLAY_BLOCK);

            event.target.textContent === SHOW_MORE
                ? (event.target.textContent = 'Hide it')
                : (event.target.textContent = SHOW_MORE);
        }
    }
}