import { Link } from 'react-router-dom';
import './header.sass';

const Header = ({toggleState, footer = false}) => {
    const menuHeader = [
        {text: 'Coffee house', url: '/', id: 1},
        {text: 'Our coffee', url: '/ourCoffee', id: 2},
        {text: 'For your pleasure', url: '/ForYourPleasure ', id: 3},
      ];
    const centerHeader = footer ? 'header_center' : '',
        humburgerHeader = footer ? 'header__humburger_footer' : '',
        footerHeader = footer ? 'header__humburger-menu_footer' : '',
        toggle = toggleState ? 'header__active' : '',
        cross = toggleState ? 'header__humburger-line_cross' : '';
    const elements = menuHeader.map(item => {
        return (
                <Link key={item.id} className='header__link' to={item.url}>{item.text}</Link>
        )
    })
    return (
        <header className={`header ${centerHeader}`}>
            <div className={`header__humburger ${humburgerHeader}`}>
                <div className={`header__humburger-line ${cross}`}></div>
            </div>
            <ul className={`header__humburger-menu ${footerHeader} ${toggle}`}>
                {elements}
            </ul>
        </header>
    )
}

export default Header;
