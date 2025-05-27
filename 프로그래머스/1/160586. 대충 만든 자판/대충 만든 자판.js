function solution(keymap, targets) {
    let answer = [];
    
    targets.map((target) => {
        let count = 0;
        for(let i=0; i<target.length; i++){
            let minPress = Infinity;
            let char = target[i];
            
            for(const key of keymap){
                let index = key.indexOf(char);
                if(index !== -1)
                    minPress = Math.min(minPress, index+1);
            }
            if(minPress === Infinity){
                count = -1;
                break;
            }else{
                count += minPress;
            }
        }
        answer.push(count);
    })
    return answer;
}