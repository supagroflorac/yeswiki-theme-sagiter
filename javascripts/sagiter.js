function initMenu() {
    // Ajoute la classe submenu aux sous menu
    var listSubMenuNav = document.querySelectorAll('nav ul ul');
    for (subMenuNav of listSubMenuNav) {
        subMenuNav.classList.add("hide");
        subMenuNav.parentNode.classList.add('dropdown');
        subMenuNav.parentNode.addEventListener("click", showSubMenu);
    }
    window.addEventListener("resize", resizeWindow);
    resizeWindow();
}

function showSubMenu() {
    this.querySelector('ul').classList.toggle('hide');
    this.querySelector('a').preventDefault();
}

function resizeWindow() {
    var menu = document.querySelector('nav');
    var height = (document.height !== undefined)
        ? document.height
        : document.body.offsetHeight;
    var width = (document.width !== undefined)
        ? document.width
        : document.body.offsetWidth;
    if (width > 768) {
        menu.style.height = height + "px";
    } else {
        menu.style.height = "auto";
    }
}

initMenu();
