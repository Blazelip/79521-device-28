// FEEDBACK

let feedbackLink = document.querySelector(".contacts .button-info");
let feedback = document.querySelector(".feedback");
let feedbackForm = feedback.querySelector(".feedback-form");
let closeFeedback = feedback.querySelector(".close-cross");

let inputName = feedbackForm.querySelector("#name-field");
let inputEmail = feedbackForm.querySelector("#email-field");
let inputComment = feedbackForm.querySelector("#comment-field");


let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("show-feedback");

    if (storage) {
        inputEmail.value = storage;
    }

    inputName.focus();
});

closeFeedback.addEventListener("click", function () {
    feedback.classList.remove("show-feedback");
    feedback.classList.remove("feedback-error");
});

feedbackForm.addEventListener("sumbit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputComment.value) {
    evt.preventDefault();
    // Есть сомнение, что вот этот блок не отрабатывает
    feedback.classList.remove("feedback-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error");
    console.log("Здесь работает анимация");
    // 
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", inputEmail.value);
        }     
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedback.classList.contains("show-feedback")) {
          evt.preventDefault();
          feedback.classList.remove("show-feedback");
          feedback.classList.remove("feedback-error");
        }
    }
});

// MAP

let mapLink = document.querySelector(".img-container");
let map = document.querySelector(".map");

let closeMap = map.querySelector(".close-cross");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("show-map");
});

closeMap.addEventListener("click", function () {
    map.classList.remove("show-map");
});


// SLIDER

let slider = document.querySelector(".js-slider");
let sliderServices = document.querySelector(".js-slider-services");

let SLIDE_ACTIVE_CLASS = "slider-active";
let BUTTON_ACTIVE_CLASS = "slider-button-current";
let SLIDE_SERVICE_ACTIVE_CLASS = "active-service";
let BUTTON_SERVICE_ACTIVE_CLASS = "service-current-button";

/* функция активирующая слайдер, для работы она требует:
    sliderContainer - контейнер в котором лежат слайды и кнопки
    slideActiveClass - активный css-класс слайда
    buttonActiveClass - активный css-класс кнопки
*/
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

	/* задаём каждой кнопке обработчик клика */
	buttons.forEach(function(button, id) {
		button.addEventListener("click", function() {
			activeSlide(id)
		});
	});
}

// Инициализируем слайдер, передаём в функцию нужные параметры для работы
initSlider(slider, SLIDE_ACTIVE_CLASS, BUTTON_ACTIVE_CLASS);
initSlider(sliderServices, SLIDE_SERVICE_ACTIVE_CLASS, BUTTON_SERVICE_ACTIVE_CLASS);
