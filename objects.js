/*  ENTRIES *
Recreate Object.entries method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

// This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});

const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

function entries(obj) {
    let result = [];
    for(let key in obj){
        result.push([key, obj[key]])
    }
    return result;
}

console.log(entries(obj2))


/*     INSERT 
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
*/
function insert(tableName, columnValuePairs) {
    let str1 = ""
    let str2 = ""
    for (let key in columnValuePairs) {
        str1 += key + ", "
        str2 += columnValuePairs[key] + ", "
    }
    return `INSERT INTO ${tableName} (${str1.slice(0, -2)}) VALUES (${str2.slice(0, -2)});`
}

console.log(insert(table, insertData1))

/* **********************************************************************************
    * FIND OBJECTS* 
Given a search criteria object whose values will only be
primitives (ints, strings, booleans) and a list of objects.
return any object that matches all the key value pairs in the search
criteria object.
*//**
 * Finds the objects that match the given search criteria.
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjects(criteria, collection) {
    let result
    for (let key in criteria) {
        result = collection.filter(person => person[key] === criteria[key]);
    }
    return result
}

// Version 2
function findObjects1(criteria, collection) {
    var toReturn = [];
    for (var i=0; i<collection.length; i++) {
        var toAdd = true;
        for (const [key, value] of Object.entries(criteria)) {
            if (collection[i][key] !== value) {
                toAdd = false;
                break;
            }
        }
        if (toAdd) {
            toReturn.push(collection[i]);
        }
    }
    return toReturn;
}

// Functional Programming solution
const findObjects2 = (criteria, collection) => {
    collection.filter((student) => {
        Object.keys(criteria).every((key) => student[key] === criteria[key])
    })
}
console.log(findObjects2(searchCriteria1, items))


/*    * FIND BY AND UPDATE *
Given an id, an object that has keys with corresponding updated values, and an array of objects
Find the object by "id" key that matches the given id value and then update that object's
keys with the provided new values.
Return the updated object, or null if no object was found
*//**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * @param {number} id
 * @param {Object} updatedVals Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
};
const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
};
/* 
Explanation: In this implementation
randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

function findByIdAndUpdate(id, updatedVals, collection) {
    let personArr = collection.filter(item => item.id === id)
    if (personArr.length != 0) {
        person = personArr[0]
    } else {
        return null;
    }
    for (let key in person) {
        if (updatedVals[key]) {
            person[key] = updatedVals[key];
        }
    }
    return person
}

// Version 2
function findByIdAndUpdate2(id, updatedVals, collection) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
            for (const [key, value] of Object.entries(updatedVals)) {
                if (collection[i][key]) {
                    collection[i][key] = value;
                }
            }
            return collection[i];
        }
    }
}

console.log(findByIdAndUpdate(id1, updateData1, students))
console.log(findByIdAndUpdate(id2, updateData2, students))
console.log(findByIdAndUpdate(id3, updateData3, students))

/* **************************************************************************************

    * FILTER BY KEY *
Given an array of objects, a searchFor string, and searchBy key that exists in the object
return a new array of only those objects whose value for the given key starts with the given search string
You can assume the key will exist on the object and the value of that key will be a string
Bonus: make the search case insensitive
Bonus: re-write it with functional programming in mind, using built in methods
Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*//**
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchBy The key to search by.
 * @param {string} searchFor The value of the given key to search for.
 * @returns {Array<Objects>} The matched items.
 */

const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const searchMethod1 = 'includes';
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
];

function filterByKey(items, searchFor, searchBy) {
    let name =[];
    for(let i = 0; i < items.length -1; i++){
        if(items[i][searchBy].includes(searchFor)){
            name.push(items[i])
        }
    }
    return name;
}
console.log(filterByKey(people, searchFor3, searchBy3))

// Version 2
function filterByKey2(items, searchFor, searchBy, searchMethod) {
    switch (searchMethod) {
        case 'startsWith':
            return items.filter((item) => item[searchBy].toLowerCase().startsWith(searchFor.toLowerCase()));
        case 'includes':
            return items.filter((item) => item[searchBy].toLowerCase().includes(searchFor.toLowerCase()));
        case 'endsWith':
            return items.filter((item) => item[searchBy].toLowerCase().endsWith(searchFor.toLowerCase()));
    }
}

// Version 3
function filterByKey3(items, searchFor, searchBy) {
    return items.filter((item) => item[searchBy].toLowerCase().startsWith(searchFor.toLowerCase()));
}

console.log(filterByKey2(people, searchFor4, searchBy4, searchMethod4))

const filteredList = filterByKey(people, searchFor3, searchBy3)
console.log(filteredList)

module.exports = { filterByKey };

/* 
Given an array of person objects with the following keys:
    return a new array of the names of people (not friends) who are at high risk of infection
    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid
*//**
 * @param {Array<Person>} persons
 * @returns {Array<string>}
 */

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const expected = ["Person One", "Person Three"];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */


function coronaVirusAtRisk(persons) {
    var atRiskPeople = [];
    persons.forEach((person) => {
        if (person.isSocialDistancing === false) {
            var atRisk = false;
            person.friends.forEach((friend) => {
                if (friend.isSocialDistancing === false && friend.hasCovid === true) {
                    atRisk = true;
                }
            })
            if (atRisk === true) {
                atRiskPeople.push((person.firstName + " " + person.lastName));
            }
        }
    })
    return atRiskPeople;
}

const theInfected = coronaVirusAtRisk(people)

console.log(theInfected)

/* ******************************************************************************* */

/* 
Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here):
    https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d
The more you deal with objects, especially ones with many nested objects, where you
are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null

These errors mean, somewhere along your chain of dots, one of the keys did not exist
on the object so it returned undefined, and then the next dot was trying to access
a key on undefined, or the key did exist but null was it's value.
One example of how this might happen is getting JSON data back from an API. Sometimes,
the record you requested has more data so there are more levels of nesting, which you get used to,
so you write your code to access the nested data but then you request a different record, and
less data is available, so your code breaks when trying to access nested data that isn't there.
There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
you look through a "lens" to help you see into an object and safely attempt to access a nested value.
Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
one at a time, to make sure it is not undefined or null before going to the next dot.
Input:
    Object,
    Array of strings representing a path of keys in the Object
Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
    - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*//**
 * Retrieves the value at the end of the path of keys or null.
 * @param {Object<string, any>} obj
 * @param {Array<string>} keys
 * @returns {any} The value at end of path of given keys or null.
 */

const user = {
    id: 101,
    email: "jack@dev.com",
    personalInfo: {
        name: "Jack",
        address: {
            line1: "westwish st",
            line2: "washmasher",
            city: "wallas",
            state: "WX",
        },
    },
    favorites: {
        number: 0,
    },
};

const keys1 = ["personalInfo", "address", "city"];
const expected1 = "wallas";

const keys2 = ["personalInfo", "address", "country"];
const expected2 = null;

const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
const expected3 = null;

const keys4 = ["favorites", "number"];
const expected4 = 0;

const keys5 = [];
const expected5 = user;

function lens(obj, keys) {
    for(let i = 0; i <= obj.length -1; i++){
        obj === undefined ? null : obj = obj[keys[i]];
    }
    return obj;
}

console.log(lens(user, keys1))


/*****************************************************************************/

/* 
Create a function to determine the max amount of servings that can be made based on a recipe and
available ingredients.
Input:
- recipe object where keys are ingredient names
    and values are unit required (int)
- available ingredients object where keys are ingredient
    names and values are unit available (int)
Output:
int (max servings)
*//**
 * Determines how many servings can be made of the given recipe.
 * @typedef {string} IngredientName
 * @typedef {number} Quantity
 * @typedef {Object<IngredientName, Quantity>} Ingredients
 * @param {Ingredients} recipe
 * @param {Ingredients} available
 * @returns {number} Max servings of the recipe that can be made.
 */

const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;
// because only 1 live squid is available and that is the limiting ingredient

// same as available1, except live squid has 10.
const available2 = { ...available1, ["live squid"]: 10 };
const expected2 = 10;

// same as available1 except live squid key is deleted.
const available3 = { ...available1 };
delete available3["live squid"];
const expected3 = 0; // live squid key doesn't exist in available ingredients


function getMaxServings(recipe, available) {
    var maxServings;
    for (const [keys] of Object.entries(recipe)) {
        if (available[keys] === undefined || maxServings === 0) {
            return 0;
        } else {
            let numOfServings = Math.floor(available[keys] / recipe[keys])
            if (maxServings === undefined) {
                maxServings = numOfServings;
            } else if (numOfServings < maxServings) {
                maxServings = numOfServings;
            }
        }
    }
    return maxServings;
}

/*****************************************************************************/

/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "cradle of civilization": [
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {
    let grouped = {}
    let cat;
    for (let i = 0; i < items.length; i++) {
        cat = items[i].category.toLowerCase()
        if (!(cat in grouped)) {
            grouped[cat] = [items[i]]
        } else {
            grouped[cat].push(items[i])
        }
    }
    return grouped;
}
console.log(groupObjects(objects));

/* 
Given two strings S and T containing only lowercase letters and "#" characters,
return if they are equal when both are typed into empty text editors.
# character means a backspace character.
i.e., after processing the backspaces, are the two strings equal?
Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */

function backspaceStringCompare(S, T) {
    var string1 = '';
    var string2 = '';
    var k = S.length - 1;
    var j = T.length - 1;
    var kBack = 0;
    var jBack = 0;
    while (k >= 0 || j >= 0) {
        if (S[k] === '#') {
            kBack++;
            k--;
        } else {
            if (kBack > 0) {
                kBack--;
                k--;
            } else if (S[k] !== undefined) {
                string1 = S[k] + string1;
                k--;
            }
        }
        if (T[j] === '#') {
            jBack++;
            j--;
        } else {
            if (jBack > 0) {
                jBack--;
                j--;
            } else if (T[j] !== undefined) {
                string2 = T[j] + string2;
                j--;
            }
        }
    }
    return string1 === string2;
}