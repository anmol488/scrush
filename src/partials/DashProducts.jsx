import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

import DashProductItem from "./DashProductItem";

function DashProducts() {
  const [products, setProducts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "products"), orderBy("createdAt", "desc")),
        (snapshot) => {
          setProducts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">All registered products</h2>
          </div>

          <div>
            {products.map((product) => (
              <DashProductItem product={product.data()} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashProducts;
