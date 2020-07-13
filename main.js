"use strict"
//
// function myFunction() {
//     var input, filter, div, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < div.length; i++) {
//         a = div[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             div[i].style.display = "";
//         } else {
//             div[i].style.display = "none";
//         }
//     }
// }
//in the search bar, when the user input is equal in type and value to any bootstrap card
//display that boostrap card(s)
//
// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

var searchBar = document.querySelector("#myInput");
searchBar.addEventListener("input", updateCoffees)


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    //add boostrap classes here
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    var filteredCoffees = [];
    var regex = new RegExp(searchBar.value, 'gi');
    coffees.forEach(function (coffee) {
        // global and case insensitive == gi
//if selected roast is != to empty string do things
        //else test if regex matches
        //selected roast matches coffee roast
        if (regex.test(coffee.name)) {
            if (coffee.roast === selectedRoast || selectedRoast === "") {

            filteredCoffees.push(coffee);
            }
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Einstein', roast: 'light'},
    {id: 2, name: 'Jennifer', roast: 'light'},
    {id: 3, name: 'HoverBoards dont work on water', roast: 'light'},
    {id: 4, name: 'Time Train', roast: 'medium'},
    {id: 5, name: '1955..1955!?!', roast: 'medium'},
    {id: 6, name: 'Save The Clock Tower', roast: 'medium'},
    {id: 7, name: 'Flying Delorean', roast: 'dark'},
    {id: 8, name: 'Biff Tannon', roast: 'dark'},
    {id: 9, name: 'Tacoma blend', roast: 'dark'},
    {id: 10, name: '1.21 Gigawatts', roast: 'dark'},
    {id: 11, name: 'The Flux Capacitor', roast: 'dark'},
    {id: 12, name: 'Bolt of Lightning', roast: 'dark'},
    {id: 13, name: 'Johnny Be Good', roast: 'dark'},
    {id: 14, name: 'Enchantment Under THe Sea', roast: 'dark'},
];

var divBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//
// <<<<<<< HEAD
// tbody.innerHTML = renderCoffees(coffees.reverse());
// =======
divBody.innerHTML = renderCoffees(coffees.reverse());
// >>>>>>> f8d2496060f72a3373f716d3a80f679b296c7caa

submitButton.addEventListener('click', updateCoffees);