/*
* Title: dummy text generator
* Description: people can generate 1 to 9 numbers of paragraph with dummy text
* Author: Samin Yasar 
* Date: 21/11/12020
*/

// select all necessary elements

const inputEl = document.querySelector('.input');
const input = document.querySelector('.number-input');
const btn = document.querySelector('.btn');
const outputEl = document.querySelector('.output');
const allData = {
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quasi numquam tenetur! Sapiente ipsum officiis doloribus, quia reprehenderit voluptate fugit iste pariatur tempora similique autem accusantium iusto vero dolore rerum."
}

// addeventlistener

btn.addEventListener('click', btnFunction);

// all functionality

function btnFunction() {
    let quantity = input.value;
    if (quantity < 1) {
        quantity = 1;
    } else if (quantity > 9) {
        quantity = 9;
    }
    deletePrevious();
    for (let i = 1; i <= quantity; i++) {
        let output = document.createElement('p');
        output.classList.add('output-para');
        output.innerText = allData.para;
        outputEl.appendChild(output);
    }
}

function deletePrevious() {    
    let outputCheck = document.querySelector('.output').querySelectorAll('p');
    if(outputCheck.length > 0) {
        for (let i = 0; i < outputCheck.length; i++) {
            outputCheck[i].remove("p");
        }
    }
}
