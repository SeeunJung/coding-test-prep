function solution(nums) {
    let answer = 0;
    let pkm = new Set(nums);
    let max = nums.length/2;
    if(max < pkm.size){
        return max;
    }
    else
        return pkm.size;
}