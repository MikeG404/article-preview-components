const cardFooter = document.querySelector('.card-footer');
const cardFooterShare = document.querySelector('.card-footer-share');

cardFooter.addEventListener('click', () => {
    
    const cardFooterChildren = document.querySelectorAll('.avatar, .card-footer-content');
    cardFooterChildren.forEach(child => {
        child.style.display = 'none'
    });

    cardFooter.classList.add('active');

    cardFooter.innerHTML = `
        <div class="share-container">
            <p class="share-text">Share</p>
            <ul class="social-icons">
                <li><a href="#"><img src="./images/icon-facebook.svg"/></a></li>
                <li><a href="#"><img src="./images/icon-twitter.svg"/></a></li>
                <li><a href="#"><img src="./images/icon-pinterest.svg"/></a></li>
            </ul>
        </div>
        <div class="share-button-active">
            <img src="./images/icon-share.svg"/>
        </div>
    `;
}) 