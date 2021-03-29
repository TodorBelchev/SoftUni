import { html } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footerView.js';
import { navigationView } from './navigationView.js';
import { teamCard } from './teamCardView.js';

export const myTeamsView = (ctx) => html`
    ${navigationView(ctx)}
    <main>
        <section id="my-teams">
    
            <article class="pad-med">
                <h1>My Teams</h1>
            </article>
    
            ${ctx.myTeams.length > 0 ? memberView(ctx) : notMemberView()}
    
        </section>
    </main>
    ${footerView()}`;

const notMemberView = () => html`
    <article class="layout narrow">
        <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/teams">Browse all teams</a> to join one, or use the button bellow to cerate your own team.</p>
        </div>
        <div class=""><a href="/create" class="action cta">Create Team</a></div>
    </article>`;

const memberView = (ctx) => html`
    <article class="layout narrow">
        <div class="pad-med">
            <div class=""><a href="/create" class="action cta">Create Team</a></div>
        </div>
    </article>
    ${ctx.myTeams.map(teamCardTemplate)}`;

const teamCardTemplate = (x) => html`
    <article class="layout">
        <img src=${x.team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${x.team.name}</h2>
            <p>${x.team.description}</p>
            <span class="details">${x.team.membersCount} Members</span>
            <div><a href="/details/${x.team._id}" class="action">See details</a></div>
        </div>
    </article>`;