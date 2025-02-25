import { useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export async function handleSubmitReservationTour(formData: FormData) {
  console.log("🚀 Données brutes reçues :", Object.fromEntries(formData));

  // Vérifie que les valeurs existent avant de les parser
  const dataRaw = formData.get("formData");
  const tourRaw = formData.get("tour");

  

  if (!dataRaw || !tourRaw) {
    console.error("❌ Erreur : Certaines données sont manquantes !");
    toast.error("Erreur lors de l'envoi des données !");
    return false;
  }

  const formDataValues = JSON.parse(dataRaw as string);
  const tourData = JSON.parse(tourRaw as string);
 const { dateStart, timeStart, dateEnd, timeEnd } = useMemo(() => {
    const dateEndObj = tourData.endDate ? new Date(tourData.endDate) : new Date();
    const dateStartObj = tourData.startDate ? new Date(tourData.startDate) : new Date();

    return {
      dateStart: dateStartObj.toISOString().split("T")[0],
      timeStart: dateStartObj.toISOString().split("T")[1].slice(0, 5),
      dateEnd: dateEndObj.toISOString().split("T")[0],
      timeEnd: dateEndObj.toISOString().split("T")[1].slice(0, 5),
    };
  }, [tourData.endDate, tourData.startDate]);
  // Création de l'objet DataSend
  const DataSend = {


    name: `${formDataValues.firstName} ${formDataValues.lastName}`,
    numberphone: formDataValues.numberPhone,
    email: `<p>${formDataValues.email}</p>`,
    message:`
              <h2>📌 Nouvelle Réservation</h2>
    <p><strong>Nom :</strong> ${formDataValues.firstName} ${formDataValues.lastName}</p>
    <p><strong>Email :</strong> ${formDataValues.email}</p>
    <p><strong>Téléphone :</strong> ${formDataValues.numberPhone}</p>

    <h3>Détails de la réservation</h3>
    <p><strong>Tour :</strong> ${tourData.title}</p>
    <p><strong>Date de départ :</strong> ${dateStart} at : ${timeStart}</p>
    
    ${tourData.endDate && (
  <p><strong>Date de fin :</strong> {dateEnd} at : {timeEnd}</p>
)}
   

    
    
    <p><strong>Description :</strong> ${tourData.description}</p>

    <h3>👥 Nombre de participants</h3>
    <ul>
      <li><strong>Adultes :</strong> ${formDataValues.adults}</li>
      <li><strong>Enfants :</strong> ${formDataValues.children}</li>
     
    </ul>
<div>
<p><strong>Prix Adultes :</strong>  ${formDataValues.adults ? `${tourData.newPrice* formDataValues.adults} DH`  : `${0} DH`} </p>
<p><strong>Prix Children :</strong>  ${formDataValues.children ? `${tourData.newPrice* formDataValues.children} DH`  : `${0} DH`} </p>
<p><strong>Prix Totale:</strong> ${formDataValues.adults || formDataValues.children ? `${tourData.newPrice * formDataValues.adults + tourData.newPrice * formDataValues.children} DH` : '0 DH'}</p>
</div>
    

    <hr/>
     
  <p><strong>has Animal :</strong>  ${formDataValues.hasAnimal ? 'oui' : 'Non'}</p>

    <p style="color:gray; font-size: 12px;">Email envoyé automatiquement via le site de réservation.</p>
  `,

    
    notre: ["elbrikifatima19@gmail.com"],

    
  };

  console.log("📨 Données envoyées :", DataSend);

  try {
    const response = await fetch(
     
      "https://sendemail-indol.vercel.app/api/oceanreservation",
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

    toast.success("Form submitted successfully!");
    return true; // Renvoie `true` pour indiquer le succès
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi du formulaire :", error);
    toast.error("Échec de l'envoi du formulaire !");
    return false;
  }
}
