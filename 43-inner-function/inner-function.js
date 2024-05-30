/**
 * Function didalam function
 */
function outer() {
    
    function inner(name = "GUEST") {
        console.info(`Hi ${name}, Inner.`);
    }

    inner();
    inner();

}

outer();
/*
inner(); bukan mengakses function inner pada blok kode function outer. terjadi ERROR;
*/