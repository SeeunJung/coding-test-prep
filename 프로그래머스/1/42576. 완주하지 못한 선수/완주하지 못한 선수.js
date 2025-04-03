function solution(participant, completion) {
    let runner = new Map();
    
    for(let p of participant){
        runner.set(p, (runner.get(p)||0)+1);
    }
    
    for(let c of completion){
        runner.set(c, runner.get(c)-1)
    }
    
    for(let [key, value] of runner){
        if(value>0)
            return key;
    }
    
    return key;
}