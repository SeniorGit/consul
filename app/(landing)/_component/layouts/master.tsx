import Image from "next/image";

interface CardReasonProps {
  title: string;
  icon: string;
  description: string;
}

// Define the reasons array for the two cards in the image
const reasons: CardReasonProps[] = [
  {
    icon: "/images/cewekaca.png",
    title: "Isey S.Psi, M.Psi. Psikologist",
    description:
      "An experienced clinical psychologist with an empathetic approach that makes patients feel truly heard and understood, and outstanding reputation for providing high-quality care to their clients. With over 15 years of experience.",
  },
  {
    icon: "/images/cowo.png", 
    title: "Viko S.Psi, M.Psi. Psikologist",
    description:
      "An experienced clinical psychologist with an empathetic approach that makes patients feel truly heard and understood, and outstanding reputation for providing high-quality care to their clients. With over 10 years of experience.",
  },
];

// Card component for each psychologist
const CardReason = ({ icon, title, description }: CardReasonProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center bg-[#4C82CB] shadow-md rounded-[20px] p-4 md:p-6 gap-4 md:gap-6 w-full">
      <div className="flex-shrink-0 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden">
        <Image src={icon} alt={title} width={128} height={128} className="w-full h-full object-cover" />
      </div>
      <div className="text-left text-white">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Main Discover component
export default function Master() {
  return (
    <section className="pt-10 bg-white" id="consulin">
      <div className="container mx-auto px-5 md:px-10 lg:px-24 z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Masters
            </span>{" "}
            <span className="text-black">of</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Mental health
            </span>
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <CardReason key={index} icon={reason.icon} title={reason.title} description={reason.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
