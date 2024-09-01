function loadingAnimation(){
  var tl = gsap.timeline()
tl.from('.line h1',{
  y:150,
  stagger:0.2,
duration:0.5,
})
tl.from('.line1-part1,.last h3',{
  opacity:0,
  onStart:function(){
    var h5timer = document.querySelector('.line1-part1 h5')
var grow = 0;
setInterval(function(){
 if(grow<100){
h5timer.innerHTML = grow++;
 }
 else{
h5timer.innerHTML = grow;  
 }
},37);
  }
})
tl.to('.line h2',{
  opacity:1,
animationName:'anime'
});
tl.to('.loader',{
  opacity:0,
  duration:0.3,
  delay:3.6,
})
tl.from('.page1',{
  y:1600,
  opacity:1,
  delay:0.2,
  duration:0.5
  // ease:power4
})
tl.to('.loader',{
  display:'none'
})
tl.from('#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1',{
  y:100,
  stagger:0.2
})
tl.from('.nav-part1',{
  opacity:0,
  y:-100,
})
}
function curserAnimation(){
  document.addEventListener('mousemove',function(dets){
    gsap.to('.curser',{
      left:dets.x,
      top:dets.y
    })
  });
  Shery.makeMagnet('.nav-part1 h3')
}
loadingAnimation()

curserAnimation()
