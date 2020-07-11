"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div>' + coffee.name + '</div>';
    html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    divBody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Einstein Blend', roast: 'light'},
    {id: 2, name: 'Jennifer Blend', roast: 'light'},
    {id: 3, name: 'HoverBoard Blend', roast: 'light'},
    {id: 4, name: 'Time Train', roast: 'medium'},
    {id: 5, name: '1955..1955!?! Blend', roast: 'medium'},
    {id: 6, name: 'Clock Tower Blend', roast: 'medium'},
    {id: 7, name: 'Delorean Blend', roast: 'dark'},
    {id: 8, name: 'Biff Tannon Blend', roast: 'dark'},
    {id: 9, name: 'Tacoma blend', roast: 'dark'},
    {id: 10, name: '1.21 Gigawatt Blend', roast: 'dark'},
    {id: 11, name: 'Flux Capacitor Blend', roast: 'dark'},
    {id: 12, name: 'Bolt of Lightning', roast: 'dark'},
    {id: 13, name: 'Johnny Be Good Blend', roast: 'dark'},
    {id: 14, name: 'Enchantment Under THe Sea Blend ', roast: 'dark'},
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
