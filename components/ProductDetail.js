import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProductDetail = ({ product }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      alert(`Title: ${product.title}\nCategory: ${product.category}\nID: ${router.query.id}`);
    }
  }, [router.query.id, product]);

  return null;
};

export default ProductDetail;
