"use strict";

let input = document.querySelectorAll("form input");

function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (let k = 0, len = match.length; k < len; k += 4) {
        parts.push(match.substring(k, k + 4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

function validDate() {
    if (input[2].checkValidity() && input[3].checkValidity()) {
        document.querySelector(".date + .error").style.display = "none";
    }
}

console.log(document.querySelectorAll(".error")[4])

function isFilled(i) {
    let errorMSG = document.querySelectorAll(".error")[i];
    if (i == 4 || i == 3) {
        errorMSG = document.querySelectorAll(".error")[i - 1];
    }
    if (input[i].value.length == 0) {
        input[i].setCustomValidity("Can't be blank");
        isValid = false;
        if (i == 2 || i == 3) {
            document.querySelector(".date + .error").style.display = "block";
        }
    } else {
        isValid = true;
        input[i].setCustomValidity("");
        validDate();
    }
    if (!input[i].checkValidity()) {
        errorMSG.innerHTML = input[i].validationMessage;
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

let form = document.getElementById("form");

let isValid = true;

form.onsubmit = ((e) => {
    e.preventDefault();

    for (let i = 0; i < input.length; i++) {
        isFilled(i);
    };

    if (isValid) {

        document.querySelector(".form-container").innerHTML = '<div class="status"> <figure> <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" /><path d="M28 39.92 36.08 48l16-16" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg> </figure> <div class="thanks"> <h1> THANK YOU! <span>' + "We've added your card details </span>" + '</h1> <button class="btn"> Continue </button> </div> <div>';

        setTimeout(function () {
            document.querySelector(".status .thanks").style.display = "block";
        }, 600);
    }
})