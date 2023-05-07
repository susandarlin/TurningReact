let b = 200;

// to call Module one time
// Function as Module
window.MyModule = window.MyModule || (function () // IIFE - Imediately invoking function expression
{
    console.log('Module loaded');

    function push()
    {
        console.log('Push');
    }
    function pop()
    {
        console.log('Pop');
    }
    return {
        push,
        pop,
    }
})();