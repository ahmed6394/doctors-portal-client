import React, { useState } from "react";
import Footer from "../Share/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointemnt = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments
        date={date}
        setDate={setDate}
      ></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointemnt;
