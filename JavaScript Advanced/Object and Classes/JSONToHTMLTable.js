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

    const arr = JSON.parse(input);
    let output = '<table>\r\n   <tr>';

    for (const key of Object.keys(arr[0])) {
        output += '<th>' + key + '</th>'
    }

    output += '</tr>';

    for (const obj of arr) {

        output += '\r\n   <tr>'

        for (const value of Object.values(obj)) {
            output += '<td>' + escape(value.toString()) + '</td>';
        }

        output += '</tr>';
    }

    output += '\r\n</table>'
    console.log(output);
}

solve(
    ['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']
)