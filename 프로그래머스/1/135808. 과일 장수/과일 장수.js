function solution(k, m, score) {
    let maxSum = 0;
    let boxNumber = Math.floor(score.length/m);
    score.sort((a, b) => b-a);
    
    for(let i=1; i<=boxNumber; i++){
        maxSum += score[m*i-1] * m;
    }
    return maxSum;
}