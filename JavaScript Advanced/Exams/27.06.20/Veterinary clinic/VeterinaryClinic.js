class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.capacity === this.currentWorkload) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let currentClient = this.clients.find(x => x.ownerName === ownerName);

        if (currentClient) {
            const currentPet = currentClient.pets.find(x => x.petName === petName);
            if (currentPet && currentPet.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
            }
        }

        if (!currentClient) {
            currentClient = { ownerName, pets: [] };
            this.clients.push(currentClient);
        }

        currentClient.pets.push({ petName, kind, procedures });
        this.currentWorkload++;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        const currentClient = this.clients.find(x => x.ownerName === ownerName);

        if (!currentClient) {
            throw new Error('Sorry, there is no such client!');
        }

        const currentPet = currentClient.pets.find(x => x.petName === petName);
        if (!currentPet) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        if (currentPet.procedures.length < 1) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        currentPet.procedures.forEach(x => this.totalProfit += 500);
        currentPet.procedures = [];
        this.currentWorkload--;
        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        const output = [];
        const percent = Math.floor((this.currentWorkload / this.capacity) * 100);
        output.push(`${this.clinicName} is ${percent}% busy today!`);
        output.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);
        this.clients
            .sort((a, b) => a.ownerName.localeCompare(b.ownerName))
            .forEach(x => {
                output.push(`${x.ownerName} with:`);
                x.pets
                    .sort((a, b) => a.petName.localeCompare(b.petName))
                    .forEach(p => output.push(`---${p.petName} - a ${p.kind.toLowerCase()} that needs: ${p.procedures.join(', ')}`));
            });

        return output.join('\n');
    }
}
