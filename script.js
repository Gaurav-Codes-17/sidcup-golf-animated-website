let cursor = document.querySelector(".cursor");
let blurcursor = document.querySelector(".blurcrsr");


window.addEventListener("mousemove", (dets) => {
  blurcursor.style.transform = `translate(${dets.clientX - 115}px, ${dets.clientY - 115}px)`;
});

function height(){
  let height = 130;
  let heightNav = document.querySelector("nav");
  heightNav.style.height = height;
}

gsap.to("nav", {
  backgroundColor: "black",
height:"100px",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top top",
    onStart: height(),
    end: "top -5%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start:"top top",
    end:"top -120%",
    scrub: 2,
  },
});

gsap.from(".about-us" , {
  y:200,
  opacity:0,
  scrollTrigger:{
    trigger:".about-us",
    scroller:"body",
    start:"top bottom",
    end:"top bottom",
    scrub:2,
  }

})

gsap.from(".card", {
  scale:0.8,
  stagger:0.8,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 100%",
    end: "top 110%",
    scrub: 1,
  },
});

gsap.from(".left" , {
y:-80,
x:-100,
scrollTrigger:{
  trigger:".left",
  scroller:"body",
  scrub:3,
}
})
gsap.from(".right", {
  y: 80,
  x: 100,
  scrollTrigger: {
    trigger: ".right",
    scroller: "body",
    scrub: 3,
    end:"top bottom",
  },
});

gsap.to(".card2 p", {
  y: -40,
  scrollTrigger: {
    trigger: ".card2 p",
    scroller: "body",
    scrub: 3,
    end: "top bottom",
  },
});

let xCurr = 0;
let yCurr = 0;
let timeout;
function mouseSkew(){
window.addEventListener("mousemove" , (dets)=>{
  clearTimeout(timeout);
let xDiff= dets.x - xCurr;
xCurr = dets.x;
let yDiff = dets.y - yCurr;
yCurr = dets.y;
console.log(xDiff , yDiff)
var xscale = gsap.utils.clamp(0.8 , 1.2 , xDiff);
var yscale = gsap.utils.clamp(0.8, 1.2, yDiff);
circlemousefollower(xscale , yscale)
timeout = setTimeout(()=>{
cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
},100)
})
}

function circlemousefollower(xscale , yscale){
window.addEventListener("mousemove", (dets) => {
  cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
});}
mouseSkew()


















//gaurav sood