function attachEvents() {
    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const postsSelect = document.querySelector('#posts');
    const postTitleH1 = document.querySelector('#post-title');
    const commentsUl = document.querySelector('#post-comments');
    const commentsH2 = document.querySelector('h2');
    const body = document.querySelector('body');
    let url = 'http://localhost:3030/jsonstore/blog/posts';

    loadBtn.addEventListener('click', () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                postsSelect.innerHTML = '';
                Object.keys(data).forEach(key => {
                    const option = document.createElement('option');
                    option.setAttribute('value', key);
                    option.setAttribute('id', data[key].id);
                    option.textContent = data[key].title;
                    postsSelect.appendChild(option);
                });
            })
            .catch(err => console.log(err));
    });

    viewBtn.addEventListener('click', () => {
        const selected = Array.from(postsSelect.querySelectorAll('option')).find(x => x.selected);
        commentsUl.innerHTML = '';

        const postPromise = fetch(url + `/${selected.value}`)
            .then(res => res.json());

        const commentsPromise = fetch(`http://localhost:3030/jsonstore/blog/comments`)
            .then(res => res.json());
            
        Promise.all([postPromise, commentsPromise])
            .then(([postData, commentsData]) => {
                postTitleH1.textContent = postData.title;
                document.querySelector('#post-body').remove();
                const postBodyElement = document.createElement('p');
                postBodyElement.id = 'post-body';
                postBodyElement.textContent = postData.body;
                body.insertBefore(postBodyElement, commentsH2);

                Object.keys(commentsData).forEach(key => {
                    if (commentsData[key].postId === postData.id) {
                        const li = document.createElement('li');
                        li.id = commentsData[key].id;
                        li.textContent = commentsData[key].text;
                        commentsUl.appendChild(li);
                    }
                });
            })
            .catch(err => console.log(err));
    });
}

attachEvents();