function solution(name, yearning, photo) {
    let answer = [];
    let personYearning = {};
    
    for(let i=0; i<name.length; i++){
        personYearning[name[i]] = yearning[i];
    }
    
    for(let i=0; i<photo.length; i++){
        let point = 0;
        for(let j=0; j<photo[i].length; j++){
            point += personYearning[photo[i][j]] || 0;
        }
        answer.push(point);
    }
    return answer
}