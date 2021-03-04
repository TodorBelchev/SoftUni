const tbody = document.getElementById('furnitureTable').querySelector('tbody');
const furnitureURL = 'http://localhost:3030/data/furniture';

async function loadFurniture() {
    try {
        const response = await fetch(furnitureURL);

        if(!response.ok) {
            throw new Error(`Error: ${response.status}(${response.statusText})`);
        }
        
        const data = await response.json();

        Object.values(data).forEach(x => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>
                <img src="${x.img}">
            </td>
            <td>
                <p>${x.name}</p>
            </td>
            <td>
                <p>${x.price}</p>
            </td>
            <td>
                <p>${x.decFactor}</p>
            </td>
            <td>
                <input type="checkbox"/>
            </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error(error);
    }
}

loadFurniture();