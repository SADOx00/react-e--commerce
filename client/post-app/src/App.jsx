import Cart from "./components/cart/Cart";
import Categories from "./components/categories/Categories";
import Header from "./components/header";
import Products from "./components/products/Products";
function App() {
  return (
    <>
      <Header />
      <main className="home md:flex-row px-6 flex flex-col justify-between">
        <section className="md:pb-64 md:mr-0 -mr-[24px] mb-4 overflow-auto max-h-[calc(100vh-_-100px)] categories">
          <Categories />
        </section>
        <section className="products flex-[8] max-h-[calc(100vh-100px)] overflow-y-auto pb-10 ">
          <Products />
        </section>
        <section className=" border md:pb-0 pb-24 cart-total min-w-[300px] md:-mt-[24px] md:-mr-[24px]">
          <Cart />
        </section>
      </main>
    </>
  );
}

export default App;
