let globalScope = 1;

{
    let blockScope = 2;
    //wider scoep
    globalScope = 100;
    {
        let nestedBlockScope = 3;
    }
}

const myVeryOwnVariable = 72;
{
    let myVeryOwnVariable = 4;
    console.log( myVeryOwnVariable );

}
console.log( myVeryOwnVariable);
