import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: 1,
    title: "Notebook",
    price: 1500.59,
    description: "Sample notebook",
  },
  {
    id: 2,
    title: "Mouse Razer",
    price: 24.99,
    description: "Sample mouse",
  },
  {
    id: 3,
    title: "RedDragon Keyboard",
    price: 50.49,
    description: "Sample Keyboard",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((it) => (
          <ProductItem
            id={it.id}
            key={it.id}
            title={it.title}
            price={it.price}
            description={it.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
