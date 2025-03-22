// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name = 'Ralph') {
    cats.push(name)
}

function destructivelyPrependCat(name = 'Bob') {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name = 'Broom') {
    return [...cats, name];
}

function prependCat(name = 'Arnold') {
    return [name, ...cats];
}

function removeLastCat() {
    return [...cats.slice(0,-1)];
}

function removeFirstCat() {
    return [...cats.slice(1)];

}