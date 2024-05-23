import React from "react";
import SideNav from "./SideNav";
import './styles.css'

function MainLayout({children}) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-6 mainlayout">
      <SideNav />
      <div className="md:col-span-5">{children}</div>
    </div>
  );
}

export default MainLayout;
