function solution(phone_book) {
    let hashMap = {}
    
    for(const v of phone_book){
        hashMap[v] = true
    }
    
    for(const n of phone_book){
        for(let i=1; i < n.length; i++){
            const prefix = n.substring(0,i)
            if(hashMap[prefix]) return false
        }
    }
    return true
}