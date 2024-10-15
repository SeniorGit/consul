import Image from "next/image";
interface ProfileProps {
  name: string;
  description: string;
  image: string;
}
const profiles: ProfileProps[] = [
  {
    image: "/images/cewe.png", 
    name: "Isey S.Psi, M.Psi. Psikologist",
    description:
      "An experienced clinical psychologist with an empathetic approach that makes patients feel truly heard and understood, and outstanding reputation for providing high-quality care to their clients. With over 15 years of experience",
  },
  {
    image: "/images/cewe.png",
    name: "Viko S.Psi, M.Psi. Psikologist",
    description:
      "An experienced clinical psychologist with an empathetic approach that makes patients feel truly heard and understood, and outstanding reputation for providing high-quality care to their clients. With over 10 years of experience",
  },
];
const ProfileCard = ({ image, name, description }: ProfileProps) => {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white flex items-center shadow-lg mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
        <Image src={image} alt={name} width={100} height={100} objectFit="cover" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};
export default function Master() {
  return (
    <section className="relative py-16 bg-gray-50" id="discover">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #00B4DB, #0083B0)",
            }}
          >
            Masters
          </span>{" "}
          <span className="text-black">of</span>{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #00B4DB, #0083B0)",
            }}
          >
            Mental health
          </span>
        </h1>
      </div>
      <div className="container mx-auto px-5 md:px-24">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            description={profile.description}
          />
        ))}
      </div>
    </section>
  );
}
