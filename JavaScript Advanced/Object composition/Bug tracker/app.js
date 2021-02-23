function solve() {

    let reports = {};
    let currentID = 0;
    let parentElement;
    
    function report(author, description, reproducible, severity) {
        let status = 'Open';
        reports[currentID] = {
            ID: currentID,
            author,
            description,
            reproducible,
            severity,
            status
        }
        
        const wrapper = document.createElement('div');
        wrapper.id = `report_${currentID}`;
        wrapper.classList.add('report');
        const divBody = document.createElement('div');
        divBody.classList.add('body');
        const p = document.createElement('p');
        p.textContent = description;
        const divTitle = document.createElement('div');
        divTitle.classList.add('title');
        const spanAuthor = document.createElement('span');
        spanAuthor.textContent = `Submitted by: ${author}`;
        spanAuthor.classList.add('author');
        const spanStatus = document.createElement('span');
        spanStatus.classList.add('status');
        spanStatus.textContent = `${reports[currentID].status} | ${severity}`;
        wrapper.appendChild(divBody);
        divBody.appendChild(p);
        wrapper.appendChild(divTitle);
        divTitle.appendChild(spanAuthor);
        divTitle.appendChild(spanStatus);
        
        reports[currentID].htmlElement = wrapper;

        currentID++;

        render(parentElement);
    }

    function setStatus(id, newStatus) {
        reports[id].status = newStatus;
        reports[id].htmlElement.querySelector('.status').textContent = `${newStatus} | ${reports[id].severity}`;
        render(parentElement);
    }

    function remove(id) {
        reports[id].htmlElement.remove();
        delete reports[id];
        render(parentElement);
    }

    function sort(method) {
        const sortObj = {
            author: (a, b) => a[1].author.localeCompare(b[1].author),
            severity: (a, b) => a[1].severity - b[1].severity,
            ID: (a, b) => a[0] - b[0],
        }
        render(parentElement, sortObj[method]);
    }

    function output(selector) {
        parentElement = document.querySelector(selector);
    }

    function render(parentElement, sortMethod = (a, b) => a[0] - b[0]) {
        if (parentElement) {
            Object.entries(reports).sort(sortMethod).forEach(([key, value]) => parentElement.appendChild(value.htmlElement));
        }
    }

    return { report, setStatus, remove, sort, output };
} 