//simple sum
function simpleArraySum(array){
    let sum = array.reduce((acc, item) => {
        return (acc + item)
    })
    return sum
}

function simpleArraySumTwo(array){
    return array.reduce((acc, item) => acc + item, 100)
}

console.log(simpleArraySum([1,2]))
console.log(simpleArraySumTwo([1,2]))

//compare the triplets
function compareTriples(a, b){
    let scores = [0, 0]
    for(let i=0; i < a.length; i++){
        if (a[i] > b[i]){
            scores[0]++
        } else if (a[i] < b[i]){
            scores[1]++
        }
    }
    return scores
}