let maxLength = 0;
let solutions = [];
let seconds = '';

const main = (aa, ab, bb) => {
    var all = Array(aa).fill("AA", 0).concat(Array(ab).fill("AB", 0).concat(Array(bb).fill("BB", 0)));
    var initMS = (new Date()).getTime();
    recursive(all, '');
    var endMS = (new Date()).getTime();
    seconds = ((endMS - initMS) / 1000).toFixed(3);
    printStatistics();
};

const recursive = (_array, _untilNow) => {
    if (_array.length === 1) {
        var nextUntilNow = _untilNow + _array[0];
        processStatistics(nextUntilNow);
        console.log(nextUntilNow);
    }
    else {
        for (var i = 0; i < _array.length; i++) {
            var nextUntilNow = _untilNow + _array[i];
            console.log(nextUntilNow);
            processStatistics(nextUntilNow);
            var subArray = deleteByIndex(_array, i);
            recursive(subArray, nextUntilNow);
        }
    }
};

const printStatistics = () => {
    console.log('\nSolutions: \n');
    solutions.forEach((element) => {
        console.log(element, ' validation OK: ', notAAAeitherBBB(element));
    });
    console.log('\nMax length: ', maxLength, '\n');
    console.log('\nSolutions: ', solutions.length, '\n');
    console.log('\nTime in seconds: ', seconds, '\n');
    console.log('\nGiven parameters: ', isNaN(process.argv[2]) ? 1 : Number(process.argv[2]),
        isNaN(process.argv[3]) ? 1 : Number(process.argv[3]),
        isNaN(process.argv[4]) ? 1 : Number(process.argv[4]), '\n');
};

const processStatistics = (_nextUntilNow) => {
    if (notAAAeitherBBB(_nextUntilNow))
        if (_nextUntilNow.length > maxLength) {
            maxLength = _nextUntilNow.length;
            solutions = [];
            solutions.push(_nextUntilNow);
        }
        else if (_nextUntilNow.length === maxLength)
            solutions.push(_nextUntilNow);
};

const notAAAeitherBBB = (s) => {
    var haveAAA = s.includes('AAA');
    var haveBBB = s.includes('BBB');
    return (!haveAAA && !haveBBB);
};

const deleteByIndex = (_arr, _ind) => { return _arr.filter((element, index) => { return index !== _ind; }); };

main(isNaN(process.argv[2]) ? 1 : Number(process.argv[2]),
    isNaN(process.argv[3]) ? 1 : Number(process.argv[3]),
    isNaN(process.argv[4]) ? 1 : Number(process.argv[4])
);