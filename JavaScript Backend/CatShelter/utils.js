const handleHtmlFileRead = (err, data, res) => {
    if (err) {
        console.log(err);
        res.writeHead(404, '404 not found');
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(data);
    res.end();
};

module.exports = {
    handleHtmlFileRead
}