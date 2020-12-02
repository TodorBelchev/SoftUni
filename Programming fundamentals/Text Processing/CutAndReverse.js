function solve(input) {
    const firstHalf = input.substring(0, input.length / 2).split('').reverse();
    const secondHalf = input.substring(input.length / 2).split('').reverse();
    console.log(firstHalf.join(''));
    console.log(secondHalf.join(''));
}

solve(
    'sihToDtnaCuoYteBIboJsihTtAdooGoSmI'
)