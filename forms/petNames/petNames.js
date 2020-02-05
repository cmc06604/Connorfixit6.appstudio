let petNames= ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withMaramaduke = petNames.push['Marmaduke']

console.log(petNames)

petNames.splice(5,1) 
console.log('The action taken was: Remove Vinny')
console.log("The remaing data are: " + petNames)

petNames.splice(3,1) 
console.log('The action taken was: "Remove Marty") 
console.log("The remaing data are: " + petNames)

petNames.unshift('Nancy') 
console.log('The action taken was: Put Nancy at front of list')
console.log(console.log("The remaing data are: " + petNames)

petNames.push('Nancy')
console.log('The action taken was: Move Nancy to end of array ') 
console.log("The remaing data are: " +petNames)

let rileyNum = petNames.indexOf('Riley')
console.log(rileyNum)

let cindyNum = petNames.indexOf('Cindy')
console.log(cindyNum)


/* After each user chosen activity (eg. remove 'Vinny'), output to the console the action taken and the current state of the petNames array using this format: 

The action taken was: Remove Vinny
The remaining data are: 
[Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam]