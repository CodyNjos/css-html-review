$(document).ready(readyNow);
function readyNow() {
    console.log('jQuerry & js linked');
    $('input').mouseenter(whiteHighlight);
    $('input').mouseleave(noHighlight);
    $('#submitPerson').on('click', submit2);
    $('h3').on('click', displayColor);
    $('ul').on('contextmenu', textBlack);
    $('ul').on('click', textRed);
    $('footer').on('dblclick', backgroundFlip);
    $('footer').on('click', backgroundReset)
}
let person = []

function whiteHighlight() {
    $(this).css('border-color', 'white');
}
function noHighlight() {
    $(this).css('border-color', '');
}
function displayColor() {

    let color = $(this).css("background-color");
    console.log(color);
    $("#colorPost").html('' + color);
}
function textRed() {
    $(this).css('color', 'red');
}
function textBlack() {
    $(this).css('color', 'black');
}
function backgroundFlip() {
    $('body').css('background-color', 'blanchedalmond');
    $('h1').css('border-color', '#c4cc8c');
    $('div').css('border-color', '#c4cc8c');
    $('footer').css('border-color', '#c4cc8c');
    $('footer').css('background-color', '#c4cc8c');
    console.log('Flip');
}
function backgroundReset() {
    $('body').css('background-color', '#c4cc8c');
    $('h1').css('border-color', 'blanchedalmond');
    $('div').css('border-color', 'blanchedalmond');
    $('footer').css('border-color', 'blanchedalmond');
    $('footer').css('background-color', 'blanchedalmond');
    console.log('Reset Flip');
}
function submit(firstName, middleName, lastName) {
    let list = $('#list')
    const personSubmit = {
        first: firstName,
        middle: middleName,
        last: lastName,
    }

    person.push(personSubmit);
    list.append('<li>' + firstName + ' ' + middleName + ' ' + lastName + '</li>');
    console.log(person);
    return true;
}
function submit2() {
    let firstName2 = $('#firstName').val();
    let middleName2 = $('#middleName').val();
    let lastName2 = $('#lastName').val();

    if (firstName2 === '' && lastName2 === '') {
        alert('Please Enter, At Minimun, A First And Last Name')
        return false;
    }
    submit(firstName2, middleName2, lastName2)

    $('#firstName').val('');
    $('#middleName').val('');
    $('#lastName').val('');
}


