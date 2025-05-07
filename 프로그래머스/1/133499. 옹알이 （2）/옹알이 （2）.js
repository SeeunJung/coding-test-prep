function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    
    for(let i=0; i<babbling.length; i++){
        let babble = babbling[i];
        
        for(let j=0; j<words.length; j++){
            if(babble.includes(words[j].repeat(2)))
                break;
            
            babble = babble.split(words[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0)
            answer++;
    }
    return answer;
}