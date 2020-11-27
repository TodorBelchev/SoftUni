function solve(input) {
    const courses = {};

    for (const line of input) {

        if (line.includes(': ')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!courses.hasOwnProperty(course)) {
                courses[course] = {
                    capacity: 0,
                    students: []
                };
            }

            courses[course].capacity += capacity;
        }

        if (line.includes('joins')) {
            const [user, rest] = line.split(' with email ');
            const [email, course] = rest.split(' joins ');
            const match = /(?<user>\w+)\[(?<credits>\d+)]/g.exec(user);
            const userName = match[1];
            const credits = match[2];

            if (courses.hasOwnProperty(course)) {
                if (courses[course].capacity > 0) {
                    courses[course].students.push({ userName, credits, email })
                    courses[course].capacity--;
                }
            }
        }
    }

    Object.entries(courses).sort((a, b) => b[1].students.length - a[1].students.length)
        .forEach(x => {
            console.log(`${x[0]}: ${x[1].capacity} places left`);
            x[1].students.sort((a, b) => b.credits - a.credits)
                .forEach(s => console.log(`--- ${s.credits}: ${s.userName}, ${s.email}`))
        })
}

solve(
    [
        'JavaBasics: 2',
        'user1[25] with email user1@user.com joins C#Basics',
        'C#Advanced: 3',
        'JSCore: 4',
        'user2[30] with email user2@user.com joins C#Basics',
        'user13[50] with email user13@user.com joins JSCore',
        'user1[25] with email user1@user.com joins JSCore',
        'user8[18] with email user8@user.com joins C#Advanced',
        'user6[85] with email user6@user.com joins JSCore',
        'JSCore: 2',
        'user11[3] with email user11@user.com joins JavaBasics',
        'user45[105] with email user45@user.com joins JSCore',
        'user007[20] with email user007@user.com joins JSCore',
        'user700[29] with email user700@user.com joins JSCore',
        'user900[88] with email user900@user.com joins JSCore'
    ]
)