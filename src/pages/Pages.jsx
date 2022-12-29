import React from "react"
import Home from "../mainUi/MainPage/Home"
import FlashDeals from "../mainUi/flashdeals/FlashDeals"
import TopCate from "../mainUi/top/TopCat"
import NewArrivals from "../mainUi/newarrivals/NewArrivals"
import Discount from "../mainUi/discount/Discount"
import Shop from "../mainUi/shops/Shop"
import Annocument from "../mainUi/Announcement/Announcement"
import Wrapper from "../mainUi/wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages