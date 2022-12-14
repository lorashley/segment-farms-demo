import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import Cart from "../components/Cart";
import { Link } from "wouter";

import Userfront from "@userfront/react";

Userfront.init("xbppgjwb");

const veggieArray = [
  { name: "Tomato", price: "2", img: p1 },
  { name: "Red Pepper", price: "4", img: p5 },
  { name: "Pumpkin", price: "8", img: p3 },
  { name: "Potato", price: "1", img: p4 },
  { name: "Cabbage", price: "4", img: p6 },
  { name: "Eggplant", price: "4", img: p2 },
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.name === product.name);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.name === product.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else setCart([...cart, { ...product, qty: 1 }]);
    window.analytics.track("Added Product", {
      product: product,
    });
  };

  const onRemove = (product) => {
    const exist = cart.find((x) => x.name === product.name);
    if (exist) {
      if (exist.qty === 1) {
        setCart(cart.filter((x) => x.name !== product.name));
      } else {
        setCart(
          cart.map((x) =>
            x.name === product.name ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    }
    window.analytics.track("Removed Product", {
      product: product,
    });
  };

  const onPay = (total) => {
    window.analytics.track("Order Placed", {
      total: total,
      cart: cart,
    });
    setCart([]);
  };

  //When the user logs in, call the Segment Identify
  useEffect(() => {
    window.analytics.identify(Userfront.user.email, {
      userData: Userfront.user,
    });
  });

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <Grid item xs={12}>
            <h1 className="title">Our Veggies</h1>
          </Grid>
          <Grid item xs={12}>
            <h1 className="title">
              <Grid container spacing={6}>
                {veggieArray.map((v) => (
                  <Grid item xs={10} md={6} lg={4}>
                    <Product key={v.name} product={v} onAdd={onAdd} />
                  </Grid>
                ))}
              </Grid>
            </h1>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          {Userfront.user?.name ? (
            <>
              <h2>
                {" "}
                Welcome {Userfront.user.name}!{" "}
                <Button onClick={Userfront.logout}>Logout</Button>
              </h2>{" "}
            </>
          ) : (
            <Link to="/login">
              <h2>Login</h2>
            </Link>
          )}
          <Cart cart={cart} onAdd={onAdd} onRemove={onRemove} onPay={onPay} />
        </Grid>
      </Grid>
    </Box>
  );
}
