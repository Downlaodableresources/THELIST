const select = document.getElementById('topicSelect');
const goButton = document.getElementById('goButton');

select.addEventListener('change', function () {
    goButton.disabled = !this.value;
});

goButton.addEventListener('click', function () {
    const selectedUrl = select.value;
    if (selectedUrl) {
        window.location.href = selectedUrl;
    }
});
