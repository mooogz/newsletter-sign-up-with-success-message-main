const subscribeButton = document.querySelector('button');
const dismissButton = document.querySelector('#dismiss-btn');
const textContainer = document.querySelector('.text-container');
const mobileImg = document.querySelector('#screen-img-mobile');
const desktopImg = document.querySelector('#screen-img-desktop');
const successMessage = document.querySelector('.success-message');
const email = document.querySelector('#emailInput');
const errorMessage = document.getElementById('errorMessage');
const successEmail = document.getElementById('success-email')
const wrapper = document.querySelector('.wrapper')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

subscribeButton.addEventListener('click', function(){
    if (email.value.length === 0 || !emailRegex.test(email.value)) {
        errorMessage.classList.add('error');
        email.classList.add('error');

    } else {
        textContainer.style.display='none';
        mobileImg.style.display='none';
        desktopImg.style.display='none';
        successMessage.classList.remove('hidden')
        successEmail.innerText = email.value;
        wrapper.classList.add('success');
    }
})

dismissButton.addEventListener('click', function() {
    window.location.reload()
})