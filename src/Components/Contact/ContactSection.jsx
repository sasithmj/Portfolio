import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMessage, FaPhone } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_EMAIL_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
        // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccessMessage("Message sent successfully!");
          formRef.current.reset(); // Clear form fields
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="bg-gray-900 py-16" id="Contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-purple-500 text-lg font-medium mb-4">
            GET IN TOUCH
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact Me
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Talk
            </h3>

            <div className="flex items-center space-x-4">
              <div className="bg-pink-500/10 p-4 rounded-lg">
                <FaMailBulk className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Mail me at</p>
                <a
                  href="mailto:sasithmjayaweera@gmail.com"
                  className="text-white hover:text-purple-500 transition-colors"
                >
                  sasithmjayaweera@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-pink-500/10 p-4 rounded-lg">
                <FaPhone className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call me at</p>
                <a
                  href="tel:+94712294930"
                  className="text-white hover:text-purple-500 transition-colors"
                >
                  +94 (71) 229 4930
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="john"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FaMessage className="w-4 h-4" />
              </button>

              {successMessage && (
                <p className="text-green-400 mt-4 text-center">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
