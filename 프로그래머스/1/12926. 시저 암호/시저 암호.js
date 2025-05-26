function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= "";
    
    for(let i=0; i<s.length; i++){
        let test = s[i];
        if(test === " "){
            answer += " ";
            continue;
        }
        
        let textArray = upper.includes(test)? upper : lower;
        let index = textArray.indexOf(test)+n;
        if(index >= textArray.length)
            index -= textArray.length;
        answer += textArray[index];
    }
    return answer;
}