$( document ).ready(readyNow);
function readyNow() {
    console.log('jQuerry & js linked');
    $( 'input' ).mouseenter( whiteHighlight );
    $( 'input' ).mouseleave( noHighlight);
    $( '#submitPerson').on( 'click' , submit2);

}



let person = []


function whiteHighlight() {
    $( this ).css('border-color' , 'white');
}
function noHighlight() {
    $( this ).css('border-color' , '')
}
function submit(firstName, middleName , lastName) {
   
    const personSubmit = {
        first : firstName,
        middle : middleName ,
        last : lastName,
    }
    person.push(personSubmit);
    console.log(person);
    return true;
}
    

function submit2() {
    let firstName2 = $( '#firstName' ).val();
    let middleName2 = $( '#middleName' ).val();
    let lastName2 = $( '#lastName' ).val();
    let list = $('#list')
   
    submit(firstName2 , middleName2 , lastName2)
    list.append( '<li>' + firstName2 + ' ' + middleName2 + ' ' + lastName2 + '</li>');
    $( '#firstName' ).val('');
    $( '#middleName' ).val('');
    $( '#lastName').val('');
}
