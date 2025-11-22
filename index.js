import Link from "next/link";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="hero">
      <div className="glass">
        <h1 className="title">MisterAI Store</h1>
        <p className="subtitle">أفضل المنتجات بأفضل الأسعار</p>

        <Link href="/products" className="btn">
          عرض المنتجات
        </Link>
      </div>
    </div>
  );
}
