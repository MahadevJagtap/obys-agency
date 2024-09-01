<!-- var add = document.querySelector('.add');
var remove = document.querySelector('.remove');
var inp = document.querySelector('input');
var ul = document.querySelector('ul');
var li;

add.addEventListener('click',function(){
   if(inp.value.trim() === ''){}
   else{
         li = document.createElement('li');
         li.textContent = inp.value;
         ul.appendChild(li);
         inp.value = '';
   }

});
remove.addEventListener('click',function(){
  ul.removeChild(li);
 });
  -->










<!-- 
var form = document.querySelector('form');
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector('h4');


form.addEventListener('submit',function(ev){
ev.preventDefault();
for(var i = 0; i<inps.length; i++){
    if(inps[i].value.trim() === ''){
        h4.textContent = 'bhai kuch toh gadbad hai';
        h4.style.color = 'red';
        break;
    }
}
}); -->


















<!-- var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var h3 = document.querySelector('h3');
var int;

start.addEventListener('click',function(){
    var count = 0;
    int = setInterval(function(){
        h3.textContent = count;
        count++;
    },1000);
});
stop.addEventListener('click',function(){
  clearInterval(int);
    },1000); -->











<!-- 


var divs =document.querySelectorAll('.tab');
var texts =document.querySelectorAll('.text');

texts[0].style.display = 'block';
texts[0].style.width = '50%';

divs.forEach(function(div,index){
div.addEventListener('click',function(){
  hatabc();
  texts[index].style.display = 'block';
  texts[index].style.width = '50%';
});
});

function hatabc(){
  texts.forEach(function(textg){
    textg.style.display = 'none';
  })

}; -->










<!-- 
var naim = document.querySelector('.naim');
var h4 = document.querySelector('h4');
var count = 0;
var int = setInterval(function(){
  if(count === 99){
h4.style.opacity = 1;
    clearInterval(int);
  }
  count++;
  naim.style.width = count+'%';
},100); -->













<!-- 
var input = document.querySelector('input');
var data = [
    {name: "Mahadev",src:"https://images.unsplash.com/photo-1618007032127-658530e41bb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "sonali",src:"https://images.unsplash.com/photo-1722907893759-63f281d9cebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "Rajeshree",src:"https://plus.unsplash.com/premium_photo-1664099905213-b9303c9656a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"},
    {name: "pratik",src:"https://images.unsplash.com/photo-1723710428262-4110661c7218?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
    {name: "prathamesh",src:"https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"},
    {name: "pratiksha",src:"https://images.unsplash.com/photo-1721983571623-ed178f59d9b3?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]
var pers = '';
data.forEach(function(elem){
    pers += `<div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4>${elem.name}</h4>
        </div>` 
})
document.querySelector('.people').innerHTML = pers;


input.addEventListener('input',function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    var newuser = '';
matching.forEach(function(elem){
    newuser += `<div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4>${elem.name}</h4>
        </div>` 
})
document.querySelector('.people').innerHTML = newuser;
}) -->



<!-- html code


<div class="main">
    <div class="container">
        <input type="text" placeholder="Search..">
        <div class="people">


       
    </div>
</div>
    </div>
</div>

 -->


 <!-- css
 .main{
  width: 100%;
  height: 100%;
  background-color: #eee7e7;
}
.container{
padding: 10vw 27vw;
}
input{
  width: 100%;
  padding: 7px 7px;
  font-size: 20px;
  font-weight: 500;
  outline-color: royalblue;
  border-radius: 10px;
  border: 1px solid #dadada;
}
.people{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.person{
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.img{
overflow: hidden;
width: 7vw;
height:7vw;
border-radius: 50%;
border: 2px solid #dadada;

}

.img img{
  width: 100%;
  height:100%;
  object-fit: cover;
} -->







<!-- character counter
var txtcnter = document.querySelector('textarea');
var counter = document.querySelector('.counter');
txtcnter.addEventListener('input',function(){
    counter.textContent = txtcnter.value.length;
});




html
  <h3>character count : <span class="counter">0</span></h3>
<textarea></textarea>




css

body{
  padding: 40px ;
}
textarea{
  width: 400px ;
  height: 150px;
  margin-top: 20px;
  font-size: 20px ;
  font-weight: 500;
  padding: 5px 7px;
  outline-color: royalblue;
  
}

















cards\
const  getnewuser = document.querySelector('.getnewuser');
function getuser(){
    fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result => {
    const {name , gender,email,picture} = result.results[0];
    document.querySelector('.cards').innerHTML += `  <div class="card">
        <div class="img">
            <img src="${picture.large}" alt="">
        </div>
        <h3>${name.first}</h3>
        <h5>${gender}</h5>
        <h6>${email}</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione molestiae magnam cum asperiores molestias eum eius, accusamus dolores totam!</p>
    </div>`
})
}
getnewuser.addEventListener('click',function(){
    getuser();
    
});
js
 -->











 <!-- block users 
 and unblock  usrs 
 const red = document.querySelector(".red");
const green = document.querySelector(".green");

red.addEventListener('click',function(){
    localStorage.setItem('Block',true);
    show();
});
green.addEventListener('click',function(){
    localStorage.setItem('Block',false);
    show();

});
function show(){
    if(localStorage.getItem("Block") === 'false'){
        document.querySelector('h3 span').textContent = 'Not blocked';
    }
    else{  
          document.querySelector('h3 span').textContent = 'Blocked';
    }
};
show();
 -->
















 <!-- GSAP
 gsap.to('.page2 h1',{
    transform:'translateX(-60%)',
    scrollTrigger:{
        trigger:'.page2',
    scroller:'body',
    markers:true,
    start:'top 0',
    end:'top -100%',
    scrub:2,
    pin:true

    }
});var tl = timeline()
  tl.to('.box1',{
  }) -->







<!-- only for one line or h1 -->
  <!-- var h1text = document.querySelector('.firsth1').textContent
// var splittedtext = h1text.split('')
// var clutter = ""
// splittedtext.forEach(function(elem){
//   clutter += `<span>${elem}</span>`
// })
// document.querySelector('.firsth1').innerHTML = clutter; -->




<!-- this code for all h1 or you  say for all lines

function splittingtext(){
  var allh1 = document.querySelectorAll('.page2 h1')
   allh1.forEach(function(elem){
    var clutter = ''
  var h1text = elem.textContent
  var textsplitted = h1text.split('')
  textsplitted.forEach(function(e){
clutter += `<span>${e}</span>`
  })
elem.innerHTML = clutter;


})
} -->