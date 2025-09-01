document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('share-button');
    const shareButtonActive = document.getElementById('share-button-active');
    const mobileBase = document.getElementById('mobile-base');
    const mobileShare = document.getElementById('mobile-share');

    function showShareState() {
        mobileBase.style.display = 'none';
        mobileShare.classList.add('active');
    }

    function showBaseState() {
        mobileBase.style.display = 'flex';
        mobileShare.classList.remove('active');
    }

    shareButton.addEventListener('click', showShareState);
    shareButtonActive.addEventListener('click', showBaseState);

    document.addEventListener('click', function(event) {
        if (!mobileShare.contains(event.target) && 
            !shareButton.contains(event.target) && 
            mobileShare.classList.contains('active')) {
            showBaseState();
        }
    });
});
