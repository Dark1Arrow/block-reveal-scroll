const element = Array.from(document.querySelectorAll(".text , .image"));

function handleScroll(){
    const scrollTop = window.scrollY;

    element.forEach(item => {
        const elementTop = item.getBoundingClientRect().top  + scrollTop;
        console.log(scrollTop)
        if (scrollTop >= elementTop - 400 ){
            item.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll" ,handleScroll)