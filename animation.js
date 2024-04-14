
TweenMax.set(".coverDiv", {autoAlpha:1}); 
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
      markers:false,
        
    },
    duration:1,
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
    markers:false,
      
  },
  duration:2,
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
    markers:false,
      
  },
  duration:1,
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
    markers:false,
      
  },
  duration:1,
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
    markers:false,
      
  },
  duration:1,
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
    markers:false,
      
  },
  duration:1,
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
    markers:false,
      
  },
  duration:1,
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
    trigger: ".blogtitulo",
    start:"top bottom",
    markers:false,

  },
  duration:1,
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
    markers:false,
      
  },
  duration:.8,
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
    markers:false,
      
  },
  duration:.8,
  opacity:1,
  xPercent:0,
});


gsap.set(".blog__ini__text",{
  opacity:1,
  xPercent:0,
});

gsap.to(".blog__ini__text", {
  scrollTrigger:{
    trigger: ".blog__ini__text",
    start:"bottom 25%",
    markers:false,
    scrub: true,
  },
  duration:.8,
  opacity:0,
  xPercent:-100,
});

gsap.set(".blog__inicial__img",{
  opacity:1,
  xPercent:0,
});

gsap.to(".blog__inicial__img", {
  scrollTrigger:{
    trigger: ".blog__ini__text",
    start:"bottom 25%",
    markers:false,
    scrub: true,
  },
  duration:1,
  opacity:0,
  xPercent:100,
});


gsap.set(".blog__inicial",{
  opacity:1,
});

gsap.to(".blog__inicial", {
  scrollTrigger:{
    trigger: ".blog__ini__text",
    start:"bottom 25%",
    markers:false,
    scrub: true,
  },
  duration:1,
  opacity:0,
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
    markers:false,
      
  },
  duration:.6,
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
    markers:false,
      
  },
  duration:.8,
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
    markers:false,
      
  },
  duration:.8,
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
    markers:false,
      
  },
  duration:.8,
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
    markers:false,
      
  },
  duration:.8,
  opacity:1,
  yPercent:0
});

const teams =document.querySelectorAll(".teams__container")
teams.forEach(teams =>{
  let teams__button= teams.querySelector(".teams__button")
  let teams__text1= teams.querySelector(".teams__text1")

  gsap.from(teams__button, {
    scrollTrigger:{
      trigger: teams,
      start:"top bottom",
      markers:false,
        
    },
    duration:1,
    opacity:0,
    xPercent:-100
  });


  gsap.set(teams__text1,{
    opacity:0,   
    xPercent:100, 
  });

  gsap.to(teams__text1, {
    scrollTrigger:{
      trigger: teams,
      start:"top bottom",
      markers:false,
        
    },
    duration:0.7,
    opacity:1,
    xPercent:0
  });
});

//fotos
gsap.from(".fotos__container",{
  scrollTrigger:{
    trigger: ".filipe",
    start:"center bottom",
    markers:false,
      
  },
  duration:0.7,
  opacity: 0,
  ease:"power1"
});

gsap.set([".andre", ".filipe", ".antonio"],{
  opacity:0,   
  yPercent:80, 
});

gsap.to([".andre", ".filipe", ".antonio"], {
  scrollTrigger:{
    trigger: ".filipe",
    start:"center bottom",
    markers:false,
      
  },
  duration:1.5,
  opacity:1,
  yPercent:0
});

gsap.from(".fotos__container1",{
  scrollTrigger:{
    trigger: ".francisco",
    start:"center bottom",
    markers:false,
      
  },
  duration:0.7,
  opacity: 0,
  ease:"power1"
});

gsap.set([".duarte", ".francisco", ".miguel"],{
  opacity:0,   
  yPercent:80, 
});

gsap.to([".duarte", ".francisco", ".miguel"], {
  scrollTrigger:{
    trigger: ".francisco",
    start:"center bottom",
    markers:false,
      
  },
  duration:1.5,
  opacity:1,
  yPercent:0
});

//PARTNERS
gsap.set(".partner__titulo",{
  opacity:0,   
  yPercent:-100, 
});

gsap.to(".partner__titulo", {
  scrollTrigger:{
    trigger: ".partner__titulo",
    start:"bottom center",
    markers:false,
  },
  duration:0.8,
  opacity:1,
  yPercent:0
});

gsap.set(".partner__text",{
  opacity:0,   
  xPercent:-100, 
});

gsap.to(".partner__text", {
  scrollTrigger:{
    trigger: ".partner__titulo",
    start:"bottom center",
    markers:false,
  },
  duration:0.8,
  opacity:1,
  xPercent:0
});

gsap.set(".partner__img",{
  opacity:0,   
  xPercent:100, 
});

gsap.to(".partner__img", {
  scrollTrigger:{
    trigger: ".partner__titulo",
    start:"bottom center",
    markers:false,
  },
  duration:0.8,
  opacity:1,
  xPercent:0
});


//Contacts
gsap.from(".Contacto",{duration:1, opacity: 0,ease:"power1"});
gsap.from(".Updates",{duration:1, opacity: 0,xPercent:100,ease:"power1"});
gsap.from(".Update__titulo",{duration:1, opacity: 0,xPercent:100,ease:"power1"});~
gsap.from(".Update__texto",{duration:1, opacity: 0,xPercent:100,ease:"power1"});
gsap.from(".Submit",{duration:1, opacity: 0,yPercent:-100,ease:"power1"});
gsap.from(".Contactos__titulo",{duration:1, opacity: 0,xPercent:-100,ease:"power1"});
gsap.from(".Contactos__texto",{duration:1, opacity: 0,xPercent:-100,ease:"power1"});
gsap.from(".Questions",{duration:1, opacity: 0,yPercent:-100,ease:"power1"});



//Project overview
//problem

gsap.set(".problem__text",{
  opacity:0,
  xPercent:-100,
});

gsap.to(".problem__text", {
  scrollTrigger:{
    trigger: ".problem__text",
    start:"top center",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
});


gsap.set(".problem__img",{
  opacity:0,
  xPercent:100,
});

gsap.to(".problem__img", {
  scrollTrigger:{
    trigger: ".problem__img",
    start:"top center",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
});



//goal

gsap.set(".goal__img",{
  opacity:0,
  xPercent:-100,
});

gsap.to(".goal__img", {
  scrollTrigger:{
    trigger: ".problem__text",
    start:"bottom center",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
});

gsap.set(".goal__text",{
  opacity:0,
  xPercent:100,
});

gsap.to(".goal__text", {
  scrollTrigger:{
    trigger: ".problem__img",
    start:"bottom center",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
});

gsap.set(".goaltele",{
  opacity:0,
  xPercent:-100,
});

gsap.to(".goaltele", {
  scrollTrigger:{
    trigger: ".problemtele",
    start:"bottom center",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
});



//solution
  gsap.set(".solution__text",{
    opacity:0,
    yPercent:50,
  });

  gsap.to(".solution__text", {
    scrollTrigger:{
      trigger: ".solution__text",
      start:"top bottom",
      markers:false,
        
    },
    duration:1,
    opacity:1,
    yPercent:0,
  });

  gsap.set(".solution__img",{
    opacity:0,
    xPercent:-100,
    yPercent:50,
  });

  gsap.to(".solution__img", {
    scrollTrigger:{
      trigger: ".solution__text",
      start:"top 70%",
      markers:false,
        
    },
    duration:1,
    opacity:1,
    xPercent:0,
    yPercent:0
  });

//solution example
gsap.set(".solution_example__text",{
  opacity:0,
  xPercent:-100,
});

gsap.to(".solution_example__text", {
  scrollTrigger:{
    trigger: ".solution__img",
    start:"top bottom",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
});

gsap.set(".solution_example__img",{
  opacity:0,
  xPercent:100,
});

gsap.to(".solution_example__img", {
  scrollTrigger:{
    trigger: ".solution__img",
    start:"top bottom",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
});

//Beneficiaries
gsap.set(".beneficiaries__text",{
  opacity:0,
  yPercent:60,
});

gsap.to(".beneficiaries__text", {
  scrollTrigger:{
    trigger: ".beneficiaries__text",
    start:"top bottom",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

gsap.set(".beneficiaries__img",{
  opacity:0,
  xPercent:100,
  yPercent:50,
});

gsap.to(".beneficiaries__img", {
  scrollTrigger:{
    trigger: ".beneficiaries__text",
    start:"top 85%",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  xPercent:0,
  yPercent:0
});

//botao pdf
gsap.set(".buttonPDF",{
  opacity:0,
});

gsap.to(".buttonPDF", {
  scrollTrigger:{
    trigger: ".footer",
    start:"top bottom",
    markers:false,
      
  },
  duration:1,
  opacity:1,
});

//Project details
//key features
gsap.from("#key_features",{duration:1, opacity: 0,yPercent:-100,ease:"power1"});

//list of material
gsap.set("#bill_of_material",{
  opacity:0,
  yPercent:60,
});

gsap.to("#bill_of_material", {
  scrollTrigger:{
    trigger: "#bill_of_material",
    start:"top 70%",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

gsap.set(".bill_of_material",{
  opacity:0,
  yPercent:60,
});

gsap.to(".bill_of_material", {
  scrollTrigger:{
    trigger: "#bill_of_material",
    start:"top 50%",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});


//system description
gsap.set([".system_description_text h1", ".system_description_text img"],{
  opacity:0,
  yPercent:60,
});

gsap.to([".system_description_text h1", ".system_description_text img"], {
  scrollTrigger:{
    trigger: ".bill_of_material",
    start:"center 90%",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

gsap.set(".system_description_text p",{
  opacity:0,
  yPercent:60,
});

gsap.to(".system_description_text p", {
  scrollTrigger:{
    trigger: ".system_description_text img",
    start:"center 70%",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

//electrical specifications

gsap.set("#electrical_specs",{
  opacity:0,
  yPercent:60,
});

gsap.to("#electrical_specs", {
  scrollTrigger:{
    trigger: "#electrical_specs",
    start:"top 70%",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

gsap.set(".electrical_specs",{
  opacity:0,
  yPercent:60,
});

gsap.to(".electrical_specs", {
  scrollTrigger:{
    trigger: ".electrical_specs",
    start:"top bottom",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

//communication protocol

gsap.set(".communication",{
  opacity:0,
  yPercent:50,
});

gsap.to(".communication", {
  scrollTrigger:{
    trigger: ".communication",
    start:"top bottom",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

gsap.set(".datasheets",{
  opacity:0,
  yPercent:60,
});

gsap.to(".datasheets", {
  scrollTrigger:{
    trigger: ".footer",
    start:"top 90%",
    markers:false,
      
  },
  duration:1,
  opacity:1,
  yPercent:0,
});

gsap.from(".blogweek_text",{
  scrollTrigger:{
    trigger: ".blogweek",
    start:"top bottom",
    markers:false,
      
  },
  duration:0.7,
  opacity: 0,
  ease:"power1"
});
