import { useState } from "react";
import emailjs from "emailjs-com";
import Obfuscate from "react-obfuscate";
import { Impressum } from "./impressum";
import { PrivacyPolicy } from "./privacyPolicy";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const emailjs_service_id = process.env.EMAILJS_SERVICE_ID;
const emailjs_template_id = process.env.EMAILJS_TEMPLATE_ID;
const emailjs_user_id = process.env.EMAILJS_USER_ID;

export const Contact = (props) => {
  const [, setState] = useState(initialState);
  const [isSent, setSent] = useState(false);
  const [isSending, setSending] = useState(false);
  const [isError, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    setError(false);
    setSent(false);
    setSending(true);

    e.preventDefault();

    emailjs
      .sendForm(
        emailjs_service_id,
        emailjs_template_id,
        e.target,
        emailjs_user_id
      )
      .then(
        (result) => {
          clearState();
          setSent(true);
          setSending(false);
        },
        (error) => {
          clearState();
          setError(true);
          setSending(false);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>

              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                {isSent && (
                  <div id="success">
                    <i className="fa fa-check"></i> form sent successfully
                  </div>
                )}
                {isError && (
                  <div id="error">
                    <i className="fa fa-exclamation-triangle"></i> Something
                    went wrong, please contact using our email address
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={isSending}
                >
                  Send Message{" "}
                  {isSending && <i className="fa fa-cog fa-spin"></i>}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            {props?.data?.phone && (
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
            )}
            {props?.data?.email && (
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  <Obfuscate
                    email={props.data.email}
                    headers={{
                      subject: "Contact",
                      body: "Hi there!",
                    }}
                  />
                </p>
              </div>
            )}
          </div>
          {(props?.data?.facebook ||
            props?.data?.twitter ||
            props?.data?.youtube) && (
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    {props?.data?.facebook && (
                      <li>
                        <a href={props.data.facebook}>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                    )}
                    {props?.data?.twitter && (
                      <li>
                        <a href={props.data.twitter}>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    )}
                    {props?.data?.youtube && (
                      <li>
                        <a href={props.data.youtube}>
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Jose Riquelme & Jakub Nieznalski
            UG. <Impressum /> - <PrivacyPolicy />
          </p>
          <p>
            Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
