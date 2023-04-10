var answr;
var operation;
var fnc;
var enter;

var NumOne = 0;
function frstNum(){
    NumOne = document.getElementById("num1").value;
}

var NumTwo = 0;
function scndNum(){
    NumTwo = document.getElementById("num2").value;
}

function addi(){
    enter = "+";
    fnc = "sum";
    Ans();
}
function subt(){
    enter = "-";
    fnc = "difference";
    Ans();
}
function mult(){
    enter = "*";
    fnc = "product";
    Ans();
}
function divi(){
    enter = "/";
    fnc = "quotient";
    Ans();
}
function perc(){
    enter = "%";
    fnc = "remainder";
    Ans();
}

function Ans(){
    oprtn = enter;

    if(oprtn == "+"){
        answr = parseInt(NumOne) + parseInt(NumTwo);
    }
    if(oprtn == "-"){
        answr = parseInt(NumOne) - parseInt(NumTwo);
    }
    if(oprtn == "*"){
        answr = parseInt(NumOne) * parseInt(NumTwo);
    }
    if(oprtn == "/"){
        answr = parseInt(NumOne) / parseInt(NumTwo);
    }
    if(oprtn == "%"){
        answr = parseInt(NumOne) % parseInt(NumTwo);
    }

    if(oprtn == "+" || oprtn == "-" || oprtn == "*" || oprtn == "%" || oprtn == "/"){
        document.getElementById("rslt").innerHTML = (answr);
    }
    event.preventDefault();
}
