let operations=[""];
const operators=["+","-","*","/"];
let container=document.querySelector("#rectangle");
container.addEventListener("input",Change);

let Del=document.querySelector("#delete");

Del.addEventListener("click",Delete);

let clear=document.querySelector("#clear");

clear.addEventListener("click",Clear);

function Change(){
    container=document.querySelector("#rectangle");
    operations[operations.length-1]=container.value;
    console.log(container.value);
}


function Delete(){
    container=document.querySelector("#rectangle");
    len=operations.length;
    curr=operations[len-1];
    if (curr!=""){
        curr=Array.from(curr);
        curr.pop();
        operations[len-1]=curr.join("");
        container.value=operations[len-1];

        

    }
    
    //console.log(container.value);
}

function Clear(){
    container=document.querySelector("#rectangle");
    container.value="";
    operations=[""];
    //console.log(container.value);
}
function number(digit){
    len=operations.length;
    if (operators.indexOf(operations[len-1])!=-1){
        operations.push(digit);

    }
    else{
        operations[len-1]=operations[len-1]+digit;


    }
    console.log(operations);
    container.value=operations[(operations.length)-1];

}

function operate(currOperator){
    console.log(currOperator);
    len=operations.length-1;
    console.log(operations);
    if (operations[len]==""){
        alert("Invalid operation");
    }
    else{
        if (len==0){
            operations.push(currOperator);
            operations.push("");
        }
        else{
            if (len==2){
                operand1=parseFloat(operations[0]);
                operand2=parseFloat(operations[2]);
                operator=operations[1];
                if(operator=="+")result=operand1+operand2;
                if(operator=="-")result=operand1-operand2;
                if(operator=="*")result=operand1*operand2;
                if(operator=="/"){
                    if (operand2!=0){
                        result=operand1/operand2;
                    }
                    else{
                        alert("Error Divisionn by zero");
                        container.value="";
                        operations=[""];
                        return;
                    }
        
                
                }
                result=result.toFixed(5).toString();
                result=Array.from(result);
                if (result.indexOf(".")!=-1){
                    while(result[result.length-1]=="0" | result[result.length-1]=="." ){
                        if (result[result.length-1]=="."){
                            result.pop();
                            break;
                        }
                        result.pop();
                    }
                    result=result.join("");
                }

                operations=[result,currOperator,""];

            }

        }
    container.value="";
    }
}

function calculate(){
    len=operations.length-1;
    if(len!=2){
        alert("Invalid Operation");
    }
    else{
        operand1=parseFloat(operations[0]);
        operand2=parseFloat(operations[2]);
        operator=operations[1];
        if(operator=="+")result=operand1+operand2;
        if(operator=="-")result=operand1-operand2;
        if(operator=="*")result=operand1*operand2;
        if(operator=="/"){
            if (operand2!=0){
                result=operand1/operand2;
            }
            else{
                alert("Error Divisionn by zero");
                container.value="";
                operations=[""];
                return;
            }

        
        }
        result=result.toFixed(5).toString();
        result=Array.from(result);
        if (result.indexOf(".")!=-1){
            while(result[result.length-1]=="0" | result[result.length-1]=="." ){
                if (result[result.length-1]=="."){
                    result.pop();
                    break;
                }
                result.pop();
            }
            result=result.join("");
        }
        container.value=result;
        operations=[result];

         
    }
}
function Dot(dot){
    len=operations.length;
    if (operations[len-1].indexOf(".")==-1){
        operations[len-1]=operations[len-1]+dot;
    }
    else{
        alert("Invalid operation");
    }


    
    console.log(operations);
    container.value=operations[(operations.length)-1];

}