function solve(band, album, song) {
    let rotations = Math.ceil((album.length * band.length * song.length / 2) / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}