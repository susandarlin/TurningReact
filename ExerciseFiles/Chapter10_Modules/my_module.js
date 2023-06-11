const sum = (x, y) => x + y;
const square = x => x * x;
const another = () => console.log('Another');
console.log('Module loaded');

// Exports(Node module) can call and use it other js files
/* exports.sum =  sum; 
   exports.squar = square;
*/

// OR 

// export is object
exports = {
    sum,
    square
};