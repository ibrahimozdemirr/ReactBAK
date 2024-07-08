function Menu(data){
    console.log(data);
    return(
        <div>
            <ul>
                {data.menu.map(menuItem => (
                <li>
                    {menuItem.text }-{menuItem.url}
                </li>
                ))}

            </ul>
        </div>
    )
}
export default Menu;