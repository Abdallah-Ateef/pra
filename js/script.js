let allitems=document.querySelectorAll('.product div');
let content=document.querySelector('.content');
let bttn=document.querySelector('.bttn');
let Total_price=0;
allitems.forEach(ele =>{
   ele.addEventListener('click',function(){
    content.innerHTML+=`${ele.children[1].textContent} - `;
    let price=ele.children[1].getAttribute('data-price');
    Total_price+=Number(price);
    console.log(price);
    if(content !='')bttn.style.display='block';
   
   })
})

bttn.addEventListener('click',function(){
   let pr=document.querySelector('.price');
   pr.style.display='block';
   pr.innerHTML=`Total-price : ${Total_price}`;
})


