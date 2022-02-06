let bill, tip, billtip, person, tipPerPerson = 0,
    billPerPerson = 0;

var cyan = "hsl(172, 67%, 45%)",
    dark = "hsl(183, 100%, 15%)";

function reset() {
    window.location.reload(true);
}


document.querySelector("#bill").addEventListener("input", function() {
    bill = document.querySelector("#bill").valueAsNumber;
    if (person > 0) { calctip(tip, person); }
})

for (var i = 0; i < 5; i++) {
    document.querySelectorAll(".tip")[i].addEventListener("click", function(e) {
        tip = e.target.id;
        buttonActive(e.target.id);
        if (person > 0) { calctip(tip, person); }
    });
}

document.querySelector("#custom").addEventListener("input", function() {
    custom = document.querySelector("#custom").valueAsNumber;
    tip = custom;
    if (person > 0) { calctip(tip, person); }
})

document.querySelector("#custom").addEventListener("click", resetActiveButton);

document.querySelector("#no-of-people").addEventListener("input", function(e) {
    person = document.querySelector("#no-of-people").valueAsNumber;
    calctip(tip, person);
})

document.querySelector("#reset").addEventListener("click", reset);


function calctip(tip, person) {
    billtip = ((bill * tip) / 100);
    tipPerPerson = billtip / person;
    billtip += bill;

    billPerPerson = billtip / person;

    // console.log("bill : " + bill);
    // console.log("tip : " + tip);
    // console.log("billtip : " + billtip);
    // console.log("person : " + person);
    // console.log("billPerPerson : " + billPerPerson);

    printamount(tipPerPerson, billPerPerson);
}

function printamount(tipPerPerson, billPerPerson) {
    if (billPerPerson >= 100000000) {
        console.log("Im in");
        document.querySelectorAll("h1")[0].innerHTML = "bada aaya";
        document.querySelectorAll("h1")[1].innerHTML = "jeff bezos";
    } else {
        document.querySelectorAll("h1")[0].innerHTML = "$" + tipPerPerson.toFixed(2);
        document.querySelectorAll("h1")[1].innerHTML = "$" + billPerPerson.toFixed(2);
    }

}

function buttonActive(id) {
    resetActiveButton();
    document.getElementById(id).style.backgroundColor = cyan;
}

function resetActiveButton() {
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i <= (buttons.length) - 1; i++) {
        buttons[i].style.backgroundColor = dark;
    }
}