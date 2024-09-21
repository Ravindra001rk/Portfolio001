const links = document.querySelectorAll('#menu li a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        links.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');   
    });
});

document.getElementById('menu').addEventListener('click', function(event) {
    if (event.target.tagName === 'I') {
        const activeIcons = document.querySelectorAll('.active-1'); 
        activeIcons.forEach(icon => {
            icon.classList.remove('active-1');
        });
        event.target.classList.add('active-1');
    }
});


document.querySelectorAll(".page-2 .boxes .box img").forEach(image =>{
   image.onclick = () =>{
    document.querySelectorAll(".page-2 .boxes .image-popup").style.display="block";
    document.querySelectorAll(".page-2 .boxes .image-popup img").src = image.getAttribute('src');
   }
})
document.querySelectorAll(".page-2 .boxes .image-popup i").onclick = () =>{

    document.querySelectorAll(".page-2 .boxes .image-popup").style.display="none";

}


let tl = gsap.timeline();

tl.from(".page-1 .main-content h1, .page-1 .main-content .border",{
    y:50,
    duration:.6,
    opacity:0
})

tl.from(".page-1 .main-content .btn-1 button",{
    y: 10,
    stagger:.15,
    opacity:0,
})

gsap.from(".page-2 .border",{
    y:50,
    duration:.6,
    opacity:0,
    scrollTrigger:{
        trigger:"page-2",   
        scroller:"body",
        markers:false,
        start: "91% 50%",
        end: "100% 50%",
    }
})

gsap.from(".page-2 .heading-1 h1",{
    y:50,
    duration:.6,
    opacity:0,
    scrollTrigger:{
        trigger:"page-2",   
        scroller:"body",
        markers:false,
        start: "101% 50%",
        end: "100% 50%",
        scrub:2
    }
})

tl.from(".page-2 .boxes .box-1, .page-2 .boxes .box-2",{
    y:150,
    duration:.5,
    scrub:true,
    opacity:0,
    scrollTrigger:{
        trigger:"page-2",   
        scroller:"body",
        markers:false,
        start: "111% 50%",
        end: "10% 100%",
        scrub:2
    }
})

tl.from(".page-2 .boxes .box-3, .page-2 .boxes .box-4",{
    y:150,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"page-2",   
        scroller:"body",
        markers:false,
        start: "141% 50%",
        end: "10% 100%",
        scrub:2
    }
})

gsap.from(".page-3 .border-3",{
    y:50,
    duration:.6,
    opacity:0,
    scrollTrigger:{
        trigger:"page-3",   
        scroller:"body",
        markers:false,
        start: "221% 50%",
        end: "300% 50%",
    }
})

gsap.from(".page-3 .heading-3 h1",{
    y:50,
    duration:.6,
    opacity:0,
    scrollTrigger:{
        trigger:"page-3",   
        scroller:"body",
        markers:false,
        start: "231% 50%",
        end: "300% 50%",
    }
})

gsap.from(".page-3 .boxes-3 .box",{
    y:100,
    duration:.5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"page-3",   
        scroller:"body",
        markers:false,
        start: "241% 50%",
        end: "300% 50%",
    }
})

gsap.from(".page-3 .paragraph",{
    y:100,
    duration:.5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"page-3",   
        scroller:"body",
        markers:false,
        start: "281% 50%",
        end: "300% 50%",
    }
})

gsap.from(".page-3 .main-box .one, .page-3 .main-box .two",{
    y:100,
    duration:.5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"page-3",   
        scroller:"body",
        markers:false,
        start: "331% 50%",
        end: "900% 50%",
    }
})
gsap.from(".page-3 .main-box .three, .page-3 .main-box .four",{
    y:100,
    duration:.5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"page-3",   
        scroller:"body",
        markers:false,
        start: "400% 50%",
        end: "900% 50%",
    }
})

