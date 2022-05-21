import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Share/PrimaryButton";

const Treatment = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl px-12">
      <div>
        <img src={treatment} alt="Album" className="w-458 h-576" />
      </div>
      <div className="card-body w-497">
        <h2 className="card-title text-5xl font-bold">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions justify-end">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
