import "./contact.css";
import {toast} from 'react-toastify'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
export default function Contact() {
  return (
    <section className="contactPage">
      <div className="heading">
        <small>Get in touch...</small>
        <h1> Contact Us</h1>
      </div>
      <div className="messageUsSection">
        <div className="textContent">
          <h3>Message Us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            voluptates eos rerum quod nobis eaque consectetur incidunt deserunt
            odio animi.
          </p>
          <div className="location">
            <p>
              <span>
                <LocationOnIcon />
              </span>
              2nd Floor, GM Narayana Reddy Layout, Konappana Agrahara, Electronic City, Bangalore-560100
            </p>
            <p>
              <span>
                <EmailTwoToneIcon />
              </span>
              info@zexoagency.com
            </p>
            <p>
              <span>
                <LocalPhoneRoundedIcon />
              </span>
              +91 6385700657
            </p>
          </div>
        </div>
        <div className="contactForm">
          <form
            action="info@zexoagency.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="http://shringaar.netlify.app/contact"
            />
            <div className="name">
              <input type="text" name="first_name" placeholder="First Name" required/>

              <input type="text" name="last_name" placeholder="Last Name" required/>
            </div>

            <input
              type="email"
              name="email"
              id="contactEmail"
              placeholder="email Id"
              required
            />

            <textarea
              id="story"
              name="story"
              rows="5"
              cols="15"
              placeholder="I recently had the pleasure of discovering Shringaar jwellery..."
            ></textarea>

            <button
              type="submit"
              onClick={() => {
                toast.success("Thank you for messaging us, Have a great Day ", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                  className: "loginToast",
                });
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Map removed as requested */}
    </section>
  );
}
