import { Fragment } from 'react';
import './header.sass';

const Header = ({menuHeader}) => {
    const elements = menuHeader.map(item => {
        return (
            <Fragment key={item.id}>
                <a className="header__link" href={item.url}>{item.text}</a>
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
