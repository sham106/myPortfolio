import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: 'Shambach',
          from_email: form.email,
          to_email: 'shambachsikuku@gmail.com',
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setLoading(false);
          setNotification({
            type: 'success',
            message: 'Thank you. I will get back to you as soon as possible.',
          });
          setForm({ name: '', email: '', message: '' });
          setTimeout(() => setNotification(null), 5000);
        },
        (error) => {
          setLoading(false);
          setNotification({
            type: 'error',
            message: 'Something went wrong. Please try again.',
          });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#0D4715] bg-opacity-10 dark:bg-opacity-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#E9762B] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E9762B] bg-opacity-20 flex items-center justify-center">
                  <FiMail className="text-[#E9762B] text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:shambachsikuku@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#E9762B] transition-colors"
                  >
                    shambachsikuku@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E9762B] bg-opacity-20 flex items-center justify-center">
                  <FiLinkedin className="text-[#E9762B] text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/shambach-simiyu-587a081a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#E9762B] transition-colors"
                  >
                    linkedin.com/in/shambach-simiyu
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E9762B] bg-opacity-20 flex items-center justify-center">
                  <FiGithub className="text-[#E9762B] text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/sham106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#E9762B] transition-colors"
                  >
                    github.com/sham106
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              {notification && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    notification.type === 'success'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}
                >
                  {notification.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#E9762B]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#E9762B]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#E9762B]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#E9762B] text-white rounded-lg hover:bg-[#d46925] transition-colors w-full font-semibold"
              >
                {loading ? 'Sending...' : 'Send Message'} <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;