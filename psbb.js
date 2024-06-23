const prompt = require('prompt-sync')()

function miniBus() {
    let numFamilies = parseInt(prompt("Input the number of families : "));
    
    let familyMembers = prompt("Input the number of members in the family (separated by a space) : ").split(' ').map(Number);
    
    if (numFamilies !== familyMembers.length) {
        console.log("Input must be equal with count of family");
        return;
    }
    
    for (let i = 0; i < familyMembers.length - 1; i++) {
        for (let j = 0; j < familyMembers.length - 1 - i; j++) {
            if (familyMembers[j] < familyMembers[j + 1]) {
                let temp = familyMembers[j];
                familyMembers[j] = familyMembers[j + 1];
                familyMembers[j + 1] = temp;
            }
        }
    }
    
    let busCount = 0;
    let i = 0;
    let j = familyMembers.length - 1;
    
    while (i <= j) {
        if (familyMembers[i] + familyMembers[j] <= 4) {
            j--;
        }
        i++;
        busCount++;
    }
    
    console.log("Minimum bus required is : " + busCount);
}

miniBus();