
function userStrictMode () {
    //  strict di function 
    'use strict'
    // 'use strict' // akan membuat error di var,with dll., krn ECMASCRIPT menjadi ketat
    const person = {
        firstName : 'andi'
    }
    // ERROR
    with(person){
        console.log(firstName);
    }
}

userStrictMode()