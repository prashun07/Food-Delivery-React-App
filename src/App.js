import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material";
import { useEffect } from "react";
import "./App.css";
import BannerName from "./components/BannerName";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";

function App() {
useEffect(()=>{
 const menuLi=document.querySelectorAll('#menu li');
 function setMenuActive(){
  menuLi.forEach((n)=>n.classList.remove("active"));
  this.classList.add("active");
 }
 menuLi.forEach((n)=>n.addEventListener('click',setMenuActive));
},[]);


  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">
          {/* banner */}
          <div className="banner">
          <BannerName name={'Prashun'} discount={"20"} link={"#"} />
        <img src={require("./assets/images/deliveryMan.png")} alt="" className="deliveryPic" />
          </div>
         
        </div>
        <div className="rightMenu"></div>
      </main>
      {/* bottom menu */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome/>
           {/* prettier-ignore */}
           <MenuContainer link={"#"} icon={<Chat />} />
            {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
           {/* prettier-ignore */}
           <MenuContainer link={"#"} icon={<Favorite />} />
            {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
           {/* prettier-ignore */}
           <MenuContainer link={"#"} icon={<Settings />} />
            <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
