function solve() {
    class SortedList {
        constructor() {
            this.list = [];
            this.size = 0;
        }
    }

    const list = new SortedList;

    list.add = function (el) {
        this.list.push(el);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    list.remove = function (index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b);
            this.size--;
        }
    }

    list.get = function (index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }

    return list;
}