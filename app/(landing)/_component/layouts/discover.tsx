import Image from "next/image";

interface CardReasonProps {
  title: string;
  icon: string;
  description: string;
}


const reasons: CardReasonProps[] = [
  {
    icon: "/icons/dua.png",
    title: "AI Detection",
    description:
      "Our AI technology helps in the early detection of mental health issues by analyzing your responses and providing an initial assessment of stress, anxiety, and depression levels.",
  },
  {
    icon: "/icons/empat.png",
    title: "Book an Appointment",
    description:
      "Easily book an appointment with our professional psychologists at a time that suits you. Our platform ensures a seamless booking experience.",
  },
  {
    icon: "/icons/satu.png",
    title: "Set Availability",
    description:
      "Psychologists can set their availability, making it convenient for patients to find and book sessions according to the psychologist's schedule.",
  },
  {
    icon: "/icons/tiga.png",
    title: "Chat Real-Time",
    description:
      "Engage in real-time chat with our psychologists to get immediate support and guidance whenever you need it. Our secure and confidential chat feature ensures privacy and prompt assistance.",
  },
];

// Card component for each reason
const CardReason = ({ icon, title, description }: CardReasonProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center bg-white shadow-md border-[5px] border-blue-200 rounded-lg p-4 md:p-6 w-full gap-4 md:gap-6">
      <div className="flex-shrink-0 md:w-16 md:h-16 bg-[#CDD7E3] rounded">
        <Image src={icon} alt={title} width={64} height={64} className="w-16 h-16" />
      </div>
      <div className="text-left">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Main Discover component
export default function Discover() {
  return (
    <section className="relative py-16 bg-white overflow-hidden" id="discover">
      {/* Services Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Services</span> we offer
        </h1>
        <p className="text-gray-700 mt-4 text-lg sm:text-xl">
          Discover the various services we offer to support your mental health journey!
        </p>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-5 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <CardReason key={index} icon={reason.icon} title={reason.title} description={reason.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
