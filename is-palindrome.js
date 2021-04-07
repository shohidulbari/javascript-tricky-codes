function isPalindrome(str){
    let start = 0;
    let end = str.length - 1;

    while(start < end){
        if(str[start] === str[end]){
            start++;
            end--;
        }else{
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("abaaba"));
console.log(isPalindrome("a"));
console.log(isPalindrome("bb"));
console.log(isPalindrome("abc"));