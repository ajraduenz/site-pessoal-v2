"use client";
import Footer from "../../src/Components/Footer";
import Header from "../../src/Components/Header";
import useWindowDimensions from "../../src/Components/Functions/useWindowDimensions.js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useWindowDimensions();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
