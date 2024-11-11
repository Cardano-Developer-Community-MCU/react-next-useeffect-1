import { useState, useEffect } from "react";

export default function Home() {
  const [product, setProduct] = useState({
    id: "",
    title: "",
  });

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const res = await fetch("https://dummyjson.com/products/1");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen text-center">
      <table>
        <thead>
          <tr className="bg-slate-300">
            <th className="px-4 py-2 border border-black">Product-ID</th>
            <th className="px-4 py-2 border border-black">Product-Name</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-100">
            <th className="px-4 py-2 border border-black">
              {!product.id ? "Null" : product.id}
            </th>
            <th className="px-4 py-2 border border-black">
              {!product.title ? "Null" : product.title}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
