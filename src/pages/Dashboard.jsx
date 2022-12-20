import React from "react";
import DashHeader from "../partials/DashHeader";
import DashHero from "../partials/DashHero";
import DashProducts from "../partials/DashProducts";
import Footer from "../partials/Footer";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <DashHeader />

      <main className="flex-grow">
        <DashHero />
        <DashProducts />
        <Footer />
      </main>
    </div>
  );
}

export default Dashboard;
