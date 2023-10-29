let screenWidth=window.screen.width;
console.log(screenWidth);

// gsap.from(".about",{
//     opacity: 1,
//     duration:1.4,
//     x:-200,
// })
// gsap.from(".aboutMe",{
//     opacity:1,
//     duration:2,
//     x:screenWidth
// })
gsap.to(".myIntro", {
    scrollTrigger: ".myIntro", 
    y: 200,
  });
  gsap.to(".logoDiv", {
    scrollTrigger: ".logoDiv", 
    y:50
  });
  const controller = new ScrollMagic.Controller();

        // Create a GSAP animation
        const tl = gsap.timeline();
        tl.from('.animate', { opacity: 0, y: 100, duration: 3 , repeat:8, repeatDelay:10});

        // Create a ScrollMagic scene
        const scene = new ScrollMagic.Scene({
            triggerElement: '.animate',
            reverse: false, // Keep the animation active even when scrolling back up
        })
        .setTween(tl)
        .addIndicators() // Optional: Add indicators to visualize the trigger
        .addTo(controller);
  
  

       