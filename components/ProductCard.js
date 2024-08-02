import Image from 'next/image'; // Import Image from next/image

const ProductCard = ({ product }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <Image
      src={product.image}
      alt={product.title}
      width={400} // Set appropriate width
      height={400} // Set appropriate height
      className="w-full"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.title}</div>
      <p className="text-gray-700 text-base truncate">{product.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.category}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">₹{product.price}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.rating.count} ratings</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.rating.rate} stars</span>
    </div>
  </div>
);

export default ProductCard;
