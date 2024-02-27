function Calculator(num1,num2,operator){
let result;
    if (operator==='+') {
        result = num1+num2;
    }else if (operator==='-'){
        result = num1-num2;
    }else if(operator==='*'){
        result = num1*num2;
    }else if (operator==='/'){
        result = num1/num2;
    }else{
        result = 'an error massage'
    }
    return console.log(result);
}

Calculator(5,3,'+');
Calculator(5,3,'-');
Calculator(5,3,'*');
Calculator(5,3,'/');
Calculator(5,5,'&');

function Cal(num1,num2,operator) {
    let res;
    switch(operator){
        case '+':
         res = num1+num2;
        break;
        case '-':
        res = num1-num2;
        break;
        case '*':
        res = num1*num2;
        break;
        case '/':
        res = num1 / num2;
        break;
        default:
            res = 'an error massage';
            break; 
    }
    console.log(res);
    return res;
}

Cal(5,2,'/');
