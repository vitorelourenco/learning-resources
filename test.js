function zeroZero (num){
    let op1=0;
    let op2;
    do {
        op1++;
        if (/0/.test(op1.toString())) continue;
        op2 = num/op1;
        if (/0/.test(op2.toString())) continue;
        if (!Number.isInteger(op2)) continue;
        return {op1: op1,op2: op2};
    } while (op1<num);
    return;
}



const noZero = num => { 
    const regex = /.*0.*|.*\..*/g;
    for (let i = 1; i < num; i++){
        if (!String(i).match(regex) && !String((num / i)).match(regex)){
            return [num / i, i];
        }
    }
    return 'No combination found';
}

console.log(noZero(1000000));

console.log(zeroZero(1000000));

