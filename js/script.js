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
    feedback.classList.add("modal-show");

    if (storage) {
        inputEmail.value = storage;
    }

    inputName.focus();
});

closeFeedback.addEventListener("click", function () {
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
});

feedbackForm.addEventListener("sumbit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputComment.value) {
    evt.preventDefault();
    // Есть сомнение, что вот этот блок не отрабатывает
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
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
        if (feedback.classList.contains("modal-show")) {
          evt.preventDefault();
          feedback.classList.remove("modal-show");
          feedback.classList.remove("modal-error");
        }
    }
});


