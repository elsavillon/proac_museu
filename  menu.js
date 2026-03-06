function openMenu(){
    menu.classList.add("active");
    overlay.classList.add("active");
    toggleButton.setAttribute("aria-expanded","true");
    }
    
    function closeMenu(){
    menu.classList.remove("active");
    overlay.classList.remove("active");
    toggleButton.setAttribute("aria-expanded","false");
    }