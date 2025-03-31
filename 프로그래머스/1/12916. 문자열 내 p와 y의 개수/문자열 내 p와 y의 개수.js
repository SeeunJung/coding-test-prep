function solution(s){
    var answer = true;
    let checkP = s.toLowerCase().split("p");
    let checkY = s.toLowerCase().split("y");

    return (checkP.length===checkY.length ? true : false);
}