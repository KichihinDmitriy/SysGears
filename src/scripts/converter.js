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