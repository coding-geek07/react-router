import { Outlet, RouterProvider } from "react-router";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import ProductDetail from "./pages/ProductDetail";
// import Signin from "./pages/Signin";
import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
/**
 * Absolute vs Relative URL paths: ">" denotes nested elements
 * Absolute : /dashboard > /dashboard/profile > /dashboard/profile/product
 * Relative : dashboard > profile > product
 * */

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
function App() {
  return (
    <>
      {/* <Navbar /> */}

      <RouterProvider router={routes} />
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products/productDetail" element={<ProductDetail />}>
              <Route path="/products/signin" element={<Signin />}></Route>
            </Route>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes> */}
    </>
  );
}

export default App;
