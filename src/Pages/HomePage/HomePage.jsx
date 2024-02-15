import React from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import Banner from "./Banner/Banner";

const HomePage = () => {
  return (
    <>
      <PageTitle title="সাপ্তাহিক আজকাল || Saptahik Ajkal" description="Text" />
      <section>
        <div className="container-fluid px-0">
          <Banner></Banner>
        </div>
      </section>
    </>
  );
};

export default HomePage;
