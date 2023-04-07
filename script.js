/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = "Jonas";
// console.log(firstName);
let country = "USA";
let continent = "North America";
let population = "300";
console.log(country);
console.log(continent);
console.log(population);

let age = 30;
age = 31;
// reassigning value
// mutated the variable

const birthYear = 1991

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + ' ' + lastName);

// comparison operators

// BMI = mass / height ** 2 mass / (height * height)

// markHigherBMI
/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const BMImark = markWeight / markHeight ** 2;
const BMIjohn = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, markHigherBMI)


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving license`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
};

let cenutry;
const birthYear = 2012;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const BMImark = markWeight / markHeight ** 2;
const BMIjohn = johnWeight / johnHeight ** 2;

if (BMImark > BMIjohn) {
    console.log(`Mark's
BMI (${BMImark}) is higher than John's (${BMIjohn})!`)
} else {
    console.log(`Johns's
BMI (${BMIjohn}) is higher than Mark's (${BMImark})!`)
}


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Jonus'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log(23 * 2);

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}
const age = 18;
if (age === 18) console.log('You just became an adult')

const favorite = Number(prompt("What's your favoirte number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('your number is cool');
}


const age = 16;

const hasDriversLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision !== isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
console.log(avgKoalas, avgDolphins);
console.log(avgDolphins);

if (avgDolphins > avgKoalas) {
    console.log('Dolphins win the trophy')
} else if (avgDolphins < avgKoalas) {
    console.log('Koalas win the trophy')
} else if (avgDolphins === avgKoalas) {
    console.log('Both win the trophy')
}


function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    return `${firstname} retires in ${retirment} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

*/
Promise.resolve(10)
    .then(res => res * 2)
    .then(res => res * 2)
    .then(res => console.log(res));


console.log(4 * 4);

