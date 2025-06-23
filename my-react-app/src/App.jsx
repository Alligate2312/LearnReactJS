import "./App.css";
import MenuItem from "./components/MenuItem";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App() {
  // function sayHi(name) {
  //   alert(`Xin chào ${name}`);
  // }
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  const handleViewDetails = (productName) => {
    alert(`Viewing details for ${productName}`);
  };

  return (
    <div>
      {/* <h1>Menu</h1>
      <MenuItem
        id={1}
        name="Banh mi"
        price={20000}
        favorite={true}
        onButtonClick={sayHi}
      />
      <MenuItem id={2} name="Bun bo" price={40000} onButtonClick={sayHi} />
      <MenuItem
        id={3}
        name="Pho"
        price={50000}
        favorite={true}
        onButtonClick={sayHi}
      />
      <MenuItem id={4} name="Com tam" price={30000} onButtonClick={sayHi} /> */}
      {/* <ProductCard
        name="iPhone 15"
        price={999}
        description="Latest smartphone with amazing features"
        image="https://th.bing.com/th/id/OIP.-TFZkn4-Co9EgKsR5ANyXQHaEK?r=0&rs=1&pid=ImgDetMain"
        category="Electronics"
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
      <ProductCard
        name="Máy Xay Thịt Công Nghiệp MK 12"
        price={999}
        description="Máy Xay Thịt Công Nghiệp MK 12 - Xay Siêu Khoẻ - Giá Rẻ Nhất"
        image="https://dienmayachau.com.vn/wp-content/uploads/2022/09/may-xay-thit-cong-nghiep-mk-12.jpg"
        category="Electronics"
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
      <ProductCard
        name="Máy cạo râu PS187"
        price={999}
        description="Máy cạo râu PS187 chuyên dành cho barber & salon"
        image="https://tiendichshop.vn/wp-content/uploads/2023/04/may-cao-rau-ps187.jpeg"
        category="Electronics"
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
      <ProductCard
        name="Lò vi sóng Panasonic"
        price={999}
        description="Lò vi sóng Panasonic Giá Rẻ - Chính hãng - Nhiều ưu đãi"
        image="https://hc.com.vn/i/ecommerce/media/00021809_DESKTOP_16940.jpg"
        category="Electronics"
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      /> */}
      <ProductList
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}

export default App;
