import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;


{/* <Header />
      <main className="min-h-screen pt-16 px-4">{props.children}</main>
<Footer /> */}