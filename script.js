function ageInDays() {
    var birthYear = prompt('What year you were born?');
    var ageInDayss = (2020-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("Your Age Is " +ageInDayss+ " Days");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}