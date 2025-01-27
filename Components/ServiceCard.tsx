function ServiceCard(props: any) {
    const { title, descr, img, icon, color } = props;

    return (
        <div className="relative overflow-hidden w-full min-w-sm h-64 rounded-lg shadow-lg">
            <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: `url(${img})` }} 
            />
            <div 
                className="absolute inset-0 z-10" 
                style={{
                    background: `linear-gradient(0deg, ${color}, ${color}cc 30%, ${color}00 100%)`
                }} 
            />
            <div className="relative h-full flex flex-col justify-between z-20">
                <div 
                    className="bg-white text-primary-400 text-3xl w-20 aspect-square mt-2 ml-2 p-2 flex justify-center items-center rounded-full"
                    style={{ color: color }} // Icon color matches the gradient color
                >
                    {icon}
                </div>

                <div className="flex flex-col justify-end p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-sm text-white">{descr}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
