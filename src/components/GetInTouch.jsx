import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function GetInTouch() {
  const [animationData, setAnimationData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("/letsconnect.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "https://formspree.io/f/mvgryedn";
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* 👈 Left: Contact Form */}
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-10">
            Have a project, idea, or just want to say hi? I’d love to connect!
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-md bg-black/30 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="mt-2 bg-pink-500 hover:bg-pink-600 transition-all text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105"
            >
              Send Message ✉️
            </button>

            {status === "success" && (
              <p className="text-green-400 mt-3 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-3 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* 👉 Right: Lottie Animation */}
        <div className="flex justify-center items-center">
          {animationData && (
            <div className="w-full md:w-[90%] max-w-[600px]">
              <Lottie animationData={animationData} loop />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
