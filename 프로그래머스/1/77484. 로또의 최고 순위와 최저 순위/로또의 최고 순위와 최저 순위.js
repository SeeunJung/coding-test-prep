function solution(lottos, win_nums) {
    let zeroes = 0;
    let correctNums = 0;
    
    lottos.forEach(item => {
        if(item === 0) zeroes++;
        else if(win_nums.includes(item)) correctNums++;
    });
    
    let min = 7-correctNums >= 6? 6 : 7-correctNums;
    let max = min-zeroes < 1? 1: min-zeroes;
    return [max, min];
}