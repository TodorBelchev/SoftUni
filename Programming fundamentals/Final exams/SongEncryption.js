function solve(input) {

    function encrypt(string, key) {
        let encrypted = '';
        for (const char of string) {
            if (char !== ' ' && char !== '\'') {
                let code = char.charCodeAt() + key;
                if (char === char.toUpperCase() && code > 90) {
                    code -= 26;
                } else if (char === char.toLowerCase() && code > 122) {
                    code -= 26;
                }
                encrypted += String.fromCharCode(code);
            } else {
                encrypted += char;
            }
        }
        return encrypted;
    }
    for (const line of input) {
        if (line === 'end') { break }
        const match = line.match(/^(?<artist>[A-Z]{1}[a-z\'\ ]+):(?<song>[A-Z\ ]+)$/);
        if (match) {
            const artist = match.groups.artist;
            const song = match.groups.song;
            const key = artist.length;
            let encryptedArtist = encrypt(artist, key);
            let encryptedSong = encrypt(song, key);
            const encrypted = encryptedArtist + '@' + encryptedSong;
            console.log(`Successful encryption: ${encrypted}`);
        } else {
            console.log('Invalid input!');
        }
    }
}

solve(
    [
        'Eminem:VENOM',
        'Linkin park:NUMB',
        'Drake:NONSTOP',
        'Adele:HELLO',
        'end',
    ]
)

solve(
    [
        'Michael Jackson:ANOTHER PART OF ME',
        'Adele:ONE AND ONLY',
        'Guns n\'roses: NOVEMBER RAIN',
        'Christina Aguilera: HuRt',
        'end',
    ]
)