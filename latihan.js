var btn = document.getElementById('btn');
var btnT = document.getElementById('btnT');
const a = document.querySelectorAll('html')


const b = document.querySelector('#btn')
b.addEventListener('click' , function(){
    btnT.innerHTML = 'SLEEP ON'
    btn.classList.add("active")
    for(let i = 0; i < a.length; i++){
a[i].style.backgroundColor = 'black';

} 
})


// btn.onclick = function(){
//     btnT.innerHTML = "Dark ON";
//     btn.classList.add("active");
// }           
