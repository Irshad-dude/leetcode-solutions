/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    let len = this.length;
    if(len  == 0) return -1;
    return this[len-1]
};

