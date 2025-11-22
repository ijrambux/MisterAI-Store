import Link from "next/link";
import products from "../products.json";
import "../styles/home.css";

export default function Products() {
  return (
    <div className="products-container">
      <h1 className="title">جميع المنتجات</h1>

      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} className="product-img" />
            <h2>{p.title}</h2>
            <p className="price">{p.price} دج</p>

            <Link href={`/product/${p.id}`} className="btn">
              عرض التفاصيل
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
