import { Link } from 'react-router-dom';
import './header.sass';

const Header = ({footer = false}) => {
    const menuHeader = [
        {text: 'Coffee house', url: '/', id: 1},
        {text: 'Our coffee', url: '/ourCoffee', id: 2},
        {text: 'For your pleasure', url: '/2', id: 3},
      ];
    const centerHeader = footer ? 'header_center' : '';
    const elements = menuHeader.map(item => {
        return (
                <Link key={item.id} className='header__link' to={item.url}>{item.text}</Link>
        )
    })
    return (
        <header className={`header ${centerHeader}`}>
            <ul>
                {elements}
            </ul>
        </header>
    )
}

export default Header;
