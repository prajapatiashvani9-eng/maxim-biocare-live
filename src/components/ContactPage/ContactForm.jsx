import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demonstration only.
    // Connect a backend or email service to deliver enquiries.

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      enquiryType: "",
      message: "",
    });
  };

  const inputClass =
    "block w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10";

  return (
    <div
      id="contact-form"
      className="scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-8 lg:p-10"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-sm">
        Send An Enquiry
      </p>

      <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
        How can we help you?
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
        Fill out the form below with your details and enquiry.
      </p>

      {submitted && (
        <div
          role="status"
          className="mt-6 flex items-start gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-800"
        >
          <CheckCircle size={21} className="mt-0.5 shrink-0" />

          <p className="text-sm leading-relaxed">
            The form was validated successfully. Your enquiry
            has not been sent yet. Please connect a backend or
            email service to receive submissions.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">

        {/* Name and Email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div className="min-w-0">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full Name *
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              autoComplete="name"
              required
            />
          </div>

          <div className="min-w-0">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email Address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              autoComplete="email"
              required
            />
          </div>

          {/* Company */}
          <div className="min-w-0">
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Company Name
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company"
              value={formData.company}
              onChange={handleChange}
              className={inputClass}
              autoComplete="organization"
            />
          </div>

          {/* Phone */}
          <div className="min-w-0">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              autoComplete="tel"
            />
          </div>

        </div>

        {/* Enquiry Type */}
        <div>
          <label
            htmlFor="enquiryType"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Enquiry Type *
          </label>

          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Select enquiry type</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Business Partnership">Business Partnership</option>
            <option value="Product Information">Product Information</option>
            <option value="Distribution Enquiry">Distribution Enquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Your Message *
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us how we can help..."
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-y`}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-slate-950 sm:w-auto sm:px-8 sm:text-base"
        >
          Submit Enquiry
          <Send size={18} />
        </button>

      </form>
    </div>
  );
};

export default ContactForm;