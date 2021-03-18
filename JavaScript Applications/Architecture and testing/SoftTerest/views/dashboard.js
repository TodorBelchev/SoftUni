import { getIdeas } from '../data/api.js';
import { handleNavigation } from '../controllers/navigation.js';

export const dashboardView = async () => {
    const ideas = await getIdeas();
    const div = document.createElement('div');
    div.id = 'dashboard-holder';
    if (!ideas) {
        div.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
        return div;
    }
    ideas.map(createCard).forEach(c => div.appendChild(c));

    return div;
};

function createCard(idea) {
    const div = document.createElement('div');
    div.className = 'card overflow-hidden current-card details';
    div.style = 'width: 20rem; height: 18rem;';
    div.innerHTML = `
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">`;
    const aBtn = document.createElement('a');
    aBtn.className = 'btn';
    aBtn.href = '/details/' + idea._id;
    aBtn.textContent = 'Details';
    aBtn.addEventListener('click', handleNavigation);
    div.appendChild(aBtn);

    return div
}