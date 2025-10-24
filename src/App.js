import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react"; // For icons (you can install via npm install lucide-react)

function PortfolioApp() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <h1
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Damayanthi Ravinuthala
        </h1>

        {/* Center Navigation */}
        <div className="flex space-x-8 text-base font-medium">
          <button onClick={() => scrollToSection("hero")} className="hover:text-indigo-500">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-indigo-500">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-indigo-500">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-indigo-500">
            Contact
          </button>
          <a
            href="https://drive.google.com/file/d/1Ey0NJisVlDv_wqcWummPwKGlv2p6hoYt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500"
          >
            Resume
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:opacity-90 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* HERO */}
      <section id="hero" className="text-center pt-20 pb-16">
        <motion.img
          src="/profile.jpg"
          alt="Damayanthi Ravinuthala"
          className="w-40 h-40 mx-auto rounded-full shadow-lg object-cover border-4 border-indigo-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="text-4xl font-bold mt-6">Damayanthi Ravinuthala</h1>
        <p className="text-lg mt-2 text-indigo-600 dark:text-indigo-400">
          Cloud AI Engineer | Full-Stack ML Application Developer
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-3xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">About Me</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          I am a <strong>Cloud AI Engineer</strong> and <strong>Full-Stack Developer</strong> passionate about building
          intelligent, scalable, and user-centric applications. My expertise spans across
          <strong> Google Cloud, AI/ML model deployment, and full-stack web development</strong>.
          <br />
          <br />
          I love integrating <strong>machine learning models</strong> into production-ready systems using frameworks like
          TensorFlow and PyTorch, while designing efficient backend services with <strong>Spring Boot</strong> and
          <strong> Node.js</strong>. I also focus on <strong>UI/UX design</strong> to ensure a seamless and impactful
          user experience. My goal is to bridge the gap between <strong>AI innovation</strong> and
          <strong> real-world application</strong>.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Skills</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Cloud Skills:</strong> Google Cloud Platform (Vertex AI, Cloud Run, BigQuery, App Engine)
          </li>
          <li>
            <strong>Programming:</strong> Java, C++, Python, JavaScript, HTML, CSS, SQL
          </li>
          <li>
            <strong>Web Frameworks:</strong> Web Development, UI/UX Design, Figma, Spring Boot, Node.js, Flask, Thymeleaf
          </li>
          <li>
            <strong>Data ML:</strong> Machine Learning, Predictive Modeling, Data Structures, Pandas, NumPy
          </li>
          <li>
            <strong>Soft Skills:</strong> Problem Solving, Team Collaboration, Analytical Thinking
          </li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-500 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Document AI Extractor",
              desc: "Extract structured data from PDFs using GCP Document AI and GPT-4o.",
              link: "https://github.com/Damayanthi19/document-ai-extractor",
            },
            {
              title: "Vertex AI Image Classifier",
              desc: "Custom image classifier deployed on Vertex AI with Cloud Storage.",
              link: "https://github.com/Damayanthi19/community-content",
            },
            {
              title: "AI Chatbot on Cloud Run",
              desc: "Transformer-based chatbot deployed using Cloud Run & API Gateway.",
              link: "https://github.com/Damayanthi19/ai-chatbot-cloudrun",
            },
            {
              title: "EV Threat Detection",
              desc: "Detects cyberattacks in EV charging using ML threat modeling and STRIDE framework.",
              link: "https://github.com/Damayanthi19/ev-threat-detection",
            },
            {
              title: "Ecommerce Store",
              desc: "Full-stack eCommerce app built with Spring Boot, MySQL, and Thymeleaf.",
              link: "https://github.com/Damayanthi19/Ecommerce_Store",
            },
            {
              title: "Sales Forecast Project",
              desc: "Predicts future sales using time-series ML regression for data-driven insights.",
              link: "https://github.com/Damayanthi19/sales-forecast-project",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:bg-indigo-50 dark:hover:bg-gray-700"
            >
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-indigo-500 mt-3 inline-block">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center mt-20 pb-12">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Contact</h2>
        <p>📧 damayantiravinuthala@gmail.com</p>
        <div className="mt-3 space-x-4">
          <a
            href="https://github.com/Damayanthi19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/damayanthi-ravinuthala-51052025b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default PortfolioApp;
