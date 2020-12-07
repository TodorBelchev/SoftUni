function solve(input) {
    const pattern = /\s[A-Za-z0-9]+[\.\-_]*[A-Za-z0-9]+@[A-Za-z]+[\-\.][A-Za-z\-\.]+\b/g;
    const emails = [];
    while (valid = pattern.exec(input)) {
        emails.push(valid[0]);
    }
    for (const email of emails) {
        console.log(email.trim());
    }
}

solve(
    ['Please contact us at: support@github.com.']
)