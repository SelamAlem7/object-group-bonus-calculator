const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


console.log( employees );

//## Processing Employee Bonuses
  for( let i =0; i < employees.length; i++){
    console.log( employees[i])
    addToEmployeeFile(employees[i])
  }

  //## Function Logic
  function addToEmployeeFile (employee){
    if ( employees.reviewRating >= 2 ){
      totalBonus = 0;
    }
    else if( employees.reviewRating === 3)
    totalBonus = .04*employees.annualSalary

    else if( employees.reviewRating === 4)
    totalBonus = .06*employees.annualSalary

    else if( employees.reviewRating === 5)
    totalBonus = .10*employees.annualSalary 
    
    if (employees.employeeNumber = employees.employeeNumber[4])

    let newObject = {
      name: employees.name,
    //   bonusPercentage: bonusPercentage,
    //   totalCompensation: totalCompensation,
    //   totalBonus: totalBonus,
    }
  }
  //   return newObject;
  // 
 

   

   

  //### Individual Bonus calculation

