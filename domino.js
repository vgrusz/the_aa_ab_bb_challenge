let max = ''

const main = (aa, ab, bb) => {
    console.log(aa, ab, bb)

    // If all are 0, the result is 0
    if (aa === 0 && ab === 0 && bb === 0) max = ''
    else {
        // if there aren't AB only strings with AABB can be made,
        // AABB(...)AABB if aa = bb or the same plus an AA or BB if there are more of one of those, except if one of those is 0
        if (ab === 0) {
            // ab es cero

            // if only aa = 0 or only bb = 0
            if (aa === 0) max = 'BB' //ab = 0, aa = 0
            else if (bb === 0) max = 'AA' //ab = 0, bb = 0

            else {
                // ab = 0, but neither aa nor bb are zero
                if (aa > bb) {
                    // if there are more aa than bb
                    for (let i = 0; i < bb; i++) max += 'AABB'
                    max += 'AA'
                } else if (aa < bb) {
                    // if there are more bb than aa
                    for (let i = 0; i < aa; i++) max += 'BBAA'
                    max += 'BB'
                }
                else {
                    // if aa y bb are equal
                    for (let i = 0; i < aa; i++) max += 'BBAA'
                }
            }
        }

        else {
            // ab != 0

            // if only aa = 0 or only bb = 0...
            if (aa === 0) {
                //ab != cero, aa cero, bb != cero
                for (let i = 0; i < ab; i++) max += 'AB'

                max = 'BB' + max
            }
            else if (bb === 0) {
                //ab != cero, bb cero, aa != cero
                for (let i = 0; i < ab; i++) max += 'AB'
                max = max + 'AA'
            }
            else {
                // neither = 0
                if (aa > bb) {
                    // IF there are more aa than bb
                    for (let i = 0; i < bb; i++) max += 'AABB'
                    max += 'AA'

                    let maxAux = ''
                    for (let i = 0; i < ab; i++) maxAux += 'AB'

                    max = maxAux + max
                } else if (aa < bb) {
                    // if there are more bb than aa
                    for (let i = 0; i < aa; i++) max += 'BBAA'
                    max += 'BB'

                    let maxAux = ''
                    for (let i = 0; i < ab; i++) maxAux += 'AB'

                    max = max + maxAux
                } else {
                    // if aa y bb are equal
                    for (let i = 0; i < aa; i++) max += 'AABB' // interesting thing: only in this case, if BBAA is made, AB can't be attached at the start nor the end

                    let maxAux = ''
                    for (let i = 0; i < ab; i++) maxAux += 'AB'

                    max = max + maxAux
                }
            }
        }
    }

    console.log(max, max.length, ' check passed: ', notAAAeitherBBB(max))
}

var notAAAeitherBBB =  (s) => {
    var haveAAA = s.includes('AAA');
    var haveBBB = s.includes('BBB');
    return (!haveAAA && !haveBBB);
};

main(isNaN(process.argv[2]) ? 1:  Number(process.argv[2]),
    isNaN(process.argv[3]) ? 1: Number(process.argv[3]),
    isNaN(process.argv[4]) ? 1 : Number(process.argv[4])
);
