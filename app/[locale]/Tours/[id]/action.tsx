import { ToastContainer, toast } from 'react-toastify';

interface EmailData {
  from_name: string;
  email: string;
  subject: string;
  message: string;
  notre: string[];
}

export async function handleSubmitTour(emailData: EmailData) {
  try {
    const response = await fetch('https://email-lemon-pi.vercel.app/api/oceantour', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });
  
    if (!response.ok) {
      const errorDetails = await response.json().catch(() => ({ message: "Unknown error" }));
      // console.error("Detailed Error:", errorDetails);
      toast.error(`Failed: ${errorDetails.message || "Unexpected error."}`);
    } else {
      toast.success("Reservation confirmed!");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("An unexpected error occurred.");
  }
  
}

export default function Toaster() {
  return <ToastContainer hideProgressBar={true} />;
}
