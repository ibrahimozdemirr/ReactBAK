import Slider from "./Slider";
import Content from "./Content";
function Body(data){
    return(
        <div>
            <hr></hr>
            <h5>{data.title}</h5>
            <Slider slider={data.slider}></Slider>
            <Content content={data.content}></Content>
        </div>
    )
}
export default Body;