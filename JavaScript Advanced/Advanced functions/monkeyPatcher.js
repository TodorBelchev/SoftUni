solution = (() => {
    const commands = {
        upvote: (post) => post.upvotes++,
        downvote: (post) => post.downvotes++,
        score: (post) => {
            let upvotes = post.upvotes;
            let downvotes = post.downvotes;
            let total = upvotes + downvotes;
            let balance = upvotes - downvotes;

            let rating = getRating(upvotes, downvotes, total, balance);

            function getRating(upvotes, downvotes, total, balance) {
                if (total < 10) {
                    return 'new';
                }
                if ((upvotes / total) > 0.66) {
                    return 'hot';
                }
                if ((downvotes / total <= 0.66) && balance >= 0 && (upvotes > 100 || downvotes > 100)) {
                    return 'controversial';
                }
                if (balance < 0 && total >= 10) {
                    return 'unpopular';
                }
                return 'new';
            }

            if (total > 50) {
                let obfuscated = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
                upvotes = post.upvotes + obfuscated;
                downvotes = post.downvotes + obfuscated;
            }

            return [upvotes, downvotes, balance, rating];
        }
    }
    return { call: (post, command) => commands[command](post) }
})();