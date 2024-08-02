import { useState, useEffect } from 'react'; // Import useState and useEffect
import { fetchProducts } from '../lib/products';
import ProductCard from '../components/ProductCard';
import SortFilter from '../components/SortFilter';
import ProductDetail from '../components/ProductDetail';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
}

const Home = ({ products }) => {
  const router = useRouter();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('asc');
  const [category, setCategory] = useState('');

  useEffect(() => {
    let sortedProducts = [...products];
    if (category) {
      sortedProducts = sortedProducts.filter(product => product.category === category);
    }
    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  }, [sortOrder, category, products]);

  return (
    <div>
      <SortFilter setSortOrder={setSortOrder} setCategory={setCategory} />
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map(product => (
          <div key={product.id} onClick={() => router.push(`/product/${product.category}/${product.id}`)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {router.query.id && <ProductDetail product={filteredProducts.find(p => p.id == router.query.id)} />}
    </div>
  );
};

export default Home;
