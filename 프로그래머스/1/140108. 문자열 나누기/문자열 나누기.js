function solution(s) {
    let x = 0;
    let count = 0;
    let result = [];
    
    for(let i=0; i<s.length; i++){
        if(s[i] === s[x]) count++;
        else count--;
        if(count === 0){
            result.push(s.substring(x, i+1));
            x = i+1;
        }
    }
    return result.join("").length === s.length ? result.length : result.length+1;
}