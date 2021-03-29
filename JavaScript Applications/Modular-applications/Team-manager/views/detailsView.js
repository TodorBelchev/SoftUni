import { html } from '../node_modules/lit-html/lit-html.js';
import { approve, joinTeam, decline } from '../controllers/team.js';
import { footerView } from './footerView.js';
import { navigationView } from './navigationView.js';

export const detailsView = (ctx) => {
    const isGuest = ctx.userData === null;
    let isMember;
    let isPending;
    if (!isGuest) {
        isMember = ctx.members.find(x => x._ownerId === ctx.userData.id);
        isPending = ctx.requests.find(x => x._ownerId === ctx.userData.id);
    }
    return html`
    ${navigationView(ctx)}
    <main>
    <section id="team-home">
        <article class="layout">
            <img src=${ctx.team.logoUrl} class="team-logo left-col">
            <div class="tm-preview">
                <h2>${ctx.team.name}</h2>
                <p>${ctx.team.description}</p>
                <span class="details">${ctx.members ? ctx.members.length : 0} Members</span>
                ${isGuest ? '' : html`
                    <div>
                        ${ctx.team._ownerId === ctx.userData.id ? 
                            html`<a href="/edit/${ctx.team._id}" class="action">Edit team</a>` :
                            isMember ? 
                                html`<a href="#" class="action invert">Leave team</a>` :
                                !isPending ? html`<a href="/join/${ctx.team._id}" class="action" @click=${(e) => { joinTeam(e, ctx) }}>Join team</a>` : ''}
                        ${isPending ? html`Membership pending. <a href="/remove/${isPending._id}" @click=${(e) => {decline(e, ctx, isPending._id)}}>Cancel request</a>` : ''}
                    </div>`}
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${ctx.members.length > 0 ? ctx.members.map(x => membersView(x, ctx)) : ''}
                </ul>
            </div>
            ${isGuest ? '' : html`
                <div class="pad-large">
                    ${ctx.userData.id === ctx.team._ownerId ? html`
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            ${ctx.requests.length > 0 ? ctx.requests.map((x) =>requestsView(x, ctx)): ''}
                        </ul>` : ''}
                </div>`}   
        </article>
    </section>
    </main>
    ${footerView()}`;
}

const membersView = (member, ctx) => {
    const current = member.user.find(x => x._id === member._ownerId);
    if (ctx.userData === null) {
        return html`<li>${current.username || current.email}</li>`
    }
    return html`<li>${current.username || current.email}${(ctx.team._ownerId === ctx.userData.id) && current.username !== ctx.userData.username ? html`<a class="tm-control action" href="/remove/${current._id}"  @click=${(e) => {decline(e, ctx)}}>Remove from team</a>`: ''}</li>`
}

const requestsView = (req, ctx) => {
    const currentUser = req.user.find(x => x._id === req._ownerId);
    return html`
    <li>${currentUser.username || currentUser.email}
        <a href="/approve/${req._id}" class="tm-control action" @click=${(e) => {approve(e, req._id, ctx)}}>Approve</a>
        <a href="/decline/${req._id}" class="tm-control action" @click=${(e) => {decline(e, ctx, req._id)}}>Decline</a>
    </li>`;
}