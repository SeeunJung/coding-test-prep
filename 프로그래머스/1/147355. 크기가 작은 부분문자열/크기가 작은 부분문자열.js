function solution(t, p) {
    let count = 0;
    const numP = Number(p);
    
    for(let i = 0; i<t.length-p.length+1; i++){
        let sliced = t.slice(i, i+p.length);
        const numT = Number(sliced);
        if(numT<=numP)
            count++;
    }
    return count;
}