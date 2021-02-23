(() => {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                return this.toString().substring(0, lastIndex) + "...";
            } else {
                return this.toString().substring(0, n - 3) + "...";
            }
        }
    }

    String.format = function (str, ...params) {
        params.forEach((key, index) => {
            str = str.replace(`{${index}}`, key)
        });
        return str;
    }

})();

let testString = 'the quick brown fox jumps over the lazy dog';
console.log(testString.truncate(12))