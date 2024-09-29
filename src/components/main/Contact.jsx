import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { inputBoxStyle, primaryButtonStyle } from "../sub/styles";
import { PROFILE_DATA } from "../../constants/data";

// validation schema
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

// Function to send email via EmailJS
const sendEmail = (values, resetForm, setSubmitting) => {
  emailjs
    .send(
      "service_07jlw3g",
      "template_pc21urg",
      {
        to_name: values.fullName,
        to_email: values.email,
        message: values.message,
      },
      "gKg9Aj_i-99vIbIxY"
    )
    .then(
      (response) => {
        toast.success("Message sent successfully!");
        resetForm();
        setSubmitting(false);
      },
      (error) => {
        toast.error("Failed to send message. Please try again later.");
        setSubmitting(false);
      }
    );
};

const Contact = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">
        Contact
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />
          <ContactInfoCard
            icon={<IoPhonePortraitOutline />}
            text={PROFILE_DATA.phone}
          />
          {/* <ContactInfoCard
            icon={<MdOutlineWeb />}
            text={PROFILE_DATA.website}
          /> */}
        </div>

        <div>
          <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">
            Contact Form
          </h5>

          <Formik
            initialValues={{ fullName: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              sendEmail(values, resetForm, setSubmitting);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col">
                {/* <Field
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className={`${inputBoxStyle} ${ErrorMessage ? "mb-5" : ""}`}
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-xs mb-5"
                /> */}

                <Field name="fullName">
                  {({ field, meta }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Full Name"
                      className={`${inputBoxStyle} text-white ${
                        meta.touched && meta.error ? "mb-1" : "mb-5"
                      }`}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-xs mb-5"
                />

                <Field name="email">
                  {({ field, meta }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder="Email"
                      className={`${inputBoxStyle} text-white  ${
                        meta.touched && meta.error ? "mb-1" : "mb-5"
                      }`}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mb-5"
                />

                <Field name="message">
                  {({ field, meta }) => (
                    <textarea
                      {...field}
                      placeholder="Message"
                      className={`${inputBoxStyle} text-white ${
                        meta.touched && meta.error ? "mb-1" : "mb-5"
                      }`}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs mb-5"
                />

                <button
                  type="submit"
                  className={`${primaryButtonStyle}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting" : "SUBMIT"}
                </button>
              </Form>
            )}
          </Formik>

          {/* React Toastify container for notifications */}
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5 overflow-hidden">
      <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700">
        {icon}
      </div>

      <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
