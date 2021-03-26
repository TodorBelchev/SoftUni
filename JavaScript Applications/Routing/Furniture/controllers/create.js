import { createFurniture } from '../data/requests.js';
import { notificationHandler } from './notifications.js';
import { redirect } from './redirect.js';

export const create = async (e, ctx) => {
    e.preventDefault();

    const [makeInput,
        modelInput,
        yearInput,
        descriptionInput,
        priceInput,
        imageInput,
        materialInput] = e.target.querySelectorAll('input');

    if (makeInput.value.trim().length < 4) {
        makeInput.classList.add('is-invalid');
        return alert('Make must be at least 4 characters!');
    } else {
        makeInput.classList.remove('is-invalid');
        makeInput.classList.add('is-valid');
    }

    if (modelInput.value.trim().length < 4) {
        modelInput.classList.add('is-invalid');
        return alert('Model must be at least 4 characters!');
    } else {
        modelInput.classList.remove('is-invalid');
        modelInput.classList.add('is-valid');
    }

    if (Number(yearInput.value) < 1950 || Number(yearInput.value) > 2050 || yearInput.value.trim() === '') {
        yearInput.classList.add('is-invalid');
        return alert('Year must be between 1950 and 2050!');
    } else {
        yearInput.classList.remove('is-invalid');
        yearInput.classList.add('is-valid');
    }

    if (descriptionInput.value.trim().length < 10) {
        descriptionInput.classList.add('is-invalid');
        return alert('Description must be at least 10 characters!');
    } else {
        descriptionInput.classList.remove('is-invalid');
        descriptionInput.classList.add('is-valid');
    }

    if (Number(priceInput.value) < 0 || priceInput.value.trim() === '') {
        priceInput.classList.add('is-invalid');
        return alert('Price must be positive number!');
    } else {
        priceInput.classList.remove('is-invalid');
        priceInput.classList.add('is-valid');
    }

    if (imageInput.value.trim() === '') {
        imageInput.classList.add('is-invalid');
        return alert('Image is required!');
    } else {
        imageInput.classList.remove('is-invalid');
        imageInput.classList.add('is-valid');
    }

    const newFurniture = {
        make: makeInput.value.trim(),
        model: modelInput.value.trim(),
        year: Number(yearInput.value),
        description: descriptionInput.value.trim(),
        price: Number(priceInput.value),
        img: imageInput.value.trim()
    }

    if (materialInput.value.trim() !== '') {
        newFurniture.material = materialInput.value.trim();
    }

    try {
        const response = await createFurniture({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': ctx.userData.token
            },
            body: JSON.stringify(newFurniture)
        });

        notificationHandler('Successfully created!', 'success');
        redirect('/');
    } catch (error) { return; }
};
