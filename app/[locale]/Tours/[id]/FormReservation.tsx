import ParticipantCounter from '@/Components/ParticipantCounter';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { cn } from '@/lib/utils';
import { Checkbox } from "@/Components/ui/checkbox"
import { handleSubmitReservationTour } from "./handleSubmitReservationTour";
import {Tour} from "@/types"
interface ReservationFormData {
  adults: number;
  children: number;
  firstName: string;
  lastName: string;
  numberPhone: string;
  email: string;
  hasAnimal:boolean;


}
interface FormProps {
  tour: Tour;
}

const FormReservation:React.FC<FormProps> = ({tour}) => {
  const tt = useTranslations("homepage.tours");

  const [formData, setFormData] = useState<ReservationFormData>({
    adults: 0,
    children: 0,
    firstName: "",
    lastName: "",
    numberPhone: "",
    email: "",
    hasAnimal: false, // 👈 Ajouté ici
  
  });

  const [errors, setErrors] = useState<Partial<ReservationFormData>>({});

  const increment = (field: keyof ReservationFormData) =>
    setFormData((prev) => ({
      ...prev,
      [field]: typeof prev[field] === 'number' ? (prev[field] as number) + 1 : prev[field],
    }));

  const decrement = (field: keyof ReservationFormData) =>
    setFormData((prev) => ({
      ...prev,
      [field]: typeof prev[field] === 'number' && prev[field] > 0 ? (prev[field] as number) - 1 : 0,
    }));
// function of input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
// function of validation the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<ReservationFormData> = {};

    if (!formData.firstName) newErrors.firstName =tt("form.errorFirstName");
    if (!formData.lastName) newErrors.lastName = tt("form.errorLastName");
    if (!formData.email) {
      newErrors.email = tt("form.errorEmail1");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = tt("form.errorEmail2");
    }

    if (!formData.numberPhone) {
      newErrors.numberPhone = tt("form.errornumberPhon1");
    } 
    // handleSubmitReservationTour(formData); // Envoyer les données au parent
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
       console.log("Form submitted successfully", formData);
      // Submit logic here

      try {
        const formDataToSend = new FormData();
  formDataToSend.append("formData", JSON.stringify(formData));
  formDataToSend.append("tour", JSON.stringify(tour));
  
        await handleSubmitReservationTour(formDataToSend); // 👉 Appel de la fonction d'envoi
        alert("Réservation envoyée avec succès !");
      } catch (error) {
        console.error("Erreur lors de l'envoi de la réservation", error);
        alert("Une erreur s'est produite lors de l'envoi.");
      }
  
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto bg-white p-6 rounded-3xl shadow-xl space-y-6">
      {/* Participants Section */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1  align-middle  text-center justify-center  sm:grid-cols-1   gap-10  space-x-4">
        <div className="  ">
          
          <ParticipantCounter
            value={formData.adults}
            onDecrement={() => decrement("adults")}
            onIncrement={() => increment("adults")} label={tt("form.Number_Adults")}          />
        </div>
        <div className=" ">

          <ParticipantCounter
            value={formData.children}
            onDecrement={() => decrement("children")}
            onIncrement={() => increment("children")} label={tt("form.Number_Children")}          />
        </div>
      </div>

      {/* Terms and Conditions */}






<div className="space-y-6">
  {/* Input Fields */}
  <div className="grid grid-cols-1 items-center justify-center text-start md:grid-cols-2 gap-6">
    <LabelInputContainer>
      <Label htmlFor="firstName" className=" text-base   font-normal text-gray-700">
        {tt("form.FirstName")}
      </Label>
      <Input
        id="firstName"
        placeholder="Tyler"
        type="text"
        value={formData.firstName}
        onChange={handleInputChange}
        className="mt-1 block h-full w-4/5 border bg-gray-50 rounded-xl border-background-200 shadow-md py-3   px-5 outline-none focus:border-neutral-500  sm:text-base"
              />
      {errors.firstName && (
        <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
      )}
    </LabelInputContainer>

   <LabelInputContainer>
      <Label htmlFor="lastName" className="text-base  text-start font-normal text-gray-700">
        {tt("form.LastName")}
      </Label>
      <Input
        id="lastName"
        placeholder="Durden"
        type="text"
        value={formData.lastName}
        onChange={handleInputChange}
        className="mt-1 block h-full w-4/5 border bg-gray-50 rounded-xl border-background-200 shadow-md py-3   px-5 outline-none focus:border-neutral-500  sm:text-base"
              />
      {errors.lastName && (
        <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
      )}
    </LabelInputContainer>
  </div>

  <div className="grid grid-cols-1 justify-center items-center  md:grid-cols-2 gap-6">
    <LabelInputContainer>
      <Label htmlFor="numberPhone" className="text-base  text-start  font-normal text-gray-700">
        {tt("form.numberPhone")}
      </Label>
      <Input
        id="numberPhone"
        placeholder="06*******5"
        type="text"
        value={formData.numberPhone}
        onChange={handleInputChange}
        className="mt-1 block h-full w-4/5 border bg-gray-50 rounded-xl border-background-200 shadow-md py-3   px-5 outline-none focus:border-neutral-500  sm:text-base"
              />
      {errors.numberPhone && (
        <p className="mt-1 text-sm text-red-500">{errors.numberPhone}</p>
      )}
    </LabelInputContainer>

    <LabelInputContainer>
      <Label htmlFor="email" className="text-base  text-start  font-normal text-gray-700">
        {tt("form.email")}
      </Label>
      <Input
        id="email"
        placeholder="name@gmail.com"
        type="text"
        value={formData.email}
        onChange={handleInputChange}
        className="mt-1 block h-full w-4/5 border bg-gray-50 rounded-xl border-background-200 shadow-md py-3   px-5 outline-none focus:border-neutral-500  sm:text-base"
             />
      {errors.email && (
        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
      )}
    </LabelInputContainer>
  </div>
</div>
<div className="items-top items-start justify-start p-10  flex space-x-2">
  <Checkbox
    id="hasAnimal"
    checked={formData.hasAnimal} // Assurez-vous que c'est un boolean
    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, hasAnimal: Boolean(checked) }))} 
  />
  <div className="grid gap-1.5 leading-none">
    <label
      htmlFor="hasAnimal"
      className="text-lg font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
     {tt("form.hasAnimal")}?  
    </label>
  </div>
</div>

      {/* Submit Button */}
      <div className="flex justify-center">
      <button 
  type="submit"
  className={`w-1/4 h-12 mt-4 sm:w-4/5 md:w-2/3 lg:w-1/3 rounded-full ${
    (formData.adults === 0 && formData.children === 0)
      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
      : "bg-slate-300 hover:bg-slate-700 hover:text-white"
  }`}
  disabled={formData.adults === 0 && formData.children === 0} 
>
  {tt('form.Confirm_Reservation')}
  <BottomGradient />
</button>

      </div>
    </form>
  );
};

export default FormReservation;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-6  ", className)}>{children}</div>;
};
