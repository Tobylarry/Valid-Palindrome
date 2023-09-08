/**  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    return (s === helper(s) ) ? true : false;

// Helper method
    function helper(s){
        let rev = '';
        for(let i = s.length - 1; i >= 0; i--){
            rev += s[i];
        }
        return rev;
    }
};

//two pointer
var isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}
