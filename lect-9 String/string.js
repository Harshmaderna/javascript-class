// Given a string, find the length of the longest substring without repeating characters.
// Input: "abcabcbb" → Output: "abc"

// let str = "abcabcbb"

// for(let i = 0; i<str.length; i++){
//     for(let j = i; j<)
// }


// Given two strings, determine if one is an anagram of the other.
// Input: s = "anagram", t = "nagaram" → Output: trueGiven two strings, determine if one is an anagram of the other.
// Input: s = "anagram", t = "nagaram" → Output: true

let s1 = "anagram"
let s2 = "nagaram"
function isAnagram(){
    if(s1.length !== s2.length){
        return false
    }
    return s1.sort() === s2.sort();
}

