import { lazy, useEffect } from "react";
import { Suspense } from "react/cjs/react.production.min";
import { GlobalStyles } from "./globalStyles";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  useEffect(() => {
    console.log(
      "%cReeMan Tech Wish You a great day ahead!",
      "color: purple; font-family: sans-serif; font-size: 3em; font-weight: bolder; text-shadow: #000 1px 1px;"
    );
  }, []);
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyles />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
