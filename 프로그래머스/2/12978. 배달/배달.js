function solution(N, road, K) {
    const adjList = Array.from({length: N+1}, () => []);
    for(let [a, b, c] of road){
        adjList[a].push([b, c]);
        adjList[b].push([a, c])
    }
    const dist = Array(N+1).fill(Infinity);
    dist[1] = 0;
    
    const queue = [[1, 0]];
    
    while(queue.length > 0){
        const [cur, time] = queue.shift();
        for(let [next, cost] of adjList[cur]){
            const nextTime = time + cost;
            if(nextTime < dist[next]){
                dist[next] = nextTime;
                queue.push([next, nextTime]);
            }
        }
    }
    return dist.filter(time => time <= K).length;
}