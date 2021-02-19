function getArticleGenerator(articles) {
    const contentElement = document.querySelector('#content');
    function showNext() {
        if (articles.length > 0) {
            const current = articles.shift();
            const articleElement = document.createElement('article');
            articleElement.textContent = current;
            contentElement.appendChild(articleElement);
        }
    }

    return showNext;
}