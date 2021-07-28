// Object destructuring

// const person = {
//     name: 'Paul',
//     age: 55,
//     location: {
//         city: 'London',
//         temp: 12
//     }
// }

// const { name, age, location } = person
// const { city, temp: temperature } = person.location

// console.log(`${name} is ${age} years old and he lives in ${location.city}.`)

// console.log(`It's ${temperature}° in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Haliday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)

// Array destructuring

// const address = []

// const [, city, country = 'USA'] = address

// console.log(`You are in ${country}`)

const item = ['Iced Coffee', '$2.00', '$3.50', '$2.75']

const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)