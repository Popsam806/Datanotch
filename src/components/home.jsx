import React from "react";
import MainLayout from "./MainLayout";
import Nav from "./Nav";
import Section from "./Section";

function Home() {
  return (
    <MainLayout>
      <div className="p-3 md:p-10 home overflow-scroll">
        <Nav />
        <Section />
      </div>
    </MainLayout>
  );
}

export default Home;
