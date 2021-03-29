import { acceptTeamReq, createTeam, declineTeamReq, editTeamReq, getTeamMembers } from '../data/requests.js';
import { redirect } from './redirect.js';
import { joinTeamReq } from '../data/requests.js';

export const create = async (e, ctx) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('name');
    const logoUrl = formData.get('logoUrl');
    const description = formData.get('description');
    const errorDiv = document.querySelector('.error');

    if (name.trim().length < 4) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Name must be at least 4 characters long!';
        return;
    }

    if (logoUrl.trim() === '') {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Logo URL is required!';
        return;
    }

    if (description.trim().length < 10) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Description must be at least 10 characters long!';
        return;
    }

    const response = await createTeam({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': ctx.userData.token
        },
        body: JSON.stringify({ name, logoUrl, description })
    });
    
    const joinRes = await joinTeamReq({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': ctx.userData.token
        },
        body: JSON.stringify({ teamId: response._id })
    });

    await acceptTeamReq(joinRes._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': ctx.userData.token
        },
        body: JSON.stringify({ status: 'member' })
    });

    redirect('/');
};

export const joinTeam = async (e, ctx) => {
    e.preventDefault();

    const response = await joinTeamReq({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': ctx.userData.token
        },
        body: JSON.stringify({ teamId: ctx.team._id })
    });

    redirect('/details/' + ctx.team._id);
};

export const approve = async (e, id, ctx) => {
    e.preventDefault();
    const response = await acceptTeamReq(id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': ctx.userData.token
        },
        body: JSON.stringify({ status: 'member' })
    });

    redirect('/details/' + ctx.team._id);
}

export const decline = async (e, ctx, id) => {
    e.preventDefault();
    const ownerId = e.target.href.split('/').pop();
    if (!id) {
        const members = await getTeamMembers(ctx.team._id);
        const member = members.find(x => x._ownerId === ownerId);
        id = member._id;
    }
    const response = await declineTeamReq(id, {
        method: 'DELETE',
        headers: {
            'X-Authorization': ctx.userData.token
        }
    });

    redirect('/details/' + ctx.team._id);
}

export const editTeam = async (e, ctx) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get('name');
    const logoUrl = formData.get('logoUrl');
    const description = formData.get('description');
    const errorDiv = document.querySelector('.error');

    if (name.trim().length < 4) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Name must be at least 4 characters long!';
        return;
    }

    if (logoUrl.trim() === '') {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Logo URL is required!';
        return;
    }

    if (description.trim().length < 10) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Description must be at least 10 characters long!';
        return;
    }

    const response = await editTeamReq(ctx.team._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': ctx.userData.token
        },
        body: JSON.stringify({ name, logoUrl, description })
    });

    redirect('/details/' + ctx.team._id);

}