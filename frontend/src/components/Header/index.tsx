import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="">
                <img src={logo} alt="DSMeta" />
                <h1>Dev Lúcio Andrade</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/lucioandradepb/"> @lucioandradepb</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
