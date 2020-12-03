function solve(input) {
    const start = Math.min(input[0].charCodeAt(), input[1].charCodeAt());
    const end = Math.max(input[0].charCodeAt(), input[1].charCodeAt());
    const text = input[2];
    let sum = 0;
    for (const  char of text) {
        const current = char.   charCodeAt();
         if (current > start && current < end) {
            sum += current;
        }
    }
    console.log(sum);
}

solve(
    [ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]
)