class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same article twice!`);
        }

        if (this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this article!`);
        }

        const index = this._likes.indexOf(username);
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        const currentComment = this._comments.find(x => x.Id === id);

        if (!currentComment || id === undefined) {
            if (this._comments[this._comments.length - 1]) {
                id = this._comments[this._comments.length - 1].Id + 1;
            } else {
                id = 1;
            }
            this._comments.push({ Id: id, Username: username, Content: content, Replies: [] });
            return `${username} commented on ${this.title}`
        }

        if (currentComment) {
            const currentReplies = currentComment.Replies;
            const replyID = `${id}.${currentReplies.length + 1}`
            currentReplies.push({ Id: replyID, Username: username, Content: content })
            return `You replied successfully`;
        }

    }

    toString(sortingType) {
        const sortObj = {
            asc: (a, b) => a.Id - b.Id,
            desc: (a, b) => b.Id - a.Id,
            username: (a, b) => a.Username.localeCompare(b.Username)
        }

        let output = [];
        output.push(`Title: ${this.title}`);
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this._likes.length}`);
        output.push('Comments:');
        this._comments.sort((a, b) => sortObj[sortingType](a, b)).forEach(x => {
            output.push(`-- ${x.Id}. ${x.Username}: ${x.Content}`);
            if (x.Replies.length > 0) {
                x.Replies
                    .sort((a, b) => sortObj[sortingType](a, b))
                    .forEach(r => output.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`))
            }
        });

        return output.join('\n');
    }
}
