import Footer from "./components/Footer";
import { ProductProvider } from "@/context/productContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { EdgeStoreProvider } from "@/lib/edgestore";

export default function RootLayout({ children }) {
  return (
    <main>
      <EdgeStoreProvider>
        <Header />
        <Sidebar />
        <div className="">
          <div className="min-h-screen  ml-[250px] w-[calc(100%-250px)]">
            {children}
            {/* <Toaster position="top-center" /> */}
          </div>
          <Footer />
        </div>
      </EdgeStoreProvider>
    </main>
  );
}
