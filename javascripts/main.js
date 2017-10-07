"use strict";

let treeContainer = document.getElementById("treeContainer");
let currentTreeHouse = "";

const writeToDom = (data) => {
    let treeHouseString = "";
    for (let i = 0; i < data.badges.length; i++) {
        currentTreeHouse = data.badges[i];

        treeHouseString += `<div class="col-sm-6 col-md-4">`;
        treeHouseString += `<div class="thumbnail">`;
        treeHouseString += `<img src="${currentTreeHouse.icon_url}" alt="tree">`;
        treeHouseString += `<div class="caption">`;
        treeHouseString += `<h3>${currentTreeHouse.id}</h3>`;
        treeHouseString += `<p>is a ${currentTreeHouse.name}</p>`;
        treeHouseString += `</div></div></div>`;

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




module.exports = {writeToDom};












