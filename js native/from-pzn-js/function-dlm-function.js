function outer () {
    function inner () {
        console.log('inner dlm');
    }

    inner();
}

outer()

inner()