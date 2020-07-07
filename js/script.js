document.addEventListener("DOMContentLoaded", function() {
let feedbackLink = document.querySelector(".contacts .button-info");
let feedback = document.querySelector(".feedback");
let feedbackForm = feedback.querySelector(".feedback-form");
let closeFeedback = feedback.querySelector(".close-cross");

let mapLink = document.querySelector(".img-container");
let map = document.querySelector(".map");
let closeMap = map.querySelector(".close-cross");

let inputName = feedbackForm.querySelector("#name-field");
let inputEmail = feedbackForm.querySelector("#email-field");
let inputComment = feedbackForm.querySelector("#comment-field");

let slider = document.querySelector(".js-slider");
let sliderServices = document.querySelector(".js-slider-services");

let SLIDE_ACTIVE_CLASS = "slider-active";
let BUTTON_ACTIVE_CLASS = "slider-button-current";
let SLIDE_SERVICE_ACTIVE_CLASS = "active-service";
let BUTTON_SERVICE_ACTIVE_CLASS = "service-current-button";

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

feedbackForm.noValidate = true;

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

function initSlider(sliderContainer, slideActiveClass, buttonActiveClass) {
    let slides = sliderContainer.querySelectorAll(".js-slider-track li");
    let buttons = sliderContainer.querySelectorAll(".js-slider-controls button");

    function removeActiveClass(index) {
        slides[index].classList.remove(slideActiveClass);
        buttons[index].classList.remove(buttonActiveClass);
    }

    function addActiveClass(index) {
        slides[index].classList.add(slideActiveClass);
        buttons[index].classList.add(buttonActiveClass);
    }

    function activeSlide(id) {
        buttons.forEach(function(_, index) {
            id === index ? addActiveClass(index) : removeActiveClass(index);
        });
    }

    buttons.forEach(function(button, id) {
        button.addEventListener("click", function() {
            activeSlide(id)
        });
    });
}

initSlider(slider, SLIDE_ACTIVE_CLASS, BUTTON_ACTIVE_CLASS);
initSlider(sliderServices, SLIDE_SERVICE_ACTIVE_CLASS, BUTTON_SERVICE_ACTIVE_CLASS);

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("show-feedback");

    if (storageName) {
        inputName.value = storageName;
    } else {
        inputName.focus();
    }

    if (storageEmail) {
        inputEmail.value = storageEmail;
    }
});

closeFeedback.addEventListener("click", function () {
    feedback.classList.remove("show-feedback");
    feedback.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && feedback.classList.contains("show-feedback")) {
        evt.preventDefault();
        feedback.classList.remove("show-feedback");
        feedback.classList.remove("feedback-error");
    }
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputComment.value) {
    evt.preventDefault();
    feedback.classList.remove("feedback-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error");

    if (!inputName.value) {
        inputName.classList.add("invalid-value")
    }
    if (!inputEmail.value) {
        inputEmail.classList.add("invalid-value")
    }
    if (!inputComment.value) {
        inputComment.classList.add("invalid-value")
    }

    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", inputName.value);
            localStorage.setItem("email", inputEmail.value);
        }  
    }
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("show-map");
});

closeMap.addEventListener("click", function () {
    map.classList.remove("show-map");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && map.classList.contains("show-map")) {
        evt.preventDefault();
        map.classList.remove("show-map");
    }
});
});



