function createHugeArray1() {
    var x = []
    _.times(10000, function(i) {
        x.push(i)
    })
    console.time('forEach')
    x.forEach(function(y) {
        var z = y*10
    })
    console.timeEnd('forEach')
}


function createHugeArray2() {
    var x = []
    _.times(10000, function(i) {
        x.push(i)
    })
    console.time('iterable')
    var l = x.length;
    for (var i = 0; i < l; i++) {
        var z = x[i]*10
    }
    console.timeEnd('iterable')
}

function createHugeArray3() {
    var x = []
    _.times(10000, function(i) {
        x.push(i)
    })
    console.time('for In')
    var l = x.length;
    for (var i in x) {
        var z = x[i]*10
    }
    console.timeEnd('for In')
}

createHugeArray1()
createHugeArray2()
createHugeArray3()
