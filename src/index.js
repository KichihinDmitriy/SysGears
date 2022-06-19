// Task 1 App to convert between distance units

const data = {
    "distance": {"unit": "m", "value": ""},
    "convert_to": "m"
};

const units = {
    "m": 1000,
    "cm": 10,
    "in": 25.4,
    "ft": 304.8,
    "mm": 1,
    "yd": 914.4,
    "km": 1e+6
};

const selectFrom = document.querySelector('.select-from');
const selectTo = document.querySelector('.select-to');
const inputFrom = document.querySelector('.input-from');
const inputTo = document.querySelector('.input-to');

const unitsArray = Object.keys(units);
const listOfUnits = unitsArray.reduce((acc, unit) => acc + `<option>${unit}</option>`, '');

selectFrom.innerHTML = listOfUnits;
selectTo.innerHTML = listOfUnits;

const convert = function () {

    let convertValue = data.distance.value;
    let convertFrom;
    let convertTo;

    for (const key in units) {

        if(key === data.distance.unit) {
            convertFrom = units[key];
        }

        if(key === data.convert_to) {
            convertTo = units[key];
        }
    };

    const convertResult = convertValue * (convertFrom / convertTo);

    inputTo.value = convertResult.toFixed(2);
    
    const dataOutput = {"unit": data.convert_to, "value": convertResult.toFixed(2)};
    console.log(dataOutput);
};

inputFrom.addEventListener('input', (e) => {
    data.distance.value = e.target.value;
    convert();
});
// inputTo.addEventListener('input', (e) => {
//     data.distance.value = e.target.value;
//     convert();
// });
selectFrom.addEventListener('change', (e) => {
    data.distance.unit = e.target.value;
    convert();
});
selectTo.addEventListener('change', (e) => {
    data.convert_to = e.target.value;
    convert();
});

// Task 2 App for sorting and selecting data

const jsonRequest = {
    // "data": [
    //     {"name": "John", "email": "john2@mail.com"},
    //     {"name": "John", "email": "john1@mail.com"},
    //     {"name": "Jane", "email": "jane@mail.com"}]

    "data": [
        {"user": "mike@mail.com", "rating": 20, "disabled": false},
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "john@mail.com", "rating": 25, "disabled": true}]
};

const sortCondition = {
    // "condition": {
    //     "include": [{"name": "John"}],
    //     "sort_by": ["email"]}

    "condition": {
        "exclude": [{"disabled": true}],
        "sort_by": ["rating"]}
};

const selectSortDataFn = function (jsonRequest, sortCondition) {

    const include = sortCondition.condition.include[0].name;
    const sort_by = sortCondition.condition.sort_by[0];

    const includedInArray = jsonRequest.data.filter( user => user.name === include);

    const sortedArray = includedInArray.sort((a, b) => {
        let A = a[sort_by].toLowerCase();
        let B = b[sort_by].toLowerCase();
    
        if (A < B)
          return -1
        if (A > B)
          return 1
        return 0
    });

    const resultJS = {
        result: sortedArray
    };

    const resultJSON = JSON.stringify(resultJS);

    console.log(resultJSON);
};

selectSortDataFn(jsonRequest, sortCondition);

// Task 3 Programmable questionnaire

