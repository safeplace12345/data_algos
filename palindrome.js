const expandFromCenter = (str, left, right) => {
    let i = 0
    while (str[left -i] && str[left -i] === str[right + i]) {
        i++
    }
    i--
    return str.slice(left - i , right + i + 1)
}
const palindrome = str => {
    if(str.length < 1) return ''

    let longest = ''
    for (let index = 0; index < str.length; index++) {
        const oddPalindrome = expandFromCenter(str, index, index);
        const evenPalindrome = expandFromCenter(str, index - 1, index);
        
        if(oddPalindrome.length > longest.length) {
            longest = oddPalindrome
        }
        if(evenPalindrome.length > longest.length) {
            longest = evenPalindrome
        }
    }
    return longest
}
console.log(palindrome("babad"))
console.log(palindrome("cbbd"))
// console.log(palindrome("ababacbab"))