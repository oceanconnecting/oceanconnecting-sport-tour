'use client'
import {useState} from 'react';
import react from 'react';
interface FormProps{
    newPrice:string
}
const FormTour: React.FC<FormProps> = ({ newPrice }) => {

   // États pour chaque type de personne
   const [adults, setAdults] = useState(0);
   const [children, setChildren] = useState(0);
   const [babies, setBabies] = useState(0);

    // Gestion de l'incrémentation et décrémentation
  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Réservation confirmée : ${adults} Adultes, ${children} Enfants, ${babies} Bébés`
    );
  };

    return (
        <div className='border-spacing-3  grid grid-cols-2 items-center mt-20 justify-center text-center '>
            <div className='bg-slate-900 w-full h-16 text-center justify-center items-center rounded-full'>gap
                <div  className='bg-slate-300 w-4/5 align-middle  '>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 shadow-lg rounded-lg">
      {/* Section pour les adultes */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="adults">
          Nombre Adult <span>(Âge 13-60)</span>
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => decrement(setAdults, adults)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <span>{adults}</span>
          <button
            type="button"
            onClick={() => increment(setAdults, adults)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Section pour les enfants */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="children">
          Nombre Enfant <span>(Âge 2-12)</span>
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => decrement(setChildren, children)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <span>{children}</span>
          <button
            type="button"
            onClick={() => increment(setChildren, children)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Section pour les bébés */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="babies">
          Nombre Bébé <span>(Âge moins de 2)</span>
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => decrement(setBabies, babies)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <span>{babies}</span>
          <button
            type="button"
            onClick={() => increment(setBabies, babies)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Valider la réservation
      </button>
    </form>
                </div>
            </div>



            <div className=''>ggg</div>
        </div>
    )
}
export default  FormTour;