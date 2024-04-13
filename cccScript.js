// Run this script in a terminal. Have fun!

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

//Challenge 1 (nos. taken from recommended page)
const fake1 = [4, 5, 5, 6, 4, 4, 9, 9, 1, 4, 5, 5, 5, 4, 0, 3]; //Visa

const fake2 = [3, 5, 3, 6, 3, 5, 4, 1, 7, 1, 3, 0, 9, 5, 9, 2]; //JCB

const fake3 = [6, 3, 8, 9, 5, 4, 4, 2, 8, 8, 8, 8, 9, 6, 6, 5]; //InstaPayment

const fake4 = [7, 8, 8, 4, 2, 5, 6, 7, 3, 2, 6, 7, 8, 1, 5, 6]; //invented number

// Add your functions below:
//Step 3:
const validateCred = (credCardArray) => {
  //Create a copy of the handovered array:
  let slicedArr = credCardArray.slice(0);
  let sumWithInitial;
  //Check if Creditcard Array is less than 16 digits long:
  if (slicedArr.length < 16) {
    for (let i = 0; i < slicedArr.length; i++) {
      if (i % 2 === 1) {
        slicedArr[i] *= 2;
        if (slicedArr[i] > 9) {
          slicedArr[i] -= 9;
        }
      }
      //Here we sum it all together:
      sumWithInitial = slicedArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
  }
  //Validation for 16 digits:
  if (slicedArr.length === 16) {
    for (let i = slicedArr.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        slicedArr[i] *= 2;
        if (slicedArr[i] > 9) {
          slicedArr[i] -= 9;
        }
      }
      //Here we sum it all together:
      sumWithInitial = slicedArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
    //console.log(sumWithInitial);
  }
  //Here comes the modulo 10 check.
  if (sumWithInitial % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

//Step 4:
const findInvalidCards = (arrCredCard) => {
  const result = arrCredCard.filter(
    (element) => validateCred(element) === false
  );
  return result;
};

//Step 5:
const idInvalidCompanies = (cardCompanies) => {
  //Here we store the batch of credcard nos. in an array
  const storageArr = findInvalidCards(cardCompanies);

  let consolidatedCompanies = [];
  let finalArray = [];
  //Now we fill the consolidatedCompanies array with elements
  for (let i = 0; i < storageArr.length; i++) {
    switch (storageArr[i][0]) {
      case 3:
        consolidatedCompanies.push("Amex");
        break;
      case 4:
        consolidatedCompanies.push("Visa");
        break;
      case 5:
        consolidatedCompanies.push("Mastercard");
        break;
      case 6:
        consolidatedCompanies.push("Discover");
        break;
      default:
        console.log("Company not found");
    }
  }
  //Now we remove the duplicates with forEach/includes:
  consolidatedCompanies.forEach((element) => {
    if (!finalArray.includes(element)) {
      finalArray.push(element);
    }
  });
  console.log(finalArray);
};

//Challenge No.2:
const convertString = (credCardNoStr) => {
  //First we declare a string array
  const stringArray = [credCardNoStr];

  let storageArr = [];
  let finalIntArray = [];

  //This step stores the input string in separate indices
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < stringArray[i].length; j++) {
      storageArr.push(stringArray[i][j]);
    }
  }
  //Finally we convert the string indices to ints
  storageArr.forEach((element) => finalIntArray.push(parseInt(element, 10)));

  return finalIntArray;
};

//Challenge No.3:
const convertInvalidNumber = (invalidNumber) => {
  if (validateCred(invalidNumber) === false) {
    //Create a copy of the handovered array:
    let slicedArr = invalidNumber.slice(0);
    let sumWithInitial;
    //Check if Creditcard Array is less than 16 digits long:
    if (slicedArr.length < 16) {
      for (let i = 0; i < slicedArr.length; i++) {
        if (i % 2 === 1) {
          slicedArr[i] *= 2;
          if (slicedArr[i] > 9) {
            slicedArr[i] -= 9;
          }
        }
        //Here we sum it all together:
        sumWithInitial = slicedArr.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
      }
    }
    //Validation for 16 digits:
    if (slicedArr.length === 16) {
      for (let i = slicedArr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
          slicedArr[i] *= 2;
          if (slicedArr[i] > 9) {
            slicedArr[i] -= 9;
          }
        }
        //Here we sum it all together:
        sumWithInitial = slicedArr.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
      }
      //console.log(sumWithInitial%10);
    }
    let modulo = (sumWithInitial%10);
    //console.log(modulo);
    for (let i = 1; i < invalidNumber.length; i += 2) {
  if (modulo > 0) {
    console.log(invalidNumber[i] -= 1);
    modulo--;
  } else {
    break; // Break out of the loop if modulo becomes 0
  }
}
    return invalidNumber;
  }
};

//const test = [4, 4, 3, 1, 7, 6, 8, 6, 7, 0, 0, 9, 1, 7, 9, 5]

console.log(validateCred(convertInvalidNumber(invalid1)));
//Console Logs

//console.log(validateCred(fake4));

//console.log(findInvalidCards(batch));

//idInvalidCompanies(batch);

//console.log(validateCred(convertString('4539677908016808')));
