let form=document.querySelector('form');
let textinput=document.querySelector('.inputtext');
let content=document.querySelector('.content ul');
let clearbttn=document.querySelector('.clear-bttn');

/*arr for local storage*/
let arr=JSON.parse(localStorage.getItem('items'))?JSON.parse(localStorage.getItem('items')):[];

let arr2=JSON.parse(localStorage.getItem('items'))?JSON.parse(localStorage.getItem('items')):[];
arr2.forEach(ele => {
    drawUi(ele);
});

function drawUi(text){
    content.innerHTML +=`
        <li>${text}</li>
    `
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    drawUi(textinput.value)
    arr.push(textinput.value);
    localStorage.setItem('items',JSON.stringify(arr))

    textinput.value='';
})