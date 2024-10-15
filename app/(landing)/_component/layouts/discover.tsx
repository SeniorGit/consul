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
    <div className="bg-white rounded-lg shadow-lg text-center flex flex-col justify-start items-center w-full p-6 mb-8 border-[3px] border-blue-300" style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <div className="bg-gray-100 p-3 rounded-full mb-4">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};
export default function Discover() {
  return (
    <section className="relative py-16 bg-gray-50" id="discover">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Top{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #00B4DB, #0083B0)",
            }}
          >
            Services
          </span>{" "}
          we offer
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Discover the various services we offer to support your mental health journey!
        </p>
      </div>
      <div className="container mx-auto px-5 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
