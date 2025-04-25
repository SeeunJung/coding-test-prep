function solution(number, limit, power) {
    let answer = 0;
    let factorNum = [];
    let index = 1;
    for(let i=1; i<=number; i++){
        let count = 0;
        for(let j=1; j*j<=i; j++){
            if(i%j === 0){
                count++;
                if(j !== i/j)
                    count++;
            }
        }
        
        if(count > limit)
            answer+=power;
        else
            answer+=count;
    }
    return answer;
}