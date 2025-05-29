function solution(schedules, timelogs, startday) {
    let count = 0;
    
    schedules.forEach((schedule, index) => {
        const time = Math.floor(schedule/100) * 60 + schedule%100 + 10;
        let flag = true;
        
        for(let j=0; j<7; j++){
            let curDay = (startday+j)%7;
            const curTime = Math.floor(timelogs[index][j]/100) * 60 + timelogs[index][j]%100;
            if(curDay === 0 || curDay === 6)
                continue;
            if(curTime > time){
                flag = false;
                break;
            }
        }
        if(flag)
            count++;
    })
    return count;
}