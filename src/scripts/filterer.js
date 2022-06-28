// Task 2 App for sorting and selecting data

const SelectSortData = function (jsonRequest, sortCondition) {
    this.jsonRequest = jsonRequest;
    this.sortCondition = sortCondition;

    const filter_by = sortCondition.condition;
    const sort_by = sortCondition.condition.sort_by[0];

    let includedInArray;

    if (Object.keys(filter_by).includes('include')) {
        const include = filter_by.include[0];
        const filter_key = Object.keys(include)[0];
        const filter_value = Object.values(include)[0];
        includedInArray = jsonRequest.data.filter( user => user[filter_key] === filter_value);
    } else if (Object.keys(filter_by).includes('exclude')) {
        const exclude = filter_by.exclude[0];
        const filter_key = Object.keys(exclude)[0];
        const filter_value = Object.values(exclude)[0];
        includedInArray = jsonRequest.data.filter( user => user[filter_key] !== filter_value);
    };

    const sortedArray = includedInArray.sort((a, b) => {
        let A = a[sort_by];
        let B = b[sort_by];

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

const condition1 = new SelectSortData(
    {
        "data": [
            {"name": "John", "email": "john2@mail.com"},
            {"name": "John", "email": "john1@mail.com"},
            {"name": "Jane", "email": "jane@mail.com"}]
    },
    {
        "condition": {
            "include": [{"name": "John"}],
            "sort_by": ["email"]}
    });

const condition2 = new SelectSortData(
    {
    "data": [
        {"user": "mike@mail.com", "rating": 20, "disabled": false},
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "john@mail.com", "rating": 25, "disabled": true}]
    },
    {
    "condition": {
        "exclude": [{"disabled": true}],
        "sort_by": ["rating"]}
    });