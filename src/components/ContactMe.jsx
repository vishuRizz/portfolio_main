import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ConnectMe = () => {
  return (
    <div className="min-h-screen px-5 py-20 text-white bg-gray-900">
      
      {/* Header Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold">Connect With Me</h1>
        <p className="text-lg text-gray-400">
          I'm always open to exciting projects, collaborations, and opportunities. Reach out to discuss your vision and let’s create something amazing together!
        </p>
      </section>
      
      {/* Services & Why Connect Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="mb-6 text-3xl font-semibold text-center">Why Connect?</h2>
        <p className="mb-8 text-lg leading-relaxed text-center text-gray-300">
          With expertise in web development and machine learning, I bring dynamic, user-centered solutions to life. Whether you have an idea, a project, or just want to network, let's chat!
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Innovative Web Solutions</h3>
            <p className="text-gray-400">
              Leveraging modern frameworks like MERN and Next.js, I create responsive and efficient web applications tailored to your needs.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Machine Learning Integration</h3>
            <p className="text-gray-400">
              From predictive analytics to intelligent automation, I can help integrate machine learning for smarter, data-driven decisions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="max-w-lg mx-auto mb-16">
        <h2 className="mb-6 text-3xl font-semibold text-center">Let’s Get in Touch</h2>
        <p className="mb-8 text-center text-gray-400">
          Leave your email below, and I’ll get back to you soon!
        </p>
        <form className="p-8 bg-gray-800 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-gray-400">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 text-gray-300 bg-gray-900 border border-gray-700 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-400">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-gray-300 bg-gray-900 border border-gray-700 rounded"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 transition bg-blue-600 rounded hover:bg-blue-500">
            Contact Me
          </button>
        </form>
      </section>
      
      {/* Social Links Section */}
      <section className="text-center">
        <h2 className="mb-4 text-xl font-semibold">Follow Me</h2>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com" aria-label="GitHub" className="text-gray-400 transition hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 transition hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 transition hover:text-white">
            <FaTwitter />
          </a>
          <a href="mailto:youremail@example.com" aria-label="Email" className="text-gray-400 transition hover:text-white">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ConnectMe;
