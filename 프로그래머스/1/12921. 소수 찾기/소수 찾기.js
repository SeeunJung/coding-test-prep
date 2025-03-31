function solution(n) {
    var answer = 0;
    const isPrime = new Array(n+1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for(let i=2; i<=Math.ceil(Math.sqrt(n)); i++){
        if(!isPrime)
            continue;
        
        for(let j = i*2; j<=n; j+=i){
            isPrime[j] = false;
        }
    }
    const result = [];
    for(let i=1; i<=n; i++){
        if(isPrime[i])
            result.push(i);
    }
    
    return result.length;
}