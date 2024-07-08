import Menu from "./Menu";
function Header(data){
    return(
        <div>{data.title} - {data.content}
        <Menu data={data.menu}/>
        </div>
    ) 
}
export default Header;