function solve(input) {
    const books = input.shift().split('&');

    for (const line of input) {

        if (line === 'Done') {
            break;
        }

        const tokens = line.split(' | ');
        const command = tokens[0];
        const bookName = tokens[1];

        switch (command) {
            case 'Add Book':

                if (!books.includes(bookName)) {
                    books.unshift(bookName);
                }

                break;
            case 'Take Book':

                if (books.includes(bookName)) {
                    const index = books.indexOf(bookName);
                    books.splice(index, 1);
                }

                break;
            case 'Swap Books':
                const firstBook = tokens[1];
                const secondBook = tokens[2];

                if (books.includes(firstBook) && books.includes(secondBook)) {
                    const firstIndex = books.indexOf(firstBook);
                    const secondIndex = books.indexOf(secondBook);
                    const temp = books[firstIndex];
                    books[firstIndex] = books[secondIndex];
                    books[secondIndex] = temp;
                }

                break;
            case 'Insert Book':
                books.push(bookName);
                break;
            case 'Check Book':
                const index = Number(tokens[1]);

                if (index >= 0 && index < books.length) {
                    console.log(books[index]);
                }
                
                break;
        }
    }
    console.log(books.join(', '));
}

solve(
    [
        'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
        'Add Book | David Copperfield',
        'Add Book | One Thousand and One Nights',
        'Swap Books | One Thousand and One Nights | Catch-22',
        'Take Book | David Copperfield',
        'Insert Book | The Stories of Anton Chekhov',
        'Check Book | 17',
        'Done',
        ''
    ]
)