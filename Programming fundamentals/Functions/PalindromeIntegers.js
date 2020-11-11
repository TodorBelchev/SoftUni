function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numAsString = arr[i].toString();
        let isPalindrome = true;
        for (let j = 0; j < numAsString.length / 2; j++) {
            if (numAsString[j] !== numAsString[numAsString.length - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
}