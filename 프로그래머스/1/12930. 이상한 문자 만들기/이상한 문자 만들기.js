function solution(s) {
    let answer = "";
    let index = 0;
    
    for(let i=0; i<s.length; i++){
        const char = s[i];
        if(char === " "){
            answer += " ";
            index = 0;
        } else{
            answer += index%2 === 0
                ? char.toUpperCase()
                : char.toLowerCase();
            index++;
        }
    }
    return answer;
}