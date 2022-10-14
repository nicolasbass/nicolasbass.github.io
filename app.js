let number = document.getElementById("cardNumber");
let numberInput = document.getElementById("cardNumberInput");

let name = document.getElementById("cardName");
let nameInput = document.getElementById("cardNameInput");

let dateMonth = document.getElementById("cardDateMonth");
let dateMonthInput = document.getElementById("cardDateMonthInput");
let dateYear = document.getElementById("cardDateYear");
let dateYearInput = document.getElementById("cardDateYearInput");

let CVC = document.getElementById("cardCVC");
let CVCInput = document.getElementById("cardCVCInput");

let input = document.querySelectorAll("form input");

function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

function isFilled(i) {
    let errorMSG = document.querySelectorAll(".error")[i];
    if (!input[i].checkValidity()) {
        errorMSG.innerHTML = input[i].validationMessage;
    }
    if (input[i].value.length == 0) {
        input[i].setCustomValidity("Can't be blank");
        isValidate = false;
        if (i == 2 || i == 3) {
            document.querySelector(".date + .error").style.display = "block";
        }
    } else {
        isValidate = true;
        input[i].setCustomValidity("");
    }
}


for (let j = 0; j < input.length; j++) {
    input[j].onkeyup = (() => {
        let cardInput = document.querySelector("#" + input[j].id + "Card");
        if (j == 1) {
            input[j].value = cc_format(input[j].value);
        }
        cardInput.value = input[j].value;
        let i = j;
        isFilled(i);
    })
}

// nameInput.onkeyup = (() => {
//     name.value = nameInput.value;
//     i = 0;
//     isFilled();
// })

// numberInput.onkeyup = (() => {
//     numberInput.value = cc_format(numberInput.value);
//     number.value = numberInput.value;
//     i = 1;
//     isFilled();
// })

// dateMonthInput.onkeyup = (() => {
//     dateMonth.value = dateMonthInput.value;
//     i = 2;
//     isFilled();
//     validate();
// })

// dateYearInput.onkeyup = (() => {
//     dateYear.value = dateYearInput.value;
//     i = 3;
//     isFilled();
//     validate();
// })

// function validate() {
//     if (dateMonthInput.checkValidity() && dateYearInput.checkValidity()) {
//         document.querySelector(".date + .error").style.display = "none";
//     }
// }

// CVCInput.onkeyup = (() => {
//     CVC.value = CVCInput.value;
//     if (CVCInput.value.length == 0) {
//         CVCInput.setCustomValidity("Please fill out this field");
//     } else {
//         CVCInput.setCustomValidity("");
//     }
// })

let form = document.getElementById("form");

let isValidate = true;

form.onsubmit = ((e) => {
    e.preventDefault();

    for (i = 0; i < input.length; i++) {
        isFilled();
    };

    if (isValidate) {

        document.querySelector(".form-container").innerHTML = '<div class="status"> <figure> <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" /><path d="M28 39.92 36.08 48l16-16" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg> </figure> <div class="thanks"> <h1> THANK YOU! <span>' + "We've added your card details </span>" + '</h1> <button class="btn"> Continue </button> </div> <div>';

        setTimeout(function () {
            document.querySelector(".status .thanks").style.display = "block";
        }, 600);
    }
})