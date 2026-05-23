gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
    
    let parentSplit = new SplitText("#fhead, #shead, #thead", {
        type: "lines",
        linesClass: "split-parent"
    });

    let childSplit = new SplitText(parentSplit.lines, {
        type: "lines",
        linesClass: "split-child"
    });

    gsap.set(".split-parent", { 
        overflow: "hidden",
        paddingTop: "15px",
        paddingBottom: "15px",
        marginTop: "-15px"
    });

    gsap.set('img', { rotate: 0 });
    gsap.set('#imgs :nth-child(2), #imgs :nth-child(3)', { autoAlpha: 0 });

    let tl = gsap.timeline();

    tl.from('img', {
        y: 60,              
        scale: 1.7,         
        duration: 1.5,      
        delay: 0.1,
        ease: "power3.out"
    })
    
    .set('#imgs :nth-child(2), #imgs :nth-child(3)', { autoAlpha: 1 }, "-=0.4")

    .to('#imgs :nth-child(1)', { rotate: -2, duration: 1, ease: "power3.out" }, "<")
    .to('#imgs :nth-child(2)', { rotate: 6, duration: 1, ease: "power3.out" }, "<")
    .to('#imgs :nth-child(3)', { rotate: 13, duration: 1, ease: "power3.out" }, "<")
    
    .from(childSplit.lines, {
        yPercent: 120,      
        duration: 1.2,      
        stagger: 0.1,
        delay:0.2,       
        ease: "power4.out"  
    }, "-=0.8")
    
    .from('nav, footer', {
        opacity: 0,
        duration: 1.1,
        delay:0.2,
        ease: "power2.inOut"
    }, "<");

});