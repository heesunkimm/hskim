// 네비
// let links = gsap.utils.toArray("#parallax__nav ul li a");

// links.forEach(link => {
//     let element = document.querySelector(link.getAttribute("href")),
    
//     linkST = ScrollTrigger.create({
//         trigger: element,
//         start: "top top"
//     });

//     ScrollTrigger.create({
//         trigger: element,
//         start: "top center",
//         end: "bottom center",
//         onToggle: self => setActive(link)
//     });

//     link.addEventListener("click", e => {
//         e.preventDefault();
//         gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
//     });
// });

// function setActive(link) {
//     links.forEach(el => el.classList.remove("active"));
//     link.classList.add("active");
// }

function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 텍스트 애니메이션
const ani5 = gsap.timeline();
ani5.to("#intro .t1", {xPercent: 300}, "text")
    .to("#intro .t2", {xPercent: -300}, "text")
    .to("#intro .t3", {xPercent: 300}, "text")
    // .to("#intro .t4", {xPercent: -300}, "text")

ScrollTrigger.create({
    animation: ani5,
    trigger: "#intro",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: false,
    markers: false,
    anticipatePin: 1
});

// 가로 효과
const portfolio = document.querySelector("#portfolio"); 
const portfolio__item = gsap.utils.toArray("#portfolio > div");

gsap.to(portfolio__item, {
    xPercent: -100 * (portfolio__item.length -1),
    ease: "none",
    scrollTrigger: {
        trigger: portfolio,
        start: "top top",
        end: () => "+=" + (portfolio.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1/(portfolio__item.length -1),
            inertia: false,
            duration: {min: 0.1, max: 0.1},
        },
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
});