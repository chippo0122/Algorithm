let i = 0;

function rec () {
    i ++
    rec();
}

try {
    rec();
} catch (ex) {
    console.log('i = ' + i + ' error' + ex);
}