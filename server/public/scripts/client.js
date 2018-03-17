
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
    let val1In = $('#value1In').val();
    let val2In = $('#value2In').val();
    let calcTypeIn = 'add';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    console.log(calcInputs);
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        console.log('hell yes');
    }).fail(function(response) {
        console.log('Noooooooo');
    })
}
function subtractVals() {
    let val1In = $('#value1In').val();
    let val2In = $('#value2In').val();
    let calcTypeIn = 'subtract';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    console.log(calcInputs);
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        console.log('hell yes');
    }).fail(function(response) {
        console.log('Noooooooo');
    })
}
function multiplyVals() {
    let val1In = $('#value1In').val();
    let val2In = $('#value2In').val();
    let calcTypeIn = 'multiply';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    console.log(calcInputs);
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        console.log('hell yes');
    }).fail(function(response) {
        console.log('Noooooooo');
    })
}
function divideVals() {
    let val1In = $('#value1In').val();
    let val2In = $('#value2In').val();
    let calcTypeIn = 'divide';
    let calcInputs = {value1: val1In, value2: val2In, calcType: calcTypeIn};
    console.log(calcInputs);
    $.ajax({
        type: 'POST',
        data: calcInputs,
        url: '/total'
    }).done(function(response) {
        console.log('hell yes');
    }).fail(function(response) {
        console.log('Noooooooo');
    })
}
  