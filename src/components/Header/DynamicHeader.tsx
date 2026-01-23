"use client";

import dynamic from "next/dynamic";

// My wrapper
const Header = dynamic(() => import("./Header"), {
  ssr: false,
  loading: () => (
    <header
      className="text-white p-4 shadow-md h-16"
      style={{ backgroundColor: "#d4d5b9ff" }}
    >
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    </header>
  ),
});

export default function DynamicHeader() {
  return <Header />;
}
