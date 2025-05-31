import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "./aboutUs.module.css";
import metalgate from "../../assets/img/metal.png";

function AboutUs() {
  return (
    <>
      <Navbar title="METAL GATES" />
      <div className={styled.container}>
      <div className={styled.aboutpage}>
        <div className={styled.content}>
          <h2>About Us</h2>
          <p>
            Based on the beautiful north Norfolk coast, Unique Metal Gates is a
            small fabrication company who are big on customer service and doing
            things a little bit differently. With beginnings in the development
            and fabrication of woven steel fencing we received regular requests
            for handmade gates to fit our fencing. As they were becoming noticed
            by more people enquiries increased, so we set to work to develop the
            range you see today. As a team we love the freedom to be creative.
            So whether we are working on a 60cm wide garden gate or a driveway
            gate spanning six metres, it is a great feeling to know they are
            enjoyed by our customers across the UK every day.
          </p>
          <img src={metalgate} alt="metal gate design" />
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
