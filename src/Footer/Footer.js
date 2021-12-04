import Header from '../Header/Header';
import beansHTML from '../elements/beans';
import './footer.sass';


const Footer = ({menuHeader}) => (
    <footer className="footer">
        <div className="container">
            <Header menuHeader={menuHeader} footer={true}/>
            {beansHTML}
        </div>
        
    </footer>
)

export default Footer;