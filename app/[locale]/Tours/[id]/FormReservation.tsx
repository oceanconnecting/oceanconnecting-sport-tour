"use client";

import ParticipantCounter from "@/Components/ParticipantCounter";
import type React from "react";
import { ChangeEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/Components/ui/checkbox";
import { handleSubmitReservationTour } from "./handleSubmitReservationTour";
import type { Tour } from "@/types";
import { toast } from "react-toastify";
import { isValidPhoneNumber } from 'libphonenumber-js';
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
interface ReservationFormData {
  adults: number;
  children: number;
  firstName: string;
  lastName: string;
  numberPhone: string;
  email: string;
  hasAnimal: boolean;
}

interface FormProps {
  tour: Tour;
}



// Liste des pays avec drapeaux et codes
const codesPays = [
  { code: "+212", nom: "Maroc", drapeau: "MA" },
  { code: "+33", nom: "France", drapeau: "FR" },
  { code: "+34", nom: "Espagne", drapeau: "ES" },
  { code: "+49", nom: "Allemagne", drapeau: "DE" },
  { code: "+213", nom: "Algérie", drapeau: "DZ" },
  { code: "+1", nom: "États-Unis", drapeau: "US" },
  { code: "+44", nom: "Royaume-Uni", drapeau: "GB" },
  { code: "+39", nom: "Italie", drapeau: "IT" },
];

// Options formatées pour react-select
const optionsPays = codesPays.map((pays) => ({
  value: pays.code,
  label: (
    <div className="flex items-center gap-2">
      <ReactCountryFlag
        countryCode={pays.drapeau}
        svg
        style={{ width: "1.5em", height: "1.5em", borderRadius: "3px" }}
      />
      {pays.nom} ({pays.code})
    </div>
  ),
}));

const FormReservation: React.FC<FormProps> = ({ tour }) => {
  const tt = useTranslations("homepage.tours");
  // Définir les valeurs initiales du formulaire
  const initialFormData: ReservationFormData = {
    adults: 0,
    children: 0,
    firstName: "",
    lastName: "",
    numberPhone: "",
    email: "",
    hasAnimal: false,
  };
  const [formData, setFormData] = useState<ReservationFormData>(initialFormData);
  const [countryCode, setCountryCode] = useState<string>('+212'); // Code pays par défaut
  const [isValid, setIsValid] = useState<boolean>(true); // Validation du numéro
  const [errors, setErrors] = useState<Partial<ReservationFormData>>({});
  const [paysSelectionne, setPaysSelectionne] = useState(optionsPays[0]);

  const [loading, setLoading] = useState(false);
  const increment = (field: keyof ReservationFormData) =>
    setFormData((prev) => ({
      ...prev,
      [field]:
        typeof prev[field] === "number"
          ? (prev[field] as number) + 1
          : prev[field],
    }));

  const decrement = (field: keyof ReservationFormData) =>
    setFormData((prev) => ({
      ...prev,
      [field]:
        typeof prev[field] === "number" && prev[field] > 0
          ? (prev[field] as number) - 1
          : 0,
    }));

  const countryCodes = [
    { code: "+212", name: "Maroc", flag: "MA" },
    { code: "+33", name: "France", flag: "FR" },
    { code: "+34", name: "Espagne", flag: "ES" },
    { code: "+49", name: "Allemagne", flag: "DE" },
    { code: "+213", name: "Algérie", flag: "DZ" },
    { code: "+1", name: "États-Unis", flag: "US" },
    { code: "+44", name: "Royaume-Uni", flag: "GB" },
    { code: "+39", name: "Italie", flag: "IT" },
  ]
  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(event.target.value);
    setFormData((prev) => ({ ...prev, numberPhone: '' })); // Réinitialiser le champ du numéro lorsque le code pays change
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, numberPhone: value }));

    // Valider le numéro de téléphone avec le code pays
    const fullNumber = countryCode + value;
    setIsValid(isValidPhoneNumber(fullNumber));
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Afficher l'état de chargement

    const newErrors: Partial<ReservationFormData> = {};

    if (!formData.firstName) newErrors.firstName = tt("form.errorFirstName");
    if (!formData.lastName) newErrors.lastName = tt("form.errorLastName");
    if (!formData.email) {
      newErrors.email = tt("form.errorEmail1");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = tt("form.errorEmail2");
    }






    // Valider le numéro avec la bibliothèque libphonenumber-js


    if (!formData.numberPhone) {

      newErrors.numberPhone = tt("form.errornumberPhon1");
    } else if (!isValidPhoneNumber(countryCode + formData.numberPhone)) {
      newErrors.numberPhone = tt("form.errornumberPhon2");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);

      try {
        const formDataToSend = new FormData();


        // Ajouter des données à FormData
        formDataToSend.append("formData", JSON.stringify(formData));
        formDataToSend.append("tour", JSON.stringify(tour));

        // Afficher les données de formDataToSend dans la console
        console.log("FormData to send:");
        formDataToSend.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        });


        await handleSubmitReservationTour(formDataToSend);
        // alert("Réservation envoyée avec succès !");
        setFormData(initialFormData);
      } catch (error) {
        console.error(tt("form.errorMessage"), error);
        toast.error("Une erreur s'est produite lors de l'envoi.");
      }
    }

    setLoading(false); // Fin de l'état de chargement

  };

  const isFormEmpty =
    (!formData ||
      formData.adults === 0 ||
      // Validation spéciale pour les enfants (valide s'il y a 0 enfant)
      formData.children < 0 || formData.children === undefined ||
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.numberPhone.trim() === "" ||
      formData.email.trim() === ""
    );


  return (
    <div id="book" className="w-full max-w-4xl mx-auto sm:px-6">
      <h1 className="text-slate-500 text-sm sm:text-lg md:text-xl lg:text-2xl text-center">
        {tt("form.title")}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-background-50 p-6 sm:p-8 rounded-3xl shadow-xl space-y-8"
      >
        {/* Participants Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <ParticipantCounter
              value={formData.adults}
              onDecrement={() => decrement("adults")}
              onIncrement={() => increment("adults")}
              label={tt("form.Number_Adults")}
            />
          </div>
          <div className="w-full">
            <ParticipantCounter
              value={formData.children}
              onDecrement={() => decrement("children")}
              onIncrement={() => increment("children")}
              label={tt("form.Number_Children")}
            />
          </div>
        </div>
        {/* Personal Information */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LabelInputContainer>
              <Label
                htmlFor="firstName"
                className="text-base font-medium text-gray-700 dark:text-gray-300"
              >
                {tt("form.FirstName")}
              </Label>
              <Input
                id="firstName"
                placeholder={tt("form.FirstName")}
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label
                htmlFor="lastName"
                className="text-base font-medium text-gray-700 dark:text-gray-300"
              >
                {tt("form.LastName")}
              </Label>
              <Input
                id="lastName"
                placeholder={tt("form.LastName")}
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </LabelInputContainer>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LabelInputContainer>

              <Label
                htmlFor="numberPhone"
                className="text-base font-medium text-gray-700 dark:text-gray-300"
              >
                {tt("form.numberPhone")}
              </Label>
              <div className="flex items-center w-full space-x-2">
              <div className="flex items-center gap-2">
  {/* Drapeau sélectionné */}
 

  {/* Select */}
  <Select
    options={optionsPays}
    value={paysSelectionne}
    onChange={(newValue) => {
      setPaysSelectionne(newValue);
      setCountryCode(newValue?.value || '+212');
      setFormData((prev) => ({ ...prev, numberPhone: '' }));
    }}
    className="w-full"
  />

</div>



                <div className="w-2/3">
                  <Input
                    onChange={handlePhoneNumberChange}
                    placeholder={`Ex: ${countryCode.substring(1)}12345678`} // Placeholder dynamique
                    id="numberPhone"
                    type="text"
                    value={formData.numberPhone}
                    className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

              </div>

              {errors.numberPhone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.numberPhone}
                </p>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label
                htmlFor="email"
                className="text-base font-medium text-gray-700 dark:text-gray-300"
              >
                {tt("form.email")}
              </Label>
              <Input
                id="email"
                placeholder={tt("form.email")}
                type="text"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm py-3 px-4 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </LabelInputContainer>
          </div>
        </div>

        {/* Has Animal Checkbox */}
        <div className="flex items-start space-x-3 py-2">
          <Checkbox
            id="hasAnimal"
            checked={formData.hasAnimal}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, hasAnimal: Boolean(checked) }))
            }
            className="mt-1"
          />
          <div>
            <label
              htmlFor="hasAnimal"
              className="text-base font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              {tt("form.hasAnimal")}?
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className={cn(
              "relative group/btn w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-12 rounded-full transition-all duration-300 overflow-hidden",
              isFormEmpty || loading

                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-primary-500 hover:bg-primary-400 hover:text-white"
            )}
            disabled={isFormEmpty || loading}
          >
            <span className="relative z-10">
              {loading ? tt("form.loadingMessage") : tt("form.Confirm_Reservation")}
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
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
  return (
    <div className={cn("flex flex-col space-y-2", className)}>{children}</div>
  );
};
