const prompt = require('prompt');

// start the prompt
prompt.start();

// ask user for the input
prompt.get(['range1', 'range2'], (err, result) => {
    if (err) {
        throw err;
    }
        console.log("Part one :",part1(result.range1,result.range2))
        console.log("Part two :",part2(result.range1,result.range2))


});

function part1(number1, number2){
        const matching =[]
        for(i=number1; i<=number2; i++){
        const x = i.toString()
        const y = [...x]
        if(x.length==6 && /(.)\1/.test(x) && x == y.sort().join``){
            matching.push(x)
        }

        }

        return matching.length
}

function part2(number1, number2){
        const matching =[]
        for(i=number1; i<=number2; i++){
        const x = i.toString()
        const y = [...x]

        const count = {}
        y.map((val)=>count[val]= (count[val]||0)+1)

        if(x.length==6 && Object.entries(count).find(val=> val[1]==2) && x == y.sort().join``){
            matching.push(x)
        }

        }

        return matching.length
}