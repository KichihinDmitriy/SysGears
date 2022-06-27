// Task 2 App for sorting and selecting data

const jsonRequest = {
    // "data": [
    //     {"name": "John", "email": "john2@mail.com"},
    //     {"name": "John", "email": "john1@mail.com"},
    //     {"name": "Jane", "email": "jane@mail.com"}]

    // "data": [
    //     {"user": "mike@mail.com", "rating": 20, "disabled": false},
    //     {"user": "greg@mail.com", "rating": 14, "disabled": false},
    //     {"user": "john@mail.com", "rating": 25, "disabled": true}]
};

const sortCondition = {
    // "condition": {
    //     "include": [{"name": "John"}],
    //     "sort_by": ["email"]}

    // "condition": {
    //     "exclude": [{"disabled": true}],
    //     "sort_by": ["rating"]}
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

// selectSortDataFn(jsonRequest, sortCondition);