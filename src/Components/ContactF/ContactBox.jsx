import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e1dc3b7-dbdd-45b8-95e7-85089a8856cf");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact flex flex-col">
      <div className="flex-none ">
        <h2 className="text-3xl text-center mb-10 sm:text-5xl lg:text-6xl tracking-wide">
          Contact{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Our team will contact you and solve your queries.
            Your feedback, questions, and suggestions are important to us as we
            strive to provide exceptional service to our Gym community.
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              Mail : Arnoldgymproddatur@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="" />
              +91 9885797478
            </li>
            <li>
              <img src={location_icon} alt="" />
              Zina Road , Canara bank upstairs - Proddatur 516360
              <br /> 1st floor: LadiesGym
              <br />
              2nd floor : GentsGym
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
