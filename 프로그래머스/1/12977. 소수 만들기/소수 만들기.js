function isPrime(number){
    for(let i=2; i*i<=number; i++){
        if(number%i===0)
            return false
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                if(isPrime(nums[i]+nums[j]+nums[k]))
                    answer++;
            }
        }
    }
    return answer;
}