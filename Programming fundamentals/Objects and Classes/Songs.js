function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let n = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < n; i++) {
        let [type, name, time] = input[i].split(`_`);
        songs.push(new Song(type, name, time));
    }
    if (typeSong === `all`) {
        songs.forEach((song) => console.log(song.name));
    } else {
        let filtered = songs.filter((song) => song.typeList === typeSong);
        filtered.forEach((song) => console.log(song.name));
    }
}

solve(
    [3,
        'favorite_DownTown_3:14',
        'favorite_Kiss_4:16',
        'favorite_Smooth Criminal_4:01',
        'favorite']
)