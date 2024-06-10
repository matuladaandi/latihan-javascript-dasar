const person = {
    firstName : 'andi',
    lastName : 'matulada',
    address : {
        country : 'Indonesia',
        city : 'Dompu'
    },
    hobbies : [
        'coding','game','sport'
    ]
}

// converse TO STRING json fro, objet
const json = JSON.stringify(person);
console.log(json); 

// converse TO OBJECT from string json
const jsonObject = JSON.parse(json)
console.log(jsonObject);