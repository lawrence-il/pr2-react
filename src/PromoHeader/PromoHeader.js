import './promo__link.sass';

const PromoHeader = ({text, href}) => {
    return (
        <>
            <a className="promo__link" href={href}>{text}</a>
        </>
    )
}

export default PromoHeader;