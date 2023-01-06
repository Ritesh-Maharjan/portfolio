import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Email, LinkedIn } from "@mui/icons-material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
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
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      }, 5000);
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
      <h1 className="text-white text-xl md:text-3xl font-semibold text-center">
        Contact Me!!
      </h1>
      <div className="flex justify-center items-center flex-col w-[90vw] m-auto p-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <h1 className="flex items-center justify-center">
            <PhoneAndroidIcon fontSize="small" className="mr-1" />
            <a href="tel:7786689615">+1-778-668-9615</a>
          </h1>

          <h1 className="flex items-center justify-center">
            <Email fontSize="small" className="mr-1" />
            <a href="mailto:riteshmaharjan07@gmail.com">
              riteshmaharjan07@gmail.com
            </a>
          </h1>

          <h1>
            <a
              className="flex items-center justify-around mr-4"
              href="https://github.com/Ritesh-Maharjan"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="small" className="mr-1" />
              Github
            </a>
          </h1>

          <h1>
            <a
              className="flex items-center justify-center"
              href="https://github.com/Ritesh-Maharjan"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn fontSize="small" className="mr-1" />
              LinkedIn
            </a>
          </h1>
        </div>

        <div className="px-6 mt-6 md:w-2/4 md:min-w-[600px]">
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
              className="rounded-md py-2 px-10 mt-2 bg-gray-800 text-white hover:bg-white hover:text-gray-800 self-center"
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
