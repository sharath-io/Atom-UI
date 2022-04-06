var topToast = document.querySelector("#top-toast-id");
var topToastContent = document.querySelector('#top-content');
var topToastClose = document.querySelector('#top-toast-close');

var bottomToast = document.querySelector('#bottom-toast-id');
var bottomToastContent = document.querySelector('#bottom-content');
var bottomToastClose = document.querySelector('#bottom-toast-close');

function openTopToast(){
    topToastContent.style.display='block';
}

function closeTopToast(){
    topToastContent.style.display='none';
}

topToast.addEventListener("click", openTopToast);
topToastClose.addEventListener("click", closeTopToast);



function openBottomToast(){
    bottomToastContent.style.display='block';
}
function closeBottomToast(){
    bottomToastContent.style.display='none';
}


bottomToast.addEventListener("click", openBottomToast);
bottomToastClose.addEventListener("click", closeBottomToast);