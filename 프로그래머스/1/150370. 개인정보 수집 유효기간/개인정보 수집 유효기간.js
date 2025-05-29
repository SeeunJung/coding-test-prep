function solution(today, terms, privacies) {
    let answer = [];
    let t = {};
    let [year, month, date] = today.split(".").map(Number);
    let todayDate = year * 12 * 28 + month * 28 + date;
    
    terms.forEach((term) => {
        let [type, contract] = term.split(" ");
        t[type] = Number(contract);
    });
    
    privacies.forEach((privacy, index) => {
        let [day, term] = privacy.split(" ");
        let [y, m, d] = day.split(".").map(Number);
        let termDate = y*12*28 + m*28 + d + t[term] * 28;
        
        if(termDate <= todayDate)
            answer.push(index+1);
    })
    
    return answer;
}