//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending){
    return str.slice(-1*ending.length) == ending || ending == '';
}