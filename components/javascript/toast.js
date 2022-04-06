const topToast = document.querySelector("#top-toast-id");
const topToastContent = document.querySelector('#top-content');
const topToastClose = document.querySelector('#top-toast-close');

const bottomToast = document.querySelector('#bottom-toast-id');
const bottomToastContent = document.querySelector('#bottom-content');
const bottomToastClose = document.querySelector('#bottom-toast-close');

const openTopToast = () => topToastContent.style.display = 'block';

const closeTopToast = () => topToastContent.style.display = 'none';

topToast.addEventListener("click", openTopToast);
topToastClose.addEventListener("click", closeTopToast);



const openBottomToast = () => bottomToastContent.style.display = 'block';
const closeBottomToast = () => bottomToastContent.style.display = 'none';


bottomToast.addEventListener("click", openBottomToast);
bottomToastClose.addEventListener("click", closeBottomToast);