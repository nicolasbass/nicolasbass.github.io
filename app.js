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

nameInput.onkeyup = (() => {
    name.value = nameInput.value;
})

numberInput.onkeyup = (() => {
    numberInput.value = cc_format(numberInput.value);
    number.value = numberInput.value;
})

dateMonthInput.onkeyup = (() => {
    dateMonth.value = dateMonthInput.value;
    if (dateMonthInput.value.length == 0) {
        document.querySelector(".date + .error").style.display = "block";
        dateMonthInput.setCustomValidity("Invalid field.");
    } else {
        dateMonthInput.setCustomValidity("");
    }
    validate();
})

dateYearInput.onkeyup = (() => {
    dateYear.value = dateYearInput.value;
    if (dateYearInput.value.length == 0) {
        document.querySelector(".date + .error").style.display = "block";
        dateYearInput.setCustomValidity("Invalid field.");
    } else {
        dateYearInput.setCustomValidity("");
    }
    validate();
})

function validate() {
    if (dateMonthInput.checkValidity() && dateYearInput.checkValidity()) {
        document.querySelector(".date + .error").style.display = "none";
    }
}

CVCInput.onkeyup = (() => {
    CVC.value = CVCInput.value;
    if (CVCInput.value.length == 0) {
        CVCInput.setCustomValidity("Invalid field.");
    } else {
        CVCInput.setCustomValidity("");
    }
})

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

let form = document.getElementById("form");

form.onsubmit = (() => {
    document.querySelector(".form-container").innerHTML = '<div class="status"> <figure> <img src="images/icon-complete.svg" alt=""> </figure> <h1> THANK YOU! <span>' + "We've added your card details</span>" + '</h1> <button class="btn"> Continue </button> </div>';
})
