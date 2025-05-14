function solution(prices) {
    let stack = [0];
    let answer = new Array(prices.length).fill(0);
    
    for(let i=0; i<prices.length; i++){
        while(stack.length > 0 && prices[i] < prices[stack[stack.length-1]]){
            const j = stack.pop();
            answer[j] = i-j;            
        }
        stack.push(i);
    }
    
    while(stack.length > 0){
        const left = stack.pop();
        answer[left] = prices.length - 1 - left;
    }
    return answer;
}