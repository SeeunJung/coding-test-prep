function solution(k, score) {
    let answer = [];
    let list = [];
    
    for(let i=0; i<score.length; i++){
        if(i<k)
            list.push(score[i]);
        if(score[i] > Math.min(...list)){
            list.pop();
            list.push(score[i]);
            list.sort((a, b) => b-a);
        }
        answer.push(list.at(-1));
    }
    return answer;
}