
$(readyNow);

function readyNow() { // enables event handlers, ontains array of calculation history from server
    eventHandlers();
    getAllCalcs()
}
function eventHandlers() { // routes to corresponding POST request function based on op type button clicked
    $('#addBtn').on('click', addVals);
    $('#subtractBtn').on('click', subtractVals);
    $('#multiplyBtn').on('click', multiplyVals);
    $('#divideBtn').on('click', divideVals);
    $('#refreshBtn').on('click', resetPage);
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