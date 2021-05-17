const handleHtmlFileRead = (err, data, res, templateData) => {
    if (err) {
        console.log(err);
        res.writeHead(404, '404 not found');
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (templateData && templateData.breeds) {
        const catBreedOptions = templateData.breeds.map(x => `<option value="${x}">${x}</option>`);
        const modifiedData = data.toString().replace('{{catBreeds}}', catBreedOptions);
        res.write(modifiedData);
    } else {
        res.write(data);
    }
    res.end();
};

module.exports = {
    handleHtmlFileRead
}