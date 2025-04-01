function solution(food) {
    let answer = [];
    let arr = [];
    for(let i=1; i<food.length; i++){
        arr.push(Math.floor(food[i]/2));
    }
    
    for(let i=0; i<food.length; i++){
        for(let j=0; j<arr[i]; j++){
            answer.push(i+1);
        }
    }
    
    answer = answer.concat(0).concat(answer.reverse()).join("");
    return answer;
}