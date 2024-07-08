import Menu2 from './Menu2';
function Categories(data){
    return(
        <div>
            {data.title}
            {data.categories.map((item) => (
                <Menu2 title={item}/>
            ))}
        </div>);
}
export default Categories;