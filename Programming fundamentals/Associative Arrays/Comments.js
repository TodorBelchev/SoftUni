function solve(input) {
    const comments = {};
    const users = [];
    const articles = [];

    for (const line of input) {

        if (line.includes('user')) {
            const [a, user] = line.split(' ');
            users.push(user);
        }

        if (line.includes('article')) {
            const article = line.split(' ')[1];
            articles.push(article);
        }

        if (line.includes('posts')) {
            const [user, article] = line.split(' posts on ');
            const [articleName, comment] = article.split(': ');
            const [commentTitle, commentContent] = comment.split(', ');

            if (users.includes(user) && articles.includes(articleName)) {
                if (!comments.hasOwnProperty(articleName)) {
                    comments[articleName] = [];
                }
                comments[articleName].push({ user, commentTitle, commentContent });
            }
        }
    }

    Object.keys(comments)
        .sort((a, b) => comments[b].length - comments[a].length)
        .forEach(x => {
            console.log(`Comments on ${x}`);
            comments[x].sort((a, b) => a.user.localeCompare(b.user))
                .forEach(c => console.log(`--- From user ${c.user}: ${c.commentTitle} - ${c.commentContent}`))
        });
}

solve(
    [
        'user aUser123',
        'someUser posts on someArticle: NoTitle, stupidComment',
        'article Books',
        'article Movies',
        'article Shopping',
        'user someUser',
        'user uSeR4',
        'user lastUser',
        'uSeR4 posts on Books: I like books, I do really like them',
        'uSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Shopping: title, I go shopping every day',
        'someUser posts on Movies: Like, I also like movies very much'
    ]
)