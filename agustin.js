const solution = (AA, AB, BB, PREV = '') => {
    console.log(PREV)

    if (AA === 0 && AB === 0 && BB === 0) return ''

    let best = PREV

    if (AA > 0 && !PREV.endsWith('A')) {
        const alt = solution(AA - 1, AB, BB, PREV + 'AA')
        if (alt.length > best.length) best = alt
    }

    if (AB > 0 && !PREV.endsWith('AA')) {
        const alt = solution(AA, AB -1, BB, PREV + 'AB')
        if (alt.length > best.length) best = alt
    }

    if (BB > 0 && !PREV.endsWith('B')) {
        const alt = solution(AA, AB, BB - 1, PREV + 'BB')
        if (alt.length > best.length) best = alt
    }

    return best
}

const result = solution(isNaN(process.argv[2]) ? 1:  Number(process.argv[2]),
isNaN(process.argv[3]) ? 1: Number(process.argv[3]),
isNaN(process.argv[4]) ? 1 : Number(process.argv[4])
);

console.log('solution', result, 'length', result.length )