function solve(n) {
    let color = `black`
    console.log(`<div class="chessboard">`);
    for (let i = 0; i < n; i++) {
        console.log(`   <div>`);
        for (let j = 0; j < n; j++) {
            console.log(`        <span class="${color}"></span>`);
            color = color === `black` ? `white` : `black`;
        }
        console.log(`   </div>`);
        if (n % 2 === 0) {
            color = color === 'black' ? 'white' : 'black';
        }
    }
    console.log(`</div>`);
}