function takeNumber() {
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;
    console.log(inputFieldText);
    if( inputFieldText === ""){
        alert("Please, enter a number. Ohterwise it doesn't work.")
    }
        else if(isNaN(inputFieldText)){
            
            alert("Please, enter a number. Ohterwise it doesn't work.")
        }
        else{
            const inputNumber = parseFloat(inputFieldText);
            inputField.value = '';
            return inputNumber;
        }

}

function makeDouble(inputNumber) {
    const result = inputNumber * 2;
    
    return result;
}

function makeTriple(inputNumber){
    const result = inputNumber * 3;
    
    return result;
}

function displayOutcome(findResult) {
    const outcome = document.getElementById("outcome");

    outcome.innerText = findResult;
    
}

// handle double button event

document.getElementById("double-button").addEventListener("click", function(){
   
   const Number = takeNumber();
//    debugger;
   console.log(Number);
        const doubleNumber = makeDouble(Number); 
        const displayDouble = displayOutcome(doubleNumber);
})

// handle triple button event

document.getElementById("triple-button").addEventListener("click", function(){
    const Number = takeNumber();
    // console.log(Number)
    const tripleNumber = makeTriple(Number);
    const displayTriple = displayOutcome(tripleNumber);

})