function solution(x) {
    let divisor = 0;
    let newArray = x.toString().split("").map(Number);
    newArray.map(number => divisor+=number);
    
    if(x%divisor === 0)
        return true;
    else
        return false;
}