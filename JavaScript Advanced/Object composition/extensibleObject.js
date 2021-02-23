myObj = () => ({
    __proto__: {},
    extend: function (template) {
        Object.keys(template).forEach(t => {
            if (typeof template[t] === 'function') {
                this.__proto__[t] = template[t];
            } else {
                this[t] = template[t];
            }
        })
    }
});