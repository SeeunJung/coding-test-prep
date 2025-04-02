function solution(absolutes, signs) {
    let numbers = [];
    for(let i=0; i<absolutes.length; i++){
        if(signs[i])
            numbers.push(Number(absolutes[i]));
        else
            numbers.push(Number("-"+absolutes[i]));
    }
    return numbers.reduce((a,b) => (a+b));
}