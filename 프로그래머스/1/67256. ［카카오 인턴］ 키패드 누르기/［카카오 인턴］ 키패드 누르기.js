function findKey(key){
    const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];
    for(let i=0; i<4; i++){
        for(let j=0; j<3; j++){
            if(keypad[i][j] === key)
                return [i, j];
        }
    }
}

function solution(numbers, hand) {
    let answer = "";
    let left = "*";
    let right = "#";
    
    for(let i of numbers){
        if(i===1 || i===4 || i===7){
            answer += "L";
            left = i;
        }
        else if(i===3 || i===6 || i===9){
            answer += "R";
            right = i-2;
        }else{
            let rk = findKey(right);
            let lk = findKey(left);
            let middleK = findKey(i);
            
            let r = Math.abs(rk[0] - middleK[0]) + Math.abs(rk[1] - middleK[1]);
            let l = Math.abs(lk[0] - middleK[0]) + Math.abs(lk[1] - middleK[1]);
            if(r === l){
                hand === 'right' ? (right=i, answer+="R") : (left=i, answer+="L");
            }else if(r>l){
                answer += "L";
                left = i;
            }else{
                answer += "R";
                right = i;
            }
        }
    }
    return answer;
}