let value1; // declare global variables, these are the users calc inputs based on buttons clicked
let value2;
let opType;

$(readyNow);

function readyNow() { // enables event handlers, ontains array of calculation history from server
    eventHandlers();
    getAllCalcs() // calls to maintain history on page upon refresh until history is reset by user
}
function eventHandlers() { // routes to corresponding POST request function based on op type button clicked
    // $('#addBtn').on('click', addVals);
    // $('#subtractBtn').on('click', subtractVals);
    // $('#multiplyBtn').on('click', multiplyVals);
    // $('#divideBtn').on('click', divideVals);
    $('#refreshBtn').on('click', resetPage);
    $('.numberBtn').on('click', setValues);
    $('.operatorBtn').on('click', setOpType);
    $('#equalsBtn').on('click', sendCalcData);
    $('#clearBtn').on('click', clearValues);
}

function setValues(){ // sets value1 and value2 based on number pushed by user, ignores if already set
    let valueIn = $(this).val();
    console.log($(this).val());
    if (value1 == undefined) { // check to see if value1 and value2 are already assigned, if so, ignore input
        value1 = valueIn;
    }
    else if (value2 == undefined) {
        value2 = valueIn;
    }
    else {
    }
    console.log(value1, value2);
}

function setOpType(){ // sets opType based on opType button pushed by user
    let opTypeIn = $(this).val();
    opType = opTypeIn;
    
}

function sendCalcData(){
    let calcInputs = {value1: value1, value2: value2, calcType: opType};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) { // response is '200', success
        console.log('Yes!!!!!');
        
        clearInputs(); 
        getAllCalcs(); 
    }).fail(function(response) {
    })
}

function addVals() { // packages user inputs in an object, sends to server, appends to DOM on success
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = '+';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) { // response is '200', success
        clearInputs(); 
        getAllCalcs(); 
    }).fail(function(response) {
    })
}
function subtractVals() { // packages user inputs in an object, sends to server, appends to DOM on success
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = '-';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        clearInputs();
        getAllCalcs();
    }).fail(function(response) {
    })
}
function multiplyVals() { // packages user inputs in an object, sends to server, appends to DOM on success
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = '*';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        clearInputs();
        getAllCalcs();
    }).fail(function(response) {
    })
}
function divideVals() { // packages user inputs in an object, sends to server, appends to DOM on success
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = '/';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        clearInputs();
        getAllCalcs();
    }).fail(function(response) {
    })
}

function getAllCalcs() { // obtains calc. history array from server, appends to DOM
    $.ajax({
        type: 'GET',
        url: '/total'
    }).done(function(response){
        appendToDom(response); // response is calcHistoryArray from server
        console.log(response);
    })

    
}

function appendToDom(calcHistory) { // loops over calcHistoryArray, appends to DOM as new table row
    $('#historyBody').empty();
    for (let i = 0; i < calcHistory.length; i++) {
        let tr = $('<tr></tr>');
        tr.append('<td>' + calcHistory[i].value1 + '</td>');
        tr.append('<td>' + calcHistory[i].calcType + '</td>');
        tr.append('<td>' + calcHistory[i].value2 + '</td>');
        tr.append('<td>' + calcHistory[i].total + '</td>');
        $('#historyBody').append(tr);
    }
}

function resetPage () { // clears DOM table, sends an emptyArray to server to clear out calc history
    value1 = undefined;
    value2 = undefined;
    opType = undefined;
    $('#historyBody').empty();
    let emptyArray = [];
    $.ajax({
        type: 'POST',
        data: emptyArray,
        url: '/reset'
    }).done(function(response){
    }).fail(function(response){
    })
}

function clearInputs(){ // resets value in input fields upon submitting a calculations
    $('#value1In').val('');
    $('#value2In').val('');
}
function clearValues(){ // resets calculator values to clear calc screen;
    value1 = undefined;
    value2 = undefined;
    opType = undefined;
}