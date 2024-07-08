
import './App.css'
import Header from "./Header"
import Categories from "./Categories"
import Products from "./Products"
import Footer from "./Footer"
import Test from "./test"


function App() {
  return (
    <>
      <Test title="Test Sayfası" content="test contenti"/>
      <Header title="Header Sayfası" content="veri contenti" menu={["Anasayfa","Hakkımızda","İletişim"]}/>
      <Categories title="Categories Sayfası" categories={["Anasayfa2","Hakkımızda2","İletişim2","Deneme2","Emre Abinin alanı"]}/>
      <Products title="Products Sayfası"/>
      <Footer title="Footer Sayfası"/>
    </>
  );
}

export default App
