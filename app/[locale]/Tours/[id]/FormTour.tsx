'use client'
import {useState} from 'react';
import react from 'react';
interface FormProps{
    newPrice:string
}
const FormTour: React.FC<FormProps> = ({ newPrice }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert(`Merci ${formData.name}, nous avons bien reçu votre message !`);
      };
    return (
        <div className='border-spacing-3  items-center mt-20 justify-center text-center '>
            <div className='w-1/5'>
                









            </div>
        </div>
    )
}
export default  FormTour;