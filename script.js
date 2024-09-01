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
  delay:4,
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