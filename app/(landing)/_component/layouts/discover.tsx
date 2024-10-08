import Image from "next/image";
interface CardReasonProps {
  title: string;
  icon: string;
  description: string;
}

const reasons: CardReasonProps[] = [
  {
    icon: "/icons/satu.png",
    title: "AI Detection",
    description:
      "Our AI technology helps in the early detection of mental health issues by analyzing your responses and providing an initial assessment of stress, anxiety, and depression levels.",
  },
  {
    icon: "/icons/dua.png",
    title: "Book an Appointment",
    description:
      "Easily book an appointment with our professional psychologists at a time that suits you. Our platform ensures a seamless booking experience.",
  },
  {
    icon: "/icons/tiga.png",
    title: "Set Availability",
    description:
      "Psychologists can set their availability, making it convenient for patients to find and book sessions according to the psychologist's schedule.",
  },
  {
    icon: "/icons/empat.png",
    title: "Chat Real-Time",
    description:
      "Engage in real-time chat with our psychologists to get immediate support and guidance whenever you need it. Our secure and confidential chat feature ensures privacy and prompt assistance.",
  },
];

const CardReason = ({ icon, title, description }: CardReasonProps) => {
  return (
    <div className="text-center flex flex-col justify-start items-center w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
      <div className="mb-4">
        <Image src={icon} alt={title} width={100} height={100} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default function Discover() {
  return (
    <section className="relative py-16 mt-32 bg-[#27374D]" id="discover">
      {/* Services Header */}
      <div className="absolute top-[10%] right-[5%] font-bold text-right p-8">
        <h1 className="text-[36px] sm:text-[48px] md:text-[55px] font-semibold text-white drop-shadow-lg">
          <span className="text-blue-500">Our</span> Services
        </h1>
        <p className="text-white mt-4 text-[18px] sm:text-[24px] md:text-[27px] font-semibold">
          Discover the various services we offer to support your mental health journey!
        </p>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-5 md:px-24 z-10 pt-[250px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-12">
          {reasons.map((reason, index) => (
            <CardReason
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
