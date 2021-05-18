const path = require('path');
const fs = require('fs');

const handleHtmlFileRead = (err, data, res, templateData) => {
    if (err) {
        console.log(err);
        res.writeHead(404, '404 not found');
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (templateData && templateData.breeds) {
        const catBreedOptions = templateData.breeds.map(x => `<option value="${x}">${x}</option>`).join('');
        const modifiedData = data.toString().replace('{{catBreeds}}', catBreedOptions);
        res.write(modifiedData);
    } else if (templateData && templateData.cats) {
        const catsTemplate = templateData.cats
            .map(x => `
                <li>
                    <img src="${path.join('./content/images/') + x.image}" alt="${x.name} cat">
                    <h3>${x.name}</h3>
                    <p><span>Breed: </span>${x.breed}</p>
                    <p><span>Description: </span>${x.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/cats-edit/${x.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/cats-find-new-home/${x.id}">New Home</a></li>
                    </ul>
                </li>`)
            .join('');
        const modifiedData = data.toString().replace('{{cats}}', catsTemplate);
        res.write(modifiedData);
    } else if (templateData && templateData.cat) {
        const catTemplate = `
        <label for="name">Name</label>
        <input type="text" id="name" value="${templateData.cat.name}">
        <label for="description">Description</label>
        <textarea id="description">${templateData.cat.description}</textarea>
        <label for="image">Image</label>
        <input type="file" id="image">
        <label for="group">Breed</label>
        <select id="group">
            ${templateData.cat.breeds.map(x => `<option value="${x}" ${templateData.cat.breed === x ? 'selected' : ''}>${x}</option>`).join('')}
        </select>`;
        const modifiedData = data.toString().replace('{{cat}}', catTemplate);
        res.write(modifiedData);
    } else {
        res.write(data);
    }
    res.end();
};

function readFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
}

module.exports = {
    handleHtmlFileRead,
    readFromFile
}