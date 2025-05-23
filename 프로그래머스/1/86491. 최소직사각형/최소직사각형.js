function solution(sizes) {
    let height = [];
    let width = [];
    
    for(let i=0; i<sizes.length; i++){
        let max = Math.max(sizes[i][0], sizes[i][1]);
        let min = Math.min(sizes[i][0], sizes[i][1]);
        height.push(max);
        width.push(min);
    }
    
    return Math.max(...height) * Math.max(...width);
}