function solution(s, skip, index) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(al => !skip.includes(al));
    
    return s.split("").map((a) => alphabet[(alphabet.indexOf(a)+index)%alphabet.length]).join("");
}