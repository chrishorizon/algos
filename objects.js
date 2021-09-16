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
