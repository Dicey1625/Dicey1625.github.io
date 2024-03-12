function calculate() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    var operand = document.getElementById("operand").value;
    switch(operand) {
        case "plus":
            var answer = num1 + num2;
            break;
        
        case "minus":
            var answer = num1 - num2;
            break;
        
        case "multiply":
            var answer = num1 * num2;
            break;

        case "divide":
            if (num2 == 0) {
                answer = "Hello world!"
            } else {
            var answer = num1 / num2;
            }
            break;

        default:
            var answer = "hello world!";
    }
        //let answer = num1 + num2;

    document.getElementById("answer").innerHTML = answer;
}

function clear() {
    document.getElementById("num1").innerHTML = " ";
    document.getElementById("num2").innerHTML = " ";
    document.getElementById("sum").innerHTML = " ";
}

function update() {
    document.getElementById("2").innerHTML = "<img src=img/2.gif width= 5%>";
}

function update2() {
    document.getElementById("=").innerHTML = "<img src=img/2.gif width= 2.5% height= 15px>";
}