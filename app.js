// Select the section with an id of container without using querySelector.
const containerNoQuery = document.getElementById('container');

// Select the section with an id of container using querySelector.
const containerWithQuery = document.querySelector("#container");

// Select all of the list items with a class of “second”.
const allSecond = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdInOl = document.querySelector('ol .third');

// Give the section with an id of container the text “Hello!”.
function hello(){
    // This is the important part, I just set it as a function so the website would still display the lists
    containerNoQuery.innerText = 'Hello!';
}

// Add the class main to the div with a class of footer.
const divClassFooter = document.querySelector('.footer');

divClassFooter.classList.add('main');

// Remove the class main on the div with a class of footer.
divClassFooter.classList.remove('main');

// Create a new li element.
const newLi = document.createElement('li');

// Give the li the text “four”.
newLi.append('four');

// Append the li to the ul element.
const ul = document.querySelector('ul');

ul.appendChild(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const listItems = document.querySelectorAll('ol li');

// Took me an hour to figure this out because I did everything right but spelled background as 'backround' and ruined everything
for(let listItem of listItems){
    listItem.style.background = 'green';
} 
// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.backgroundColor = "green";    
// }

// Remove the div with a class of footer
// const divClassFooter = document.querySelector('.footer'); ((Already in previous step))
divClassFooter.remove();

