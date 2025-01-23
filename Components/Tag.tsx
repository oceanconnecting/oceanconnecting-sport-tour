'use client'
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { useEffect ,useState} from "react";



function Tag(props : any) {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Une fois le composant monté côté client
  }, []);

  if (!isClient) {
    return null; // Rendre rien pendant le rendu initial
  }
    const { icon, children} = props

  return (
    <div className="px-6 py-4 flex text-primary-200 items-center justify-center gap-3 w-fit">

        <span className="text-5xl text-center font-semibold">{children}</span>

    </div>
  )
}

export default Tag