const ordersBtn = document.getElementById('ordersBtn');
const boughtSpan = document.getElementById('bought');
const totalPriceSpan = document.getElementById('totalPrice');
const ownerID = JSON.parse(sessionStorage.getItem('userData'))._id;

ordersBtn.addEventListener('click', loadOrders);

async function loadOrders() {
    const bought = [];
    let totalPrice = 0;
    const response = await fetch(ordersURL + `?where=_ownerId%3D"${ownerID}"`);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error: ${error.code}: ${error.message}`)
    }

    const data = await response.json();

    data.forEach(o => {
        const orderData = Object.values(o)[0];
        bought.push(orderData.name);
        totalPrice += orderData.price;
    });

    boughtSpan.textContent = bought.join(', ');
    totalPriceSpan.textContent = totalPrice + ' $';
}