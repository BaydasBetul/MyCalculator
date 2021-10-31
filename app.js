function Calculator() {
    const numberBtn = document.querySelectorAll(".number");
    const prevDisplay = document.getElementById("prev-display");
    const operatorBtn = document.querySelectorAll(".operator")
    let selectedOperator = "";
    let firstValue = "";
    let secondValue = "";

    for (let i = 0; i < numberBtn.length; i++) {
        numberBtn[i].addEventListener("click", function () {
            prevDisplay.innerHTML += this.value;
            if (selectedOperator == "") {
                firstValue += this.value;
            } else if (selectedOperator != "") {
                secondValue += this.value;
            }
        }, false);
    }


    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener("click", function () {
            selectedOperator = this.value;
            if (prevDisplay.innerHTML[0] == "-") {
                if (!prevDisplay.innerHTML.includes("+") && !prevDisplay.innerHTML.includes("-") && !prevDisplay.innerHTML.includes("*") && !prevDisplay.innerHTML.includes("/")) {
                    prevDisplay.innerHTML += selectedOperator;
                }
            } else if (!prevDisplay.innerHTML.includes("+") && !prevDisplay.innerHTML.includes("-") && !prevDisplay.innerHTML.includes("*") && !prevDisplay.innerHTML.includes("/")) {
                prevDisplay.innerHTML += selectedOperator;
            }

        }, false);
    }


    document.getElementById("equals").addEventListener("click", function () {


        if (selectedOperator == "+") {
            prevDisplay.innerHTML = parseFloat(firstValue) + parseFloat(secondValue);
        } else if (selectedOperator == "-") {
            prevDisplay.innerHTML = parseFloat(firstValue) - parseFloat(secondValue);
        } else if (selectedOperator == "*") {
            prevDisplay.innerHTML = parseFloat(firstValue) * parseFloat(secondValue);
        } else if (selectedOperator == "/") {
            if (secondValue == 0) {
                prevDisplay.innerHTML = "0"
            } else {
                prevDisplay.innerHTML = parseFloat(firstValue) / parseFloat(secondValue);
            }

        }

    }, false);

    document.getElementById("all-clear").addEventListener("click", function () {
        selectedOperator = "";

        firstValue = "";
        secondValue = "";
        prevDisplay.innerHTML = "";

    }, false);

    document.getElementById("lastDel").addEventListener("click", function () {
        prevDisplay.innerHTML = prevDisplay.innerHTML.substr(0, prevDisplay.innerHTML.length - 1)
    }, false);


    document.getElementById("dot").addEventListener("click", function () {
        if (secondValue == "") {
            firstValue += ".";
            prevDisplay.innerHTML = firstValue;
        } else {
            secondValue += ".";
            prevDisplay.innerHTML = firstValue + selectedOperator + secondValue;

        }
    }, false);

};
Calculator()