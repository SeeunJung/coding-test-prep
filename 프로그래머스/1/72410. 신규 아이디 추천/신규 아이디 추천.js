function solution(new_id) {
    const level1 = new_id.toLowerCase();
    const level2 = level1.match(/[a-z0-9-_.]/g).join("");
    const level3 = level2.replace(/\.+/g, ".");
    const level4 = level3.replace(/^\.|\.$/g, "");
    const level5 = level4 === "" ? "a" : level4;
    let level6 = level5;
    if(level5.length>=16)
        level6 = level5.slice(0, 15).replace(/\.$/g, "");
    
    if(level6.length<=2){
        const addition = [...level5].pop().repeat(3-level5.length);
        level6 += addition;
    }
    
    return level6;
}