import { Fragment } from 'react';
import './header.sass';

const Header = ({menuHeader, footer = false}) => {
    const centerHeader = footer ? 'header_center' : '';
    const elements = menuHeader.map(item => {
        return (
            <Fragment key={item.id}>
                <a className='header__link' href={item.url}>{item.text}</a>
            </Fragment>

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
