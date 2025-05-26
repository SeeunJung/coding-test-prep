function solution(n, arr1, arr2) {
    let final = [];
    let answer = [];
    
    for(let i=0; i<n; i++){
        const final = (arr1[i] | arr2[i]).toString(2);
        answer.push(final.replace(/1/gi, "#").replace(/0/gi, " ").padStart(n, " "));
    }
    return answer;
}