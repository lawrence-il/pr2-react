import { Fragment } from 'react';
import './header.sass';

const Header = ({menuHeader}) => {
    console.log(menuHeader);
    const elements = menuHeader.map(item => {
        return (
            <Fragment key={item.id}>
                <a className="header__link"  href={item.href}>{item.text}</a>
            </Fragment>

        )
    })
    return (
        <header className="header">
            <ul>
                {elements}
            </ul>
        </header>
    )
}

export default Header;
