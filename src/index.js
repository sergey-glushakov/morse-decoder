const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arrString = expr.match(/.{1,10}/g);
    let newArr = arrString.map(function (item) {
        let index = item.indexOf('1');
        let newItem = item.slice(index, item.length);
        let arr = newItem.match(/.{1,2}/g);
        let newArr = arr.map(function (item) {
            if(item === '10') return '.';
            if(item === '11') return '-';
            if(item === '*') return ' ';
        })
        let string = newArr.join('');
        let char = MORSE_TABLE[string];
        return char;
        
    })

    newArr = newArr.map(function (item) {
        if (item === undefined) {
            return ' ';
        } else {
            return item;
        }
    })
    let result = newArr.join('');
    return result;
}

module.exports = {
    decode
}