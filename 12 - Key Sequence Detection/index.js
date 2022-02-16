const arr = [];
const toMatch = 'rahul';
window.addEventListener('keyup', e => {    
    arr.push(e.key);
    arr.splice(-toMatch.length - 1, arr.length - toMatch.length);
    if (arr.join('').includes(toMatch)) {
        cornify_add();
      }
});