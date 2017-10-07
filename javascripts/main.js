"use strict";

let treeContainer = document.getElementById("treeContainer");
let currentTreeHouse = "";

const writeToDom = (data) => {
    let treeHouseString = "";
    for (let i = 0; i < data.badges.length; i++) {
        currentTreeHouse = data.badges[i];
        // treeHouseString += `<div class="container">`;
        treeHouseString += `<img src="${currentTreeHouse.icon_url}" alt="tree">`;
        // treeHouseString += `</div>`;

    }
    treeContainer.innerHTML = treeHouseString;
};


    $.ajax({
            method: 'GET',
            url: 'https://teamtreehouse.com/matthewhensley2.json'
        }).done((data) => {
        	writeToDom(data);
            console.log(data);
        }).fail((error) => {

        });


$('#clearButton').click(() => {
	$('#treeContainer').animate({
    height: "toggle"
	});
});















