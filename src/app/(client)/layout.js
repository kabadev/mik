import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductProvider } from "@/context/productContext";
import { CartProvider } from "@/context/CartContext";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {/* <Toaster position="top-center" /> */}
      {children}
      <Footer />
    </div>
  );
}
