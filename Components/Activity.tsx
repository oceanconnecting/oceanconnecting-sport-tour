import Image from 'next/image';

function Activity(props: any) {
  const { title, descr, image } = props;
  return (
    <div className="flex flex-col bg-background-100 w-80 shadow-lg container">
      <div className="relative w-80 h-80 overflow-hidden">
        <Image
          className="hover:scale-110 transition-transform duration-300"
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-background-100 p-5 w-80">
        <h1 className="text-white font-semibold text-2xl">{title}</h1>
        <p className="text-background-900 text-wrap pt-3">{descr}</p>
      </div>
    </div>
  );
}

export default Activity;
