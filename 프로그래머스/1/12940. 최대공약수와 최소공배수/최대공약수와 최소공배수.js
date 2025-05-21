function solution(n, m) {
    let answer = [];
    let a = Math.min(n, m);
    let b = Math.max(n, m);
    while(b%a !== 0){
        let result = b%a;
        b=a;
        a=result;
    }
    answer.push(a);
    answer.push((n*m)/a);
    return answer;
}