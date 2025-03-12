import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
export async function handleSubmitReservationTour(formData: FormData) {
  const tt=useTranslations("homepage.tours");
  console.log("🚀 Données brutes reçues :", Object.fromEntries(formData));

  const dataRaw = formData.get("formData");
  const tourRaw = formData.get("tour");
  // console.log("✅ dataRaw:", dataRaw);
  // console.log("✅ tourRaw:", tourRaw);

  if (!dataRaw || !tourRaw) {
    // console.error(" Erreur : Certaines données sont manquantes !");
    toast.error(`${tt("form.errorMessage")}`);
    return false;
  }

  const formDataValues = JSON.parse(dataRaw as string);
  const tourData = JSON.parse(tourRaw as string);

  const dateEndObj = tourData.endDate ? new Date(tourData.endDate) : new Date();
  const dateStartObj = tourData.startDate ? new Date(tourData.startDate) : new Date();

  const dateStart = dateStartObj.toISOString().split("T")[0];
  const timeStart = dateStartObj.toISOString().split("T")[1].slice(0, 5);
  const dateEnd = dateEndObj.toISOString().split("T")[0];
  const timeEnd = dateEndObj.toISOString().split("T")[1].slice(0, 5);

  // Création de l'objet DataSend
  const DataSend = {
    
    name: `${formDataValues.firstName} ${formDataValues.lastName}`,
    numberphone: formDataValues.numberPhone,
    email: `<p>${formDataValues.email}</p>`,
    message: `
      <h2>📌 Nouvelle Réservation</h2>
      <p><strong>Nom :</strong> ${formDataValues.firstName} ${formDataValues.lastName}</p>
      <p><strong>Email :</strong> ${formDataValues.email}</p>
      <p><strong>Téléphone :</strong> ${formDataValues.numberPhone}</p>

      <h3>Détails de la réservation</h3>
      <p><strong>Tour :</strong> ${tourData.title}</p>
      <p><strong>Date de départ :</strong> ${dateStart} à ${timeStart}</p>
      <p><strong>Date de fin :</strong> ${tourData.endDate ? tourData.endDate : "Non spécifiée"}</p>
      <p><strong>Description :</strong> ${tourData.description}</p>

      <h3>👥 Nombre de participants</h3>
      <ul>
        <li><strong>Adultes :</strong> ${formDataValues.adults}</li>
        <li><strong>Enfants :</strong> ${formDataValues.children}</li>
      </ul>
      <div>
        <p><strong>Prix Adultes :</strong> ${formDataValues.adults ? `${tourData.newPrice.priceAdults * formDataValues.adults} DH` : `0 DH`} </p>
        <p><strong>Prix Enfants :</strong> ${formDataValues.children ? `${tourData.newPrice.priceChildren * formDataValues.children} DH` : `0 DH`} </p>
        <p><strong>Prix Total :</strong> ${formDataValues.adults || formDataValues.children ? `${tourData.newPrice.priceAdults * formDataValues.adults + tourData.newPrice.priceChildren * formDataValues.children} DH` : '0 DH'}</p>
      </div>
      <hr/>
      <p><strong>Avec un animal :</strong> ${formDataValues.hasAnimal ? "Oui" : "Non"}</p>
      <p style="color:gray; font-size: 12px;">Email envoyé automatiquement via le site de réservation.</p>
    `,
   
  };

  console.log("📨 Données envoyées :", DataSend);

  try {
    const response = await fetch(
      "https://sendemail-self.vercel.app/api/oceanreservation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DataSend),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    toast.success(`${tt("form.successMessage")}`);
    return true;
  } catch (error) {
    // console.error("❌ Erreur lors de l'envoi du formulaire :", error);
    toast.error(`${tt("form.errorMessage")}`);
    return false;
  }
}
