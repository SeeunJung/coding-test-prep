function solution(num) {
    let count=0;
    if(num===1)
        return 0;
    while(num !== 1){
        if(count >= 500)
            return (-1);
        if(isEven(num)){
            num/=2;
            count++;
        }        
        else{
            num=num*3+1;
            count++;
        }  
    }
    return count;
}

function isEven(n){
    if (n%2===0)
        return true;
}