function Menu(data){
    console.log(data);
    return(
        <div>
            <h1>Menu</h1>
            <ul>
                {data.data.map((item)=><li>
                    {item}
                </li>)}
            </ul>
        </div>
    )
}
export default Menu;