import React from "react";
import Footer from "../Share/Footer";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info></Info>
      <Services />
      <Treatment />
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
