function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progress, i) => Math.ceil((100-progresses[i])/speeds[i]));
    
    while(days.length>0){
        let firstDay = days.shift();
        let count = 1;
        
        while(days.length>0 && days[0]<=firstDay){
            days.shift();
            count++;
        }
        answer.push(count);
    }
    return answer;
}