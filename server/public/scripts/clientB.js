let value1; // declare global variables, these are the users calc inputs based on buttons clicked
let value2;
let opType;
let equalsPressed = false;

$(readyNow);

function readyNow() { // enables event handlers, ontains array of calculation history from server
    eventHandlers();
    getAllCalcs() // calls to maintain history on page upon refresh until history is reset by user
}

// Primary, opertational functions **

function setValues(){ // sets value1 and value2 based on number spushed by user
    let valueIn = $(this).val();
    
    if (value1 == undefined && opType == undefined) { // if no buttons have been pressed, set initial value1
        value1 = valueIn;
        $('#displayDiv').text(valueIn); // displays number on DOM
    }
    else if(opType == undefined){ // if opType still hasn't been pushed, append new value to value1
        value1 = value1 + valueIn;
        $('#displayDiv').append(valueIn); // appends number on DOM
    }
    else if (value2 === undefined) { // if opType has been set and value2 is udf, set initial value of 2
        value2 = valueIn;
        $('#displayDiv').text(valueIn); // displays number on DOM
    }
    else {
        value2 = value2 + valueIn;
        $('#displayDiv').append(valueIn); // appends number on DOM
    }
}
function setOpType(){ // sets opType based on opType button pushed by user
    let opTypeIn = $(this).val();
    opType = opTypeIn;
    $('#displayDiv').text(opTypeIn)
}
function sendCalcData(){ // ajax 'POST' method, sends new object to server for processing
    let calcInputs = {value1: value1, value2: value2, calcType: opType};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) { 
        value1 = undefined;
        value2 = undefined;
        opType = undefined;
        clearInputs(); 
        getAllCalcs(); 
    }).fail(function(response) {
    })
}
function getAllCalcs() { // ajax 'GET' mothod, obtains calc. history array from server, appends to DOM
    $.ajax({
        type: 'GET',
        url: '/total'
    }).done(function(response){
        appendToDom(response); // response is calcHistoryArray from server
    })

    
}
function appendToDom(calcHistory) { // loops over calcHistoryArray, appends to DOM as new table row
    $('#historyBody').empty();
    for (let i = 0; i < calcHistory.length; i++) {
        let tr = $('<tr id="historyRow"></tr>');
        tr.append('<td class="historyCel">' + calcHistory[i].value1 + '</td>');
        tr.append('<td class="historyCel">' + calcHistory[i].calcType + '</td>');
        tr.append('<td class="historyCel">' + calcHistory[i].value2 + '</td>');
        tr.append('<td class="historyCel">' + calcHistory[i].total + '</td>');
        $('#historyBody').append(tr);
        $('#displayDiv').empty();
        $('#displayDiv').append(calcHistory[i].total);
    }
}
function resetPage () { // ajax 'PUSH' method, clears DOM table, sends an emptyArray to server to clear out calc history
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

// Secondary, listener and cleanup functions

function eventHandlers() { // routes to corresponding POST request function based on op type button clicked

    $('#refreshBtn').on('click', resetPage);
    $('.numberBtn').on('click', setValues);
    $('.operatorBtn').on('click', setOpType);
    $('#equalsBtn').on('click', sendCalcData);
    $('#clearBtn').on('click', clearValues);
}
function clearInputs(){ // resets value in input fields upon submitting a calculations
    $('#value1In').val('');
    $('#value2In').val('');
}
function clearValues(){ // resets calculator values to clear calc screen;
    value1 = undefined;
    value2 = undefined;
    opType = undefined;
    $('#displayDiv').text('');
}