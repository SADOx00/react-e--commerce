import Categories from "./components/categories/Categories";
import Header from "./components/header";
import Products from "./components/products/Products";
function App() {
  return (
    <>
      <Header />
      <main className="home px-6 flex justify-between">
        <section className="pb-64  overflow-auto max-h-[calc(100vh-_-100px)] categories">
          <Categories />
        </section>
        <section className="products flex-[8]">
          <Products />
        </section>
        <section className="cart-total">
          <div>cart totals</div>
        </section>
      </main>
    </>
  );
}

export default App;
