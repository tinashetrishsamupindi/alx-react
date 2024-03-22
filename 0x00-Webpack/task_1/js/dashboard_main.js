import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(${count} clicks on the button);
}

$('#root').append('<p>Holberton Dashboard</p>');
$('#root').append('<p>Dashboard data for the students</p>');
$('#root').append('<button id="clickButton">Click here to get started</button>');
$('#root').append('<p id="count"></p>');
$('#root').append('<p>Copyright - Holberton School</p>');

$('#clickButton').on('click', _.debounce(updateCounter, 500));

