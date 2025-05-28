function solution(X, Y) {
    let answer = "";
    let x = X.split("");
    let y = Y.split("");
    
    for(let i=0; i<10; i++){
        let xCount = x.filter(xi => Number(xi) === i).length;
        let yCount = y.filter(yi => Number(yi) === i).length;
        answer += i.toString().repeat(Math.min(xCount, yCount));
    }
    if(answer === "")
        return "-1";
    if(Number(answer) === 0)
        return "0";
    return answer.split("").sort((a, b) => Number(b)-Number(a)).join("");
}