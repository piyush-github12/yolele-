gsap.to("#page2 #mainimage",{
         transform: `translate(-50%,-110%)`,

        scrollTrigger:{
        trigger:"#mainimage",
        scroller:"body",
        scrub: 1,
        start:"top 70%",
        end:"top 40%",



    }
})

gsap.to("#overlay #nav3",{
  y:-200,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#youmay",
    scroller:"body",
    scrub:1,
    start:"10% 90%",
    end:"10% 70%",

  }

})

// var nav1 = document.querySelector("#nav1")

// window.addEventListener("scroll",function(dets){
//     nav1.style.scroll = `-50px`
// })





var lastScrollTop; // This Varibale will store the top position

navbar = document.querySelector("#nav1"); // Get The NavBar

window.addEventListener("scroll", function () {
  //on every scroll this funtion will be called

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop && scrollTop >100) {
    //if it will be greater than the previous
    navbar.style.top = "-60px";
    //set the value to the negetive of height of navbar
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop; //New Position Stored
});






var leftcartspan  = document.querySelector("#leftcart #cross");
var cart = document.querySelector("#nav2prt2 h5");
var leftcart  = document.querySelector("#leftcart");
var overlay = document.querySelector("#overlay")


cart.addEventListener("click", function () {
  leftcart.style.right = 0;
  overlay.style.backgroundColor = " rgba(249, 223, 190, 0.23)";
});

leftcartspan.addEventListener("click",function(){

    leftcart.style.right = "-32vw"
    overlay.style.backgroundColor = " transparent";


})
