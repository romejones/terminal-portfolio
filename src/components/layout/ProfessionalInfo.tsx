import Image from "next/image";

export default function ProfessionalInfo() {
  return (
    <section className="border-4 border-black bg-[#FFEE58] p-6 flex flex-col sm:flex-row gap-6 items-center">
      <div className="flex-shrink-0">
        <Image
          src="/Jeremy-pic.jpeg" // updated path
          alt="Jeremy Jones"
          width={160}
          height={160}
          className="rounded-full border-4 border-black"
          priority
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-2xl font-extrabold mb-2">Professional Info</h2>
        <p className="text-sm font-mono mb-4">
          Jeremy Jones is a seasoned cloud architect focused on brutalist UI and unfiltered infrastructure strategy.
        </p>
        {/* Certification badges */}
        <div className="flex flex-wrap gap-3">
          {/* Replace with your actual badge images or URLs */}
          <img
            src="https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
            alt="AWS Solutions Architect Associate"
            className="h-20 border-2 border-black"
          />
          <img
            src="https://images.credly.com/size/340x340/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png"
            alt="Badge Name"
            className="h-20 border-2 border-black"
          />
          <img
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
            alt="Microsoft Azure Fundamentals"
            className="h-20 border-2 border-black"
           />
        </div>
      </div>
    </section>
  );
}