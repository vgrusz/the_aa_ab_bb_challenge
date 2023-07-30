let maxLength = 0;
let solutions = [];
let seconds = 0;

const main = (aa, ab, bb) => {
    let all = Array(aa).fill("AA", 0).concat(Array(ab).fill("AB", 0).concat(Array(bb).fill("BB", 0)));
    const initMS = (new Date()).getTime();
    recursive(all, '');
    const endMS = (new Date()).getTime();
    seconds = ((endMS - initMS) / 1000).toFixed(3);
    printStatistics();
};

const recursive = (_array, _untilNow) => {
    if (_array.length === 1) {
        const nextUntilNow = _untilNow + _array[0];
        if (notAAAeitherBBB(nextUntilNow))
            processStatistics(nextUntilNow);
        console.log(nextUntilNow);
    }
    else {
        _array.forEach((element, index) => {
            const nextUntilNow = _untilNow + _array[index];
            console.log(nextUntilNow);
            if (notAAAeitherBBB(nextUntilNow)) {
                processStatistics(nextUntilNow);
                const subArray = deleteByIndex(_array, index);
                recursive(subArray, nextUntilNow);
            }
        });
    }
};

const printStatistics = () => {
    console.log('\nSolutions: \n');
    solutions.forEach(element => {
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
    if (_nextUntilNow.length > maxLength) {
        maxLength = _nextUntilNow.length;
        solutions = [];
        solutions.push(_nextUntilNow);
    }
    else if (_nextUntilNow.length === maxLength)
        solutions.push(_nextUntilNow);
};

const notAAAeitherBBB = (s) => {
    const haveAAA = s.includes('AAA');
    const haveBBB = s.includes('BBB');
    return (!haveAAA && !haveBBB);
};

const deleteByIndex = (_arr, _ind) => _arr.filter((element, index) => index !== _ind);

main(isNaN(process.argv[2]) ? 1 : Number(process.argv[2]),
    isNaN(process.argv[3]) ? 1 : Number(process.argv[3]),
    isNaN(process.argv[4]) ? 1 : Number(process.argv[4])
);