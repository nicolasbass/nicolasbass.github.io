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
    nameInput.value = nameInput.value;
    name.value = nameInput.value;
})

numberInput.onkeyup = (() => {
    numberInput.value = cc_format(numberInput.value);
    number.value = numberInput.value;
})

dateMonthInput.onkeyup = (() => {
    dateMonthInput.value = dateMonthInput.value;
    dateMonth.value = dateMonthInput.value;
})

dateYearInput.onkeyup = (() => {
    dateYearInput.value = dateYearInput.value;
    dateYear.value = dateYearInput.value;
})

CVCInput.onkeyup = (() => {
    CVCInput.value = CVCInput.value;
    CVC.value = CVCInput.value;
})

function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

