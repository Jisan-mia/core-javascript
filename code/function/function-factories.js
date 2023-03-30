// function factories

function makeGreeting(lang) {
    return function(firstName, lastName) {
        if(lang === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName)
        } 
        if(lang === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName)
        }
    }
}

var greetEng = makeGreeting('en')
var greetSpan = makeGreeting('es')

greetEng('John', 'Doe') // Hello John Doe
greetSpan('John', 'Doe') // Hola John Doe
