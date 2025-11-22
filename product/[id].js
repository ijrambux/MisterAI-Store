import { useRouter } from "next/router";
import products from "../../products.json";
import "../../styles/home.css";

export default function ProductPage() {
  const { id } = useRouter().query;
  const product = products.find((p) => p.id == id);

  if (!product) return <h1>المنتج غير موجود</h1>;

  return (
    <div className="details-container">
      <img src={product.image} className="details-img" />

      <h1>{product.title}</h1>
      <h2 className="price">{product.price} دج</h2>
      <p className="desc">{product.description}</p>

      <a
        href={`https://t.me/${product.telegram}`}
        className="buy-btn"
      >
        اطلب عبر Telegram
      </a>
    </div>
  );
}
