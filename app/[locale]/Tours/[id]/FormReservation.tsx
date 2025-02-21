import ParticipantCounter from '@/Components/ParticipantCounter';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { cn } from '@/lib/utils';

interface ReservationFormData {
  adults: number;
  children: number;
  firstName: string;
  lastName: string;
  numberPhone: string;
  email: string;
}

const FormReservation = () => {
  const tt = useTranslations("homepage.tours");

  const [formData, setFormData] = useState<ReservationFormData>({
    adults: 0,
    children: 0,
    firstName: "",
    lastName: "",
    numberPhone: "",
    email: "",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<ReservationFormData> = {};

    if (!formData.firstName) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName) newErrors.lastName = "Le nom est requis";
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email est invalide";
    }

    if (!formData.numberPhone) {
      newErrors.numberPhone = "Le numéro de téléphone est obligatoire";
    } else if (!/^06\d{8}$/.test(formData.numberPhone)) {
      newErrors.numberPhone =
        "Le numéro de téléphone doit commencer par 06 et contenir 10 chiffres";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      // Submit logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ParticipantCounter
          label={tt("form.Number_Adults")}
          value={formData.adults}
          onDecrement={() => decrement("adults")}
          onIncrement={() => increment("adults")}
        />

        <ParticipantCounter
          label={tt("form.Number_Children")}
          value={formData.children}
          onDecrement={() => decrement("children")}
          onIncrement={() => increment("children")}
        />
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            placeholder="Tyler"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            placeholder="Durden"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </LabelInputContainer>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="numberPhone">Numéro de téléphone</Label>
          <Input
            id="numberPhone"
            placeholder="06*******5"
            type="text"
            value={formData.numberPhone}
            onChange={handleInputChange}
          />
          {errors.numberPhone && <p className="text-red-500 text-sm">{errors.numberPhone}</p>}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="name@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </LabelInputContainer>
      </div>

      <div className="flex justify-center items-center">
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/4 text-white h-10 rounded-full font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Valider
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
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
