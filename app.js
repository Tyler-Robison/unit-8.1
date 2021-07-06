// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function divide(x, y) {
//     return x / y;
// }

// function power(x, y) {
//     return x ** y;
// }
// const mathFuncs = [add, subtract, multiply, divide, power];

// function doMath(a, b, mathFunc) {
//     return mathFunc(a, b);
// }

// doMath(5, 6, add);

// doMath(30, 25, function (a, b) {
//     return a * 2 + b;
// })

// // doAllMath(3, 5, mathfuncs)

// function doAllMath(a, b, mathArray) {
//     for (ele of mathArray) {
//         console.log(ele(a, b));
//     }
// }

// const colors = ['teal', 'cyan', 'peach', 'purple'];

// // colors.forEach(function(val, i) {
// // const caps = (val.toLocaleUpperCase());
// // console.log(`Index: ${i} Value: ${caps}`);
// // });

// const prices = [30.99, 19.99, 2.5, 99.0];

// function findTotal(arr) {
//     let total = 0;
//     arr.forEach(function (val) {
//         total += val;
//     });
//     console.log(total);
// }

// const names = ['billy', 'timmy', 'maddy', 'Caesar'];

// function nameSquisher(arr) {
//     let newName = ''
//     arr.forEach(function (val) {
//         newName += val;
//     });
//     console.log(newName);
// }

// const numbers = [21, 37, 64, 99, 142];

// numbers.map(function (num) {
//     return -num;
// });

// const todos = [
//     {
//         id: 1,
//         text: 'walk the dog',
//         priority: 'high'
//     },
//     {
//         id: 2,
//         text: 'walk the cat',
//         priority: 'medium'
//     },
//     {
//         id: 3,
//         text: 'walk the chickens',
//         priority: 'low'
//     },
//     {
//         id: 4,
//         text: 'walk the wife',
//         priority: 'super high'
//     }
// ];

// todos.map(function (ele) {
//     return ele.text;
// })

// const anchorNodeList = document.querySelectorAll('li a');
// const anchorArray = Array.from(anchorNodeList);
// const URLArray = anchorArray.map(function (url) {
//     return url.href;
// });

// function myMap(arr, func) {
//     const newArr = [];
//     for (ele of arr) {
//         newArr.push(func(ele));
//     }
//     return newArr;
// };

// const nums = [0, 1, 2, 3, 4, 5];

// function double(num) {
//     return num * 2;
// }

// myMap(todos, textGetter);

// function textGetter(listText) {
//     return listText.text;
// }

// const strArray = ['a', 'b', 'c', 'd']

// function stringIndexer(ele) {
//     return ele;
// }

// function myMap2(arr, func) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const val = func(arr[i], i)
//         newArr.push(val);
//     }
//     return newArr;
// };

// const repeatedStrings = myMap2(['a', 'b', 'c', 'd', 'e'], function (str, idx) {
//     return str.repeat(idx);
// })

// const words = [
//     'dggfvgfgfd',
//     'dsffdsfdsfdsfdsdsf',
//     'sfddasasdadszadsffadsfdafsd',
//     'seventeen',
//     'ihateeverythingaboutyouwhydoyoustillloveme',
//     'ganglioncyst',
//     'raptor',
//     'muricaisforcanadiansonlybah',
//     'onesheeptwosheep',
//     'two',
//     'four',
//     'bayonetta'
// ];

// const longWords = words.filter(function (word) {
//     return word.length >= 20;
// })

// const dOrR = words.filter(function (wrd) {
//     return wrd[0] === 'd' || wrd[0] === 'r'
// })

// const noVowels = function (word) {
//     for (char of word) {
//         if (isVowel(char)) {
//             return false;
//         }
//     } return true;
// }

// const isVowel = function (char) {
//     return 'aeiou'.indexOf(char) !== -1;
// }

// const noVowelArray = (words.filter(noVowels))



// // const checked = Array.from(allCheckboxes).filter(function (box) {
// //     return box.checked;
// // });

// // const completedItems = checked.map(function (checkbox) {
// //     return checkbox.parentElement.innerText;
// // });

// function extractCompletedTodos() {
//     const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
//     return Array.from(allCheckboxes)
//         .filter(function (box) {
//             return box.checked;
//         })
//         .map(function (checkbox) {
//             return checkbox.parentElement.innerText;
//         });
// }

// function myFilter(arr, callback) {
//     let newArr = [];
//     for (ele of arr) {
//         if (callback(ele) === true) {
//             newArr.push(ele);
//         };
//     } return newArr;
// };

// function evenNumber(num) {
//     if (num % 2 === 0) {
//         return true
//     }
// }

// const evenNumbers = myFilter([0, 1, 2, 7, 8, 9, 120, 311, 44, 68, 14, 15, 17], evenNumber);

// function addKeyAndValue(arr, key, value) {
//     let newArr = [];
//     arr.forEach(function (val) {
//         val[key] = value;
//         newArr.push(val);
//     })
//     return newArr;
// }

// let keyPrac = { tim: 'curry' }

// const isAVowel = function (char) {
//     return 'aeiou'.indexOf(char) !== -1;
// }

// function vowelCount(str) {
//     let vowelCountObj = {};
//     let arr = str.toLowerCase().split("");
//     arr.forEach(function (char) {
//         if (isAVowel(char)) {
//             if (vowelCountObj.hasOwnProperty(char)) {
//                 vowelCountObj[char]++;
//             } else {
//                 vowelCountObj[char] = 1;
//             }
//         }
//     })
//     return vowelCountObj;
// }

// function doubleValuesWithMap(arr) {
//     let newArr = arr.map(function (num) {
//         return num * 2; //returns out of inner func but need to capture in a variable to return from outer func.
//     })
//     return newArr;
// }

// let namesArr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }]
// // let key = 'name'

// function extractKey(arr, key) {
//     let newArr = arr.map(function (ele, key) {
//         return ele[key]
//     })
//     return newArr;
// }

// function removeKey(arr, key) {
//     let keyArr = []
//     for (let ele of arr) {
//         keyArr.push(ele[key]);
//     }
//     return keyArr;
// }

// function extractKey(arr, key) {
//     let newArr = arr.map(function (ele) {
//         return ele[key]
//     })
//     return newArr;
// }

// let fullNameObj = [{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia" }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele" }];

// function extractFullName(arr) {
//     let newArr = arr.map(function (ele) {
//         let firstName = ele.first;
//         let lastName = ele.last;
//         return `${firstName} ${lastName}`;
//     })
//     return newArr
// }

// let catArr = [{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia", isCatOwner: true }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele", isCatOwner: true }]
// let key = 'isCatOwner'

// function filterByValue(arr, key) {
//     const catOwner = arr.filter(function (ele) {
//         return ele[key];
//     })
//     return catOwner;
// }

// let testArr = [1, 2, 3, 4, 5]

// function find(arr, searchValue) {
//     const num = arr.filter(function (ele) {
//         return ele === searchValue;
//     })
//     return num[0];
// }

// function findInObj(arr, key, searchValue) {
//     const catOwner = arr.filter(function (ele) {
//         if (ele[key] === searchValue) {
//             return ele[key];
//         }
//     })
//     return catOwner[0];
// }

// function doubleOddNumbers(arr) {
//     const oddNums = arr.filter(function (ele) {
//         if (ele % 2 === 1) {
//             return ele
//         }
//     })
//     const doubleNums = oddNums.map(function (ele) {
//         return ele * 2
//     })
//     return doubleNums;
// }

// function removeVowels(str) {
//     const lowerCaseArr = str.toLowerCase().split("");
//     const vowelsRemoved = lowerCaseArr.filter(function (ele) {
//         if('aeiou'.indexOf(ele) === -1){
//             return ele
//         }
//     })
//     return vowelsRemoved.join('')
// }

// const words = [
//     'dggfvgfgfd',
//     'dsffdsfdsfdsfdsdsf',
//     'sfddasasdadszadsffadsfdafsd',
//     'seventeen',
//     'ihateeverythingaboutyouwhydoyoustillloveme',
//     'ganglioncyst',
//     'raptor',
//     'muricaisforcanadiansonlybah',
//     'onesheeptwosheep',
//     'two',
//     'four',
//     'bayonetta'
// ];

// words.some(function (word) {
//     return word.length > 25;
// })

// words.some(function (word) {
//     return word.indexOf('netta') !== -1;
// })

// words.every(function (ele) {
//     return ele.length > 5;
// })

// function allStrings(arr) {
//     let allStr = arr.every(function (str) {
//         return typeof str === "string";
//     })
//     return allStr;
// }

// const submitButton = document.querySelector('#submitButton');
// submitButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     boxesChecked();
// })

// function boxesChecked() {
//     const allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
//     let allChecked = allCheckboxes.every(function (box) {
//         return box.checked === true;
//     })
//     if (allChecked === true) {
//         console.log('All boxes checked');
//     } else {
//         console.log('Check remaining boxes');
//     }
// }

// const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // function mySome(arr) {
// //     for (ele of arr) {
// //         if (ele < 5) {
// //             return true;
// //         }
// //     } return false;
// // }

// // function myEvery(arr){
// //     for (ele of arr) {
// //         if (ele < 5) { //want to know all 5 or less.
// //             return false;
// //         }
// //     } return true;
// // }

// function mySome(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) return true;
//     }
//     return false
// }

// mySome([4, 5, 6, 7], function (n) {
//     return n > 5;
// })

// function myEvery(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!callback(arr[i], i, arr)) return false;
//     }
//     return true
// }

// myEvery([4, 5, 6, 7], function (n) {
//     return n > 5;
// })

// myEvery([6, 9, 6, 7], function (n) {
//     return Number.isInteger(n);
// })

// myEvery([6, 9.5, 6, 7], function (n) {
//     return Number.isInteger(n);
// })

// function hasAZero(num) {
//     let numArr = num.toString().split('');
//     let containZero = numArr.some(function (char) {
//         if (char === '0') return true
//         return false
//     })
//     return containZero
// }

// function hasOnlyOddNumbers(arr) {
//     return arr.every(function (char) {
//         console.log(char)
//         if (char % 2 !== 1) return false
//         return true;
//     })
// }

// // function hasNoDuplicates(arr) {
// //     let noDuplicates = arr.every(function (num, i) {
// //         console.log(i)
// //         checkNum = arr[i]
// //         arr.splice(i, 1);
// //         if (arr.includes(checkNum)) return false
// //         return true
// //     })
// //     return noDuplicates;
// // }


// const arr = [
//     { title: "Instructor", first: 'Elie', last: "Schoppik" },
//     { title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
//     { title: "Instructor", first: 'Matt', last: "Lane" },
//     { title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
// ]

// function hasCertainKey(arr, key) {
//     return arr.every(function (obj) {
//         return obj[key] !== undefined;
//     })
// }

// const scores = [
//     0,
//     56,
//     60,
//     71,
//     85,
//     90,
//     95,
//     100,
//     40,
//     27
// ];

// scores.find(function (num) {
//     return num % 2 === 0 && num !== 0;
// })

// const EvenScores = scores.filter(function (score) {
//     return score % 2 === 0
// })

// const firstEven = scores.findIndex(function (score) {
//     return score !== 0 && score % 2 === 0;
// })

// function passOrFail(arr) {
//     const cutoff = arr.findIndex(function (score) {
//         return score >= 75;
//     })
//     const passingGrades = scores.splice(cutoff, Infinity)
//     const failingGrades = scores;
//     let grades = { passingGrades: passingGrades, failingGrades: failingGrades }
//     return grades
// }

// function partition(arr, cutoff) {
//     const cutoffIndex = arr.findIndex(function (el) {
//         return el > cutoff;
//     })
//     const failing = arr.slice(0, cutoffIndex);
//     const passing = arr.slice(cutoffIndex, Infinity)
//     console.log(passing, failing)
// }

// function myFind(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr) === true) return arr[i];
//     }
// }

// myFind(scores, function (ele) {
//     return ele > 75;
// });

// function myFindIndex(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr) === true) return i;
//     }
//     return -1;
// }

// myFindIndex(scores, function (ele) {
//     return ele > 75;
// });

// const users = [
//     { username: 'mlewis' },
//     { username: 'akagen' },
//     { username: 'msmith' }
// ];

// // findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
// // findUserByUsername(users, 'taco') // undefined

// function findUserByUsername(usersArray, username) {
//     return usersArray.find(function (user) {
//         if (user.username === username) return username
//     })
// }

// // removeUser(users, 'akagen') // {username: 'akagen'}
// // removeUser(users, 'akagen') // undefined


// // function removeUser(usersArray, username) {
// //    let nameToDelete = usersArray.find(function (user) {
// //         if (user.username === username) {
// //             let toBeDeleted = {...user}
// //             console.log('before delete', toBeDeleted)
// //             delete user.username
// //             console.log('after delete', toBeDeleted)
// //             return toBeDeleted;
// //         }
// //     })
// //     console.log('outerfunc:', nameToDelete)
// //     return nameToDelete
// // }

// function removeUser(usersArray, username) {
//     const indexToDelete = usersArray.findIndex(function (user) {
//         if (user.username === username) return user.username
//     })
//     if (indexToDelete === -1) return; //returns undefined b/c default value to return
//     return usersArray.splice(indexToDelete, 1)[0];
// }

// function removeUser2(usersArray, username) {
//     const indexToDelete = usersArray.findIndex(function (user) {
//         if (user.username === username) return user.username
//     })
//     if (indexToDelete === -1) return; //returns undefined b/c default value to return
//     return usersArray.splice(indexToDelete, 1);
// }

// const numbersArr = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];

// let min = numbersArr[0];

// for (let i = 1; i < numbersArr.length; i++) {
//     if (min > numbersArr[i]) {
//         min = numbersArr[i]
//     }
// }
// console.log(min)

// const str = 'lollapalooza';
// const arr2 = str.split('');
// const lolObj = {};
// for (ele of arr2) {
//     if (!lolObj.hasOwnProperty(ele)) {
//         lolObj[ele] = 1;
//     } else {
//         lolObj[ele]++;
//     }
// }
// console.log(lolObj);

// const words2 = ['hello', 'I', 'love', 'you'];
// const result = words2.reduce(function (accum, nextElement) {
//     console.log(accum, nextElement);
//     return accum + nextElement;
// })

// console.log(result)

// const midtermScores = [70, 88, 93, 94, 64, 62, 56];
// const finals = [92, 93, 76, 77, 78, 59, 61];

// const lowestScore = midtermScores.reduce(function (min, nextScore) {
//     return nextScore < min ? nextScore : min;
// })
// console.log(lowestScore);

// const lowestFinalScore = finals.reduce(function(min, nextScore){
//     return nextScore < min ? nextScore : min;
// })
// const lowestOverallScore = midtermScores.reduce(function(min, nextScore){
//     return nextScore < min ? nextScore : min;
// }, lowestFinalScore)
// console.log(lowestOverallScore);


// extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
const arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }]

// function extractValue(arr, key) {
//    const nameArr = arr.reduce(function(accum, nextElement){
//     return accum.name
//     })
//     return nameArr
// }

function extractValue(arr, key) {
    return arr.reduce(function (accum, nextEle) {
        accum.push(nextEle[key]);
        return accum;
    }, []);
}

vowelCount('Elie') // {e:2,i:1};

function vowelCount(str) {
    const arr = str.toLowerCase().split('')
    return arr.reduce(function (accum, nextEle) {
        if ('aeiou'.indexOf(nextEle) !== -1) {
            if (accum[nextEle] === undefined) {
                accum[nextEle] = 1;
                return accum;
            } else {
                accum[nextEle]++;
                return accum
            }
        }
        return accum;
    }, {})
}

const arr4 = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (accum, nextEle) {
        nextEle[key] = value;
        accum.push(nextEle);
        return accum;
    }, [])
}

function isEven(val){
    return val % 2 === 0;
}

// const arr = [1,2,3,4,5,6,7,8];

partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]


function partition(arr, callback) {
    return arr.reduce(function (accum, nextEle) {
        if (callback(nextEle) === true) {
            accum[0].push(nextEle);
            return accum
        } else {
            accum[1].push(nextEle);
            return accum
        }
    }, [[], []])
}