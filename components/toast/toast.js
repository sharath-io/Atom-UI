const topToast = document.querySelector("#top-toast-id");
const topToastContent = document.querySelector('#top-content');
const topToastClose = document.querySelector('#top-toast-close');

const bottomToast = document.querySelector('#bottom-toast-id');
const bottomToastContent = document.querySelector('#bottom-content');
const bottomToastClose = document.querySelector('#bottom-toast-close');

const openTopToast = () => {
    topToastContent.style.display = 'block';
    setTimeout(() => closeTopToast(), 3000);
}
const closeTopToast = () => topToastContent.style.display = 'none';

topToast.addEventListener("click", openTopToast);
topToastClose.addEventListener("click", closeTopToast);


const openBottomToast = () => {
    bottomToastContent.style.display = 'block';
    setTimeout(() => closeBottomToast(), 3000);
}
const closeBottomToast = () => bottomToastContent.style.display = 'none';

bottomToast.addEventListener("click", openBottomToast);
bottomToastClose.addEventListener("click", closeBottomToast);