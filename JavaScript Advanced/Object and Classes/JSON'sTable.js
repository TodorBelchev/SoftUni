function solve(input) {

    function escape(string) {
        string = string
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        return string;
    }

    function generateTableRow(name, position, salary) {
        return `\r\n\t<tr>\r\n\t\t<td>${name}</td>\r\n\t\t<td>${position}</td>\r\n\t\t<td>${salary}</td>\r\n\t</tr>`;
    }

    let output = '<table>';

    for (const line of input) {
        const employee = JSON.parse(line);
        const name = escape(employee.name);
        const position = escape(employee.position);
        const salary = Number(escape(employee.salary.toString()));
        output += generateTableRow(name, position, salary);
    }

    output += '\r\n</table>'
    console.log(output);
}

solve(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]
)