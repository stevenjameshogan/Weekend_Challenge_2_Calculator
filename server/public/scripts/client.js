
$(readyNow);

function readyNow() {
    eventHandlers();
    getAllCalcs()
}
function eventHandlers() { 
    $('#addBtn').on('click', addVals);
    $('#subtractBtn').on('click', subtractVals);
    $('#multiplyBtn').on('click', multiplyVals);
    $('#divideBtn').on('click', divideVals);
    $('#refreshBtn').on('click', resetPage);
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
    }).fail(function(response) {
    })
    clearInputs();
    getAllCalcs()
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
    getAllCalcs()
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
    getAllCalcs()
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
    getAllCalcs()
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
        appendToDom(response);
        console.log(response);
    })

    
}

function appendToDom(calcHistory) {
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

function resetPage () {
    $('#historyBody').empty();
    let emptyArray = [];
    $.ajax({
        type: 'POST',
        data: emptyArray,
        url: '/reset'
      }).done(function(response){
        
        }).fail(function(response){x
      })
}
