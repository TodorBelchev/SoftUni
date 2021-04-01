import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyMemes } from '../data/requests.js';
import { navBar } from './navbar.js';

export const profilePage = async (ctx) => {
    const memes = await getMyMemes(ctx.userData.id);
    ctx.render(profileTemplate(ctx, memes));
};

const profileTemplate = (ctx, memes) => html`
${navBar(ctx)}
<main>
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/${ctx.userData.gender}.png">
            <div class="user-content">
                <p>Username: ${ctx.userData.username}</p>
                <p>Email: ${ctx.userData.email}</p>
                <p>My memes count: ${memes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">

            ${memes.length > 0 ? 
                memes.map(memeTemplate) : 
                html`<p class="no-memes">No memes in database.</p>`}

        </div>
    </section>
</main>`;

const memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;
