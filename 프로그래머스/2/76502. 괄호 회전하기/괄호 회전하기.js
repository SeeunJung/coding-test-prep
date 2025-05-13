function solution(s) {
    const n = s.length;
    let count = 0;
    let stack = [];
    
    if(s.length === 0)
        return 0;
    
    for(let i=0; i<n; i++){
        let str = s.slice(i) + s.slice(0, i);
        
        let isCorrect = true;
        
        for(let st of str){
            if(st === "(" || st === "{" || st === "[")
                stack.push(st);
            else{
                let start = stack.pop();
                if(start === "(" && st === ")") continue;
                if(start === "{" && st === "}") continue;
                if(start === "[" && st === "]") continue;
                isCorrect = false;
                break;
            }
        }
        if(isCorrect && stack.length === 0)
            count++;
    }
    return count;
}