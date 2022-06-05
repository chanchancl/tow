
let min = (i, j) => {
    if (i > j) return j;
    else return i;
}

// CommonJS  module.exports
module.exports = {
    min: min,
}