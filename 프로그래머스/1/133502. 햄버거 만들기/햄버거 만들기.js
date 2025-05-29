function solution(ingredient) {
    let count = 0;
    let stack = [];
    
    ingredient.forEach(part =>{
        stack.push(part);
        
        if(stack.slice(-4).join("") === "1231"){
            stack.splice(-4);
            count++;
        }
    })
    return count;
}