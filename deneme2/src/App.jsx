import './App.css'
import Header from './Header';
import Vite from "/vite.svg";
import Body from './Body';
import Footer from './Footer';

function App() {
  const menuItems = [
    {text:"Home",url:"/"},
    {text:"About",url:"/about"},
    {text:"Contact",url:"/contact"}
  ];
  return (
    <>
      <Header logo={<Vite />} menuItems={menuItems} title="Yunus'un Oyun Alanı"/>
      <Body title="Yunusun cs2 alanı" slider="https://yenibakiscomtr.teimg.com/crop/1280x720/yenibakis-com-tr/uploads/2024/04/cs2-oynayan-ulkeler-aciklandi-counter-strike-2-hangi-ulkelerde-populer.jpg" content="Yunus burada zaten gerekli yazıları yazacaktır elbet ama şimdilik ben böyle bırakıcam yunus kardeşim adam mısın diye sorarlar adama" ></Body>
      <Footer 
      logo={<Vite></Vite>}
      slider="https://cdn.esportfire-services.com/items/P90.png"
      title="Footer Alanı"
      content="Yunus özelnide burası footer alanı. burayı da farklı şekillerde doldurmak önemli olacaktır."
      ></Footer>
    </>
  )
}

export default App
