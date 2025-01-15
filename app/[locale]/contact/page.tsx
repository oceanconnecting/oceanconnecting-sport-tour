import ContactForm from "./contactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="   min-h-screen bg-gray-50 py-10">
      <div className="mt-12 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Page</h1>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

  