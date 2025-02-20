"use client";
import React, { useState } from "react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";
import handleSubmitTour from "./action";

interface Peoples {
  Adults: number;
  Children: number;
  Babies: number;
}

interface FormData {
  peoples: Peoples;
  id: number;
}

export const Form: React.FC<FormData> = ({ peoples, id }) => {
  // Utiliser un seul état pour gérer toutes les données du formulaire
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    numberPhone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Valider les champs requis
    if (!formData.firstName || !formData.lastName || !formData.numberPhone || !formData.email) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Afficher les données du formulaire
    alert(JSON.stringify(formData, null, 2));

    // Vous pouvez maintenant envoyer formData à une API ou le traiter
    // Exemple : await handleSubmitTour(formData);
  };

  // Gérer les changements dans les champs du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  return (
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            placeholder="Tyler"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            placeholder="Durden"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="numberPhone">Number phone</Label>
          <Input
            id="numberPhone"
            placeholder="06*******5"
            type="number"
            value={formData.numberPhone}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="name@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
      </div>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Sign up &rarr;
        <BottomGradient />
      </button>
    </form>
  );
};

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
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};