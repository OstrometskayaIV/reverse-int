module.exports = function reverse (n) {
    let moduleN = Math.abs(n);
    let moduleArr = Array.from(String(moduleN)).reverse().join('');

    return Number(moduleArr);
}
