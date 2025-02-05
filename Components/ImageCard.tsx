"use client"


function ImageCard(props: any) {

  const { title, descr, image, } = props;
  return (
    <div className="relative group overflow-hidden w-full min-w-sm h-64 rounded-lg shadow-lg">
      <div 
        className="absolute group-hover:scale-105 transition-all duration-300 inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${image})` }}/>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900      z-9" />
        <div className="relative h-full flex flex-col justify-end p-6 z-9">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-sm text-white">{descr}</p>
      </div>
    </div>
  );
}

export default ImageCard;
