import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
import axios from "axios";

const Contact = () => {
  // https://formspree.io/f/xqkokple

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xlekejlj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div id="contact">
      <h1 className="text-white text-xl lg:text-3xl font-semibold text-center">
        Contact Me!!
      </h1>
      <div className="flex w-[90vw] m-auto p-6 flex-col md:flex-row">
        <div className="relative flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.536760197954!2d-123.03039648434628!3d49.2472713793276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676c2290b5005%3A0x33e42b4c70ecabca!2s4176%20Skeena%20St%2C%20Vancouver%2C%20BC%20V5R%202L3!5e0!3m2!1sen!2sca!4v1672781528253!5m2!1sen!2sca"
            width="600"
            height="450"
            className="border-0 w-full lg:h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          >
          </iframe>
          <div className="absolute bottom-2 left-14 border-2 bg-gray-800 px-4 py-4 rounded-3xl">
            <h1 className="flex space-between">
              Phone:
              <a className="ml-2 font-semibold" href="tel:7786689615">
                +1-778-668-9615
              </a>
            </h1>
            <h1>
              Email:
              <a
                className=" ml-2 font-semibold"
                href="mailto:riteshmaharjan07@gmail.com"
              >
                riteshmaharjan07@gmail.com
              </a>
            </h1>
            <div className="mt-2 flex items-center">
              <a
                className="flex items-center justify-around mr-4"
                href="https://github.com/Ritesh-Maharjan"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="small" className="mr-1" />
                Github
              </a>
              <a
                className="flex items-center justify-center"
                href="https://github.com/Ritesh-Maharjan"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn fontSize="small" className="mr-1" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="px-6 mt-6 flex-1">
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <p className="text-green-400 text-center mb-4 font-bold text-xl">
              {status.info.msg}
            </p>
          )}
          <form onSubmit={handleOnSubmit}>
            <p className="mb-2 text-center text-white">
              Please fill out the following forms if you have any questions and
              want to reach out to me!!
            </p>
            <label className="flex flex-col">
              Name:
              <input
                type="text"
                id="name"
                onChange={handleOnChange}
                required
                value={inputs.name}
                className="border-none px-2 py-1 mt-2 bg-gray-700 focus:outline-purple-800 text-white w-full"
              />
            </label>
            <label className="flex flex-col">
              Email:
              <input
                type="email"
                id="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
                className="border-none px-2 py-1 mt-2 bg-gray-700 focus:outline-purple-800 text-white w-full"
              />
            </label>
            <label className="flex flex-col">
              Message:
              <textarea
                id="message"
                name="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
                className="border-none px-2 py-1 mt-2 bg-gray-700 focus:outline-purple-800 text-white w-full h-[20vh]"
              />
            </label>
            <button
              className="rounded-md py-2 px-10 mt-2 bg-gray-800 hover:text-white"
              type="submit"
            >
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
