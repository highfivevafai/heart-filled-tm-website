import Image from "next/image";

type StepCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const StepCard = ({title, description, image, alt}: StepCardProps ) => {
  return ( 
    <div className="bg-white border border-slate-200 overflow-hidden p-4 flex flex-col">
      <Image
        src={image}
        alt={alt}
        width={400}
        height={250}
        className="w-full object-cover mb-4"
      />
      <h2 className="font-bold text-lg mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>    
   );
}
 
export default StepCard;