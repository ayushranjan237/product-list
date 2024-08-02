const SortFilter = ({ setSortOrder, setCategory }) => (
    <div className="flex justify-between mb-4">
      <select onChange={(e) => setSortOrder(e.target.value)} className="p-2 rounded">
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      <select onChange={(e) => setCategory(e.target.value)} className="p-2 rounded">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men&apos;s clothing">Men&apos;s Clothing</option> {/* Escaped single quote */}
        <option value="women&apos;s clothing">Women&apos;s Clothing</option> {/* Escaped single quote */}
      </select>
    </div>
  );
  
  export default SortFilter;
  