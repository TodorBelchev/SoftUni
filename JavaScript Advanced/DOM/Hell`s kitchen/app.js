function solve() {
	const restaurantOutput = document.querySelector('#bestRestaurant p');
	const workersOutput = document.querySelector('#workers p');
	const btn = document.querySelector('#btnSend');
	btn.addEventListener('click', () => {
		const input = document.querySelector('#inputs textarea');
		let teams = JSON.parse(input.value);

		const teamsObj = {};

		teams.forEach(x => {
			const [name, employees] = x.split(' - ');
			let employeesArr = employees.split(', ');
			if (!teamsObj.hasOwnProperty(name)) {
				teamsObj[name] = { employees: [] };
			}
			teamsObj[name].employees = [...teamsObj[name].employees, ...employeesArr];
		});

		Object.entries(teamsObj).map(([key, value]) => {
			let employeesArr = value.employees.map(x => x.split(' '));
			let bestSalary = 0;
			const averageSalary = employeesArr.reduce((acc, curr) => {
				const currentSalary = Number(curr[1]);
				currentSalary > bestSalary ? bestSalary = currentSalary : '';
				return acc + currentSalary;
			}, 0) / employeesArr.length;
			employeesArr = employeesArr
				.sort((a, b) => b[1] - a[1])
				.map(x => `Name: ${x[0]} With Salary: ${x[1]}`);

			teamsObj[key].averageSalary = averageSalary;
			teamsObj[key].nameMessage = `Name: ${key} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
			teamsObj[key].teamMessage = `${employeesArr.join(' ')}`;
		});

		const bestTeam = Object.values(teamsObj).sort((a, b) => b.averageSalary - a.averageSalary)[0];

		restaurantOutput.textContent = bestTeam.nameMessage;
		workersOutput.textContent = bestTeam.teamMessage;
	});
}