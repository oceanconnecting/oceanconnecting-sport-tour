import { twMerge } from "tailwind-merge";
import Button from "./Button";

function CardDownloadButtonImage(props: any) {
    const { image, children } = props;
    return (
      <div className="relative overflow-hidden min-w-64 h-64 rounded-lg shadow-lg">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={twMerge("absolute inset-0 opacity-70 z-10",`bg-gradient-to-b from-transparent to-black`)}/>
        <div className="relative h-full flex flex-col justify-end p-6 z-20">
          {children}
        </div>
      </div>
    );
  }
  
  export default CardDownloadButtonImage;
  