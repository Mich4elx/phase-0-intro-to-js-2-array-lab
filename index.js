// Write your solution here!
const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name){
    cats.push(`${name}`)
}
function destructivelyPrependCat(name){
    cats.unshift(`${name}`)
}
function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats)
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
   const copyCats = [...cats, name]
   return copyCats
}
function prependCat(name){
    const copyCats2 = [name,...cats]
    return copyCats2
}
function removeLastCat(){
    const copyCats3 = cats.slice(0,cats.length - 1)
    return copyCats3
}
function removeFirstCat(){
    const copyCats4 = cats.slice(1)
    return copyCats4
}