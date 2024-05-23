import React from "react";
import { AddBtn, StackCard } from "./StackCard";

function Section() {
  return (
    <div>
      <div className="mb-10">
        <h2 className=" text-3xl ">Welcome (Name of user)</h2>
        <h4>User Info</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reprehenderit corporis dolores ipsam ipsum ratione!</p>
      </div>
      <div>
        <h3 className="mb-3">Hosting Service</h3>
        <div className=" overflow-scroll md:overflow-hidden">
          <StackCard />
          <StackCard />
        </div>
        <div>
          <AddBtn />
          <AddBtn />
        </div>
      </div>
      <div>
        <h3 className="mb-3">Hosting Service</h3>
        <div>
          <StackCard />
          <StackCard />
        </div>
        <div>
          <AddBtn />
          <AddBtn />
        </div>
      </div>
    </div>
  );
}

export default Section;
