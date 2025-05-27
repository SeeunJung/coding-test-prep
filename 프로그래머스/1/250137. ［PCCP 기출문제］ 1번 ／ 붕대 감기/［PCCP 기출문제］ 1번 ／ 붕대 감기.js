function solution(bandage, health, attacks) {
    const [skillTime, heal, extraHeal] = bandage;
    
    let remainHP = health;
    let prevAttackTime = 0;
    
    for(const [index, attack] of attacks.entries()){
        const [time, damage] = attack;
        
        if(index !== 0){
            const bandageTime = time - prevAttackTime - 1;
            const addExtraHeal = parseInt(bandageTime/skillTime);
            remainHP += (addExtraHeal * extraHeal) + (bandageTime * heal);
            if(remainHP > health)
                remainHP = health;
        }
        
        remainHP -= damage;
        if(remainHP < 0)
            break;
        prevAttackTime = time;
    }
    return remainHP > 0 ? remainHP : -1;
}