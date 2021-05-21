const uuid = require('uuid');

class Cube {
    constructor(name, description, imageURL, difficultyLevel) {
        this.id = uuid.v4();
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
        this.difficultyLevel = difficultyLevel;
    }
}

module.exports = Cube;