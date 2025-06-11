import PageHeader from "@/contact/PageHeader";
import ContactSection from "@/components/contact-section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DESA Isolation",
  description: "Trimiteți-ne un mesaj pentru a ne contacta.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Trimiteți-ne un mesaj pentru a ne contacta."
      />

      <ContactSection />
    </>
  );
};

export default ContactPage;