import { ToastContainer, toast } from 'react-toastify';

interface EmailData {
  from_name: string;
  email: string;
  subject: string;
  message: string;
}

export async function handleSubmitTour(emailData: EmailData) {
  try {
    const response = await fetch('https://email-lemon-pi.vercel.app/api/oceantour', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });

    // Handling non-2xx HTTP status codes
   
    if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Detailed Error:", errorDetails);
        toast.error(`Failed: ${errorDetails.message}`);
        return;
      }
      

    toast.success("Reservation confirmed!");
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error("An error occurred. Please try again.");
  }
}

export default function Toaster() {
  return <ToastContainer hideProgressBar={true} />;
}
