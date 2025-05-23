function commands(x, y, dir){
    switch(dir){
        case "U":
            return [x, y+1];
        case "D":
            return [x, y-1];
        case "R":
            return [x+1, y];
        case "L":
            return [x-1, y];
        default:
            break;
    }
}

function isValid(nx, ny){
    return nx>=-5 && nx<=5 && ny>=-5 && ny<=5;
}

function solution(dirs) {
    let x=0;
    let y=0;
    
    const visited = new Set();
    for(const dir of dirs){
        const [nx, ny] = commands(x, y, dir);
        if(!isValid(nx, ny))
            continue;
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        [x, y] = [nx, ny];
    }
    return visited.size/2;
}