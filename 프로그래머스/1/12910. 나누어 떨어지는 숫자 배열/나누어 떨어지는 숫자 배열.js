function solution(arr, divisor) {
    var answer = [];
    arr.forEach(element => {
        if(element%divisor===0)
            answer.push(element);
    })
    answer.sort((a,b) => (a-b));
    if(answer.length===0)
        return [-1];
    else
        return answer;
}