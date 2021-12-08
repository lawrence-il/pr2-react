const ToggleMenu = (e, toggleState) => {
    if (e.target && (e.target.classList.contains('header__humburger') || e.target.classList.contains('header__humburger-line')) 
        && !toggleState) {
            document.documentElement.style.overflow = 'hidden';
            return  1;
    }else if (e.target && !e.target.classList.contains('header__humburger-menu') && toggleState) {
        document.documentElement.style.overflow = 'auto'; 
        return  0;
  }
}

export default ToggleMenu;