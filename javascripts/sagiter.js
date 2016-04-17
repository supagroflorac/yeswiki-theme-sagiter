function initMenu() {
    // Ajoute la classe submenu aux sous menu
    var listSubMenuNav = document.querySelectorAll('nav ul ul');
    for (subMenuNav of listSubMenuNav) {
        subMenuNav.classList.add("hide");
        subMenuNav.parentNode.classList.add('dropdown');
        subMenuNav.parentNode.addEventListener("click", showSubMenu);
    }
}

function showSubMenu() {

    this.querySelector('ul').classList.toggle('hide');
    this.querySelector('a').preventDefault();
}

initMenu();
