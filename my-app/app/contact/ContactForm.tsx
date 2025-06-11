"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error?.message ||
            data.error ||
            "A apărut o eroare la trimiterea mesajului.",
        );
      }

      if (data.error) {
        throw new Error(
          data.error.message ||
            data.error ||
            "A apărut o eroare la trimiterea mesajului.",
        );
      }

      // Clear form on success
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitStatus({
        type: "success",
        message: "Mesajul a fost trimis cu succes. Vă vom contacta în curând!",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "A apărut o eroare la trimiterea mesajului.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pattern py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <Card
              className="mb-12 rounded-sm px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <CardHeader className="mb-3 text-2xl font-bold sm:text-3xl lg:text-2xl xl:text-3xl">
                Contactează-ne
              </CardHeader>
              <CardContent>
                <div className="mb-8 text-center">
                  <p className="mb-3 text-base font-medium">
                    Ne puteți suna la
                  </p>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+40728134976"
                      className="font-semibold hover:underline"
                    >
                      +40 728 134 976
                    </a>
                  </div>
                  <div className="mb-3 flex items-center justify-center gap-4">
                    <div className="h-px flex-1 bg-gray-300"></div>
                    <span className="font-medium text-gray-500">sau</span>
                    <div className="h-px flex-1 bg-gray-300"></div>
                  </div>
                  <p className="text-base font-medium">
                    completați formularul și vă vom contacta noi
                  </p>
                </div>
                {submitStatus.type && (
                  <div
                    className={`mb-8 rounded-sm px-4 py-3 text-base ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium"
                        >
                          Nume și Prenume{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Introduceți numele"
                          required
                          className="border-stroke w-full rounded-sm border px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Introduceți email-ul"
                          required
                          className="border-stroke w-full rounded-sm border px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="phone"
                          className="mb-3 block text-sm font-medium"
                        >
                          Telefon{" "}
                          <span className="text-gray-400">(opțional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Introduceți numărul de telefon"
                          className="border-stroke w-full rounded-sm border px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium"
                        >
                          Mesaj <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Descrieți proiectul dumneavoastră"
                          required
                          className="border-stroke w-full resize-none rounded-sm border px-6 py-3 text-base outline-none focus:border-primary dark:border-transparent dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:opacity-70 dark:shadow-submit-dark"
                      >
                        {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                      </button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Left Shape */}
      <div className="absolute left-0 top-0 -z-10">
        <svg
          width="370"
          height="596"
          viewBox="0 0 370 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_88:141"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="370"
            height="596"
          >
            <rect width="370" height="596" rx="2" fill="#1d6f41" />
          </mask>
          <g mask="url(#mask0_88:141)">
            <path
              opacity="0.15"
              d="M15.5 50.5C15.5 32.5883 30.0883 18 48 18H321.5C339.412 18 354 32.5883 354 50.5V545.5C354 563.412 339.412 578 321.5 578H48C30.0883 578 15.5 563.412 15.5 545.5V50.5Z"
              stroke="url(#paint0_linear_88:141)"
              strokeWidth="37"
            />
            <path
              opacity="0.15"
              d="M13 52.9787C13 34.6657 27.7157 19.9787 46 19.9787H324C342.284 19.9787 357 34.6657 357 52.9787V543.021C357 561.334 342.284 576.021 324 576.021H46C27.7157 576.021 13 561.334 13 543.021V52.9787Z"
              stroke="url(#paint1_linear_88:141)"
              strokeWidth="26"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_88:141"
              x1="184.75"
              y1="18"
              x2="184.75"
              y2="578"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8DC63F" />
              <stop offset="1" stopColor="#8DC63F" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_88:141"
              x1="185"
              y1="19.9787"
              x2="185"
              y2="576.021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8DC63F" />
              <stop offset="1" stopColor="#8DC63F" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Shape */}
      <div className="absolute bottom-0 right-0 -z-10">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="277"
              y1="-162"
              x2="277"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8DC63F" stopOpacity="0.4" />
              <stop offset="1" stopColor="#8DC63F" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#8DC63F" stopOpacity="0" />
              <stop offset="1" stopColor="#8DC63F" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Section Overlay */}
      <div className="section-overlay-dots" />
    </section>
  );
};

export default ContactForm;