
$(readyNow);

function readyNow() {
    console.log('jQuery sourced');
    eventHandlers();
}

function eventHandlers() { 
    $('#addBtn').on('click', addVals);
    $('#subtractBtn').on('click', subtractVals);
    $('#multiplyBtn').on('click', multiplyVals);
    $('#divideBtn').on('click', divideVals);
}

function addVals() {
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = 'add';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        console.log('monkey');
        appendToDom(response);
    }).fail(function(response) {
        console.log('bear');
    })
    clearInputs();
}
function subtractVals() {
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = 'subtract';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
    }).fail(function(response) {
    })
    clearInputs();
}
function multiplyVals() {
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = 'multiply';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
    }).fail(function(response) {
    })
    clearInputs();
}
function divideVals() {
    let val1In = parseInt($('#value1In').val());
    let val2In = parseInt($('#value2In').val());
    let calcTypeIn = 'divide';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
    }).fail(function(response) {
    })
    clearInputs();
}
function clearInputs(){
    $('#value1In').val('');
    $('#value2In').val('');
}

function getAllCalcs() {
    $.ajax({
        type: 'GET',
        url: '/total'
    }).done(function(response){
        console.log('in all calcs');
        
    })
}

function appendToDom(calcInputs) {
    for (let calc of calcInputs) {
        $('#historyBody').append(calc);
    }
}