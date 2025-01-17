"use client"


function ImageCard(props: any) {

  const { title, descr, image, } = props;
  return (
    <div className="relative overflow-hidden w-full min-w-sm h-64 rounded-lg shadow-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${image})` }}/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-9" />
        <div className="relative h-full flex flex-col justify-end p-6 z-9">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-300">{descr}</p>
      </div>
    </div>
  );
}

export default ImageCard;
