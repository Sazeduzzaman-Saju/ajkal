import React from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";

const HomePage = () => {
  return (
    <section>
      <PageTitle title="Home" description="Text" />
      <div className="container" style={{height: '100vh'}}>
        <h1 className="pt-5 mt-5">THis is Home Page</h1>
      </div>
    </section>
  );
};

export default HomePage;
