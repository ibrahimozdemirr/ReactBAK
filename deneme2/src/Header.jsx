import Logo from './Logo.jsx';
import Menu from './Menu.jsx';

function Header(data){
    
    return (
        <div>
            <h1>{data.title}</h1>
            <Logo logo={data.logo}></Logo>
            <Menu menu={data.menuItems} ></Menu>
        </div>
    );
}
export default Header;