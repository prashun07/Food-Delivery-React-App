import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./components/BannerName";
import Header from "./components/Header";
import MenuCard from "./components/MenuCard";
import MenuContainer from "./components/MenuContainer";
import SubMenuContainer from "./components/SubMenuContainer";
import { MenuItems, Items } from "./components/Data";
import ItemCard from "./components/ItemCard";
import DebitCard from "./components/DebitCard";
import CardItem from "./components/CardItem";
import { useStateValue } from "./components/StateProvider";
function App() {
  // main dish state
  const [isMainData, setisMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    //Menu card
    const menuCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart]);
  //set main dish item on filter
  const setData = (itemId) => {
    setisMainData(Items.filter((element) => element.itemId === itemId));
  };
  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">
          {/* banner */}
          <div className="banner">
            <BannerName name={"Prashun"} discount={"20"} link={"#"} />
            <img
              src={require("./assets/images/deliveryMan.png")}
              alt=""
              className="deliveryPic"
            />
          </div>
          {/* dish container */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    rating={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          {!cart ? (
              <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Carts Items"} />
              <div className="cartContainer">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CardItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$45.0</span>
                </p>
              </div>
              <button className="checkOut">Checkout</button>
            </div>
          )}
        </div>
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
