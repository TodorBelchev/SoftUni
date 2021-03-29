
async function requester(URL, options) {
    let response;
    try {
        response = await fetch(URL, options);

        if (response.status == 200) {
            return await response.json();
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (error) {

        if (error instanceof SyntaxError) {
            return response;
        } else if (error.message == 'Invalid access token') {
            console.log('Invalid session, resetting storage');
            sessionStorage.clear();
            window.location.pathname = '/';
        } else {
            throw error;
        }

    }
}

export const getMyCreatedTeams = async (id) => await requester(`http://localhost:3030/data/teams?where=_ownerId%3D%22${id}%22`);

export const getMyTeams = async (id) => await requester(`http://localhost:3030/data/members?where=_ownerId%3D%22${id}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);

export const getTeamDetails = async (id) => await requester('http://localhost:3030/data/teams/' + id);

export const getTeamMembers = async (id) => await requester(`http://localhost:3030/data/members?where=teamId%3D%22${id}%22%20AND%20status%3D%22member%22 &load=user%3DuserId%3Ausers`);

export const getTeamMembersCount = async (id) => await requester(`http://localhost:3030/data/members?where=teamId%3D%22${id}%22%20AND%20status%3D%22member%22&count`);

export const getPendingRequests = async (id) => await requester(`http://localhost:3030/data/members?where=teamId%3D%22${id}%22%20AND%20status%3D%22pending%22 &load=user%3DuserId%3Ausers`);

export const getOneTeamsPage = async (page = 1) => await requester(`http://localhost:3030/data/teams?offset=${(page - 1) * 3}&pageSize=3`);

export const getAllTeams = async () => await requester(`http://localhost:3030/data/teams`);

export const createTeam = async (options) => await requester('http://localhost:3030/data/teams', options);

export const editTeamReq = async (id, options) => await requester('http://localhost:3030/data/teams/' + id, options);

export const joinTeamReq = async (options) => await requester('http://localhost:3030/data/members', options);

export const acceptTeamReq = async (id, options) => await requester('http://localhost:3030/data/members/' + id, options);

export const declineTeamReq = async (id, options) => await requester('http://localhost:3030/data/members/' + id, options);

export const registerUser = async (options) => await requester('http://localhost:3030/users/register', options);

export const loginUser = async (options) => await requester('http://localhost:3030/users/login', options);

export const logoutUser = async (options) => await requester('http://localhost:3030/users/logout', options);
