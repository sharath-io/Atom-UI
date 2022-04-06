const topToast = document.querySelector("#top-toast-id");
const topToastContent = document.querySelector('#top-content');
const topToastClose = document.querySelector('#top-toast-close');

const bottomToast = document.querySelector('#bottom-toast-id');
const bottomToastContent = document.querySelector('#bottom-content');
const bottomToastClose = document.querySelector('#bottom-toast-close');

const show = 'block';
const hide = 'none';

const openTopToast = () => {
    topToastContent.style.display = show;
    setTimeout(() => closeTopToast(), 3000);
}
const closeTopToast = () => topToastContent.style.display = hide;

topToast.addEventListener("click", openTopToast);
topToastClose.addEventListener("click", closeTopToast);


const openBottomToast = () => {
    bottomToastContent.style.display = show;
    setTimeout(() => closeBottomToast(), 3000);
}
const closeBottomToast = () => bottomToastContent.style.display = hide;

bottomToast.addEventListener("click", openBottomToast);
bottomToastClose.addEventListener("click", closeBottomToast);