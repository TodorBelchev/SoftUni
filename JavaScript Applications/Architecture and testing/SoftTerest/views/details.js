import { getOneIdeaById } from '../data/api.js';
import { handleNavigation } from '../controllers/navigation.js';
import { getUserData } from '../data/userData.js';

export const detailsView = async (id) => {
    const userData = getUserData() || {};
    const idea = await getOneIdeaById(id);
    const div = document.createElement('div');
    div.className = 'container home some';
    div.innerHTML = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    <div class="text-center"></div>`;
    if (userData._id === idea._ownerId) {
        const a = document.createElement('a');
        a.className = 'btn detb';
        a.href = '/delete/' + id;
        a.textContent = 'Delete';
        a.addEventListener('click', handleNavigation);
        div.querySelector('.text-center').appendChild(a);
    }

    return div;
};