import Header from '../header/Header';
import beansHTML from '../beans/beans';
import './footer.sass';


const Footer = () => (
    <footer className="footer">
        <div className="container">
            <Header footer={true}/>
            {beansHTML}
        </div>
        
    </footer>
)

export default Footer;