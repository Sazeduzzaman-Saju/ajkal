import React from "react";
import ComingSoon from "../../Comps/ComingSoon/ComingSoon";

const EPaper = () => {
  const title = "সাপ্তাহিক আজকাল";
  const textOne = '"ইপেপার" খুব শীঘ্রই চলে আসবে ';
  const textTwo = '"অপেক্ষা করুন ';
  return (
    <>
      <ComingSoon title={title} textOne={textOne} textTwo={textTwo} />
    </>
  );
};

export default EPaper;
