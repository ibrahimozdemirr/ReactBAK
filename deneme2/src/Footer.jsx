import Logo from "./Logo";
import Content from "./Content";
import Slider from "./Slider";
function Footer(data){
    return(
        <footer>
            <hr></hr>
            <p>{data.title}</p> 
            <Logo logo={data.logo}></Logo>
            <Content content={data.content}></Content>  
            <Slider slider={data.slider}></Slider>  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}  {/* slider prop is an array */}
        </footer>
        
       
    )
}
export default Footer;