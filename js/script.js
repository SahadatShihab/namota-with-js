let shihab =document.querySelector('.shihab')

let button = document.querySelector('.button')

let input =document.querySelector('.namota')

button.addEventListener('click', function(){
    shihab.innerHTML = ''
    if(input.value ==''){
      alert("Hello Dear! it's invalid number!!");
    }
    else{
      let i=1;
      while( i<=10){
      shihab.innerHTML +=input.value + 'x' + i + '=' + i*input.value + '<br>';
      i++
     }
    }
})









 
 