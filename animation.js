gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e)
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0);

gsap.from(".intro__center",{duration:1, opacity: 0,ease:"power1"});

//introduçao home

gsap.set(".introduction",{
    opacity:0,
    yPercent:-100,
      
});

gsap.to(".introduction", {
    scrollTrigger:{
      trigger: ".introduction",
      start:"top center",
      markers:true,
        
    },
    duration:1.5,
    opacity:1,
    yPercent:0
});

gsap.set(".Pdfbutton_background_home",{
  opacity:0,
  
});

gsap.to(".Pdfbutton_background_home", {
  scrollTrigger:{
    trigger: ".Pdfbutton_background_home",
    start:"top bottom",
    markers:true,
      
  },
  duration:1.5,
  delay:0.5,
  opacity:1,
});

//goals home
gsap.set(".practical",{
  opacity:0,
  xPercent:-100,
});

gsap.to(".practical", {
  scrollTrigger:{
    trigger: ".cheap",
    start:"bottom bottom",
    markers:true,
      
  },
  duration:1.5,
  opacity:1,
  xPercent:0,
});

gsap.set(".cheap",{
  opacity:0,
  
});

gsap.to(".cheap", {
  scrollTrigger:{
    trigger: ".cheap",
    start:"bottom bottom",
    markers:true,
      
  },
  duration:1.5,
  opacity:1,
});

gsap.set(".efficient",{
  opacity:0,
  xPercent:100,
});

gsap.to(".efficient", {
  scrollTrigger:{
    trigger: ".cheap",
    start:"bottom bottom",
    markers:true,
      
  },
  duration:1.5,
  opacity:1,
  xPercent:0
});

//team home
gsap.set(".team_home h2",{
  opacity:0,
  yPercent:100,
    
});

gsap.to(".team_home h2", {
  scrollTrigger:{
    trigger: ".team_home",
    start:"center bottom",
    markers:true,
      
  },
  duration:1.5,
  opacity:1,
  yPercent:0
});

//partner home
gsap.set(".partners_home__img",{
  opacity:0,
    
});

gsap.to(".partners_home__img", {
  scrollTrigger:{
    trigger: ".partners_home__img",
    start:"center bottom",
    markers:true,
      
  },
  duration:1.5,
  opacity:1,
  yPercent:0
});

//BLOG
//inicio blog
gsap.set(".blogtitulo",{
  opacity:0,
  yPercent:-100,
    
});

gsap.to(".blogtitulo", {
  scrollTrigger:{
    trigger: ".bloftitulo",
    start:"top center",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  yPercent:0
});

gsap.from(".blog__inicial",{duration:1.5, opacity: 0,ease:"power1"});

gsap.set([".blog__ini__text",".blog__ini__texttele p"],{
  opacity:0,
  xPercent:-100,
});

gsap.to([".blog__ini__text",".blog__ini__texttele p"], {
  scrollTrigger:{
    trigger: [".blog__ini__text",".blog__ini__texttele p"],
    start:"bottom bottom",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  xPercent:0,
});

gsap.set([".blog__inicial__img",".blog__inicial__imgtele"],{
  opacity:0,
  xPercent:100,
});

gsap.to([".blog__inicial__img",".blog__inicial__imgtele"], {
  scrollTrigger:{
    trigger: [".blog__inicial__img",".blog__inicial__imgtele"],
    start:"bottom bottom",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  xPercent:0,
});

//blog report
gsap.from(".responsive",{duration:1.5, opacity: 0, ease:"power1"});

//TEAM
//about us
gsap.set(".about_us__text h1",{
  opacity:0,
  yPercent:-100,
    
});

gsap.to(".about_us__text h1", {
  scrollTrigger:{
    trigger: ".about_us__text",
    start:"top center",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  yPercent:0
});

gsap.set(".about_us__text p",{
  opacity:0,
  xPercent:100,
    
});

gsap.to(".about_us__text p", {
  scrollTrigger:{
    trigger: ".about_us__text",
    start:"top center",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  xPercent:0
});

//equipas 

gsap.set(".teams__text h1",{
  opacity:0,
  yPercent:-100,
    
});

gsap.to(".teams__text h1", {
  scrollTrigger:{
    trigger: ".about_us",
    start:"top center",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  yPercent:0
});

gsap.set(".teams__text h2",{
  opacity:0,
  yPercent:-100,
    
});

gsap.to(".teams__text h2", {
  scrollTrigger:{
    trigger: ".teams__text h1",
    start:"top center",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  yPercent:0
});

gsap.set(".text_triangulo p",{
  opacity:0,
  yPercent:-100,
    
});

gsap.to(".text_triangulo p", {
  scrollTrigger:{
    trigger: ".triangulo",
    start:"top center",
    markers:true,
      
  },
  duration:.5,
  opacity:1,
  yPercent:0
});

gsap.set("teams__container",{
  opacity:0,   
  yPercent:100, 
});

gsap.to("teams__container", {
  scrollTrigger:{
    trigger: ".triangulo",
    start:"bottom center",
    markers:true,
      
  },
  duration:5,
  opacity:1,
  yPercent:0
});
