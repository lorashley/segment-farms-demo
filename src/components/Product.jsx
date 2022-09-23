import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Product(props) {
  const product = props.product;
  const { onAdd } = props;

  return (
    <Card>
      <CardHeader title={product.name + " $" + product.price} />
      <CardMedia
        component="img"
        height="100"
        image={product.img}
        alt={product.name}
        sx={{ objectFit: "scale-down" }}
      />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" color="primary" onClick={() => onAdd(product)}>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}
