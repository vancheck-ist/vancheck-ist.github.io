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

