import Image from "next/image";

export default function ProfessionalInfo() {
  return (
    <section className="border-4 border-black bg-professionalInfo hover:bg-accent transition-colors p-6 flex flex-col sm:flex-row gap-6">
      {/* Left: Profile Picture */}
      <div className="flex-shrink-0 border-2 border-black rounded-lg overflow-hidden w-48 h-48">
        <Image
          src="/jeremy-pic.jpeg"
          alt="Jeremy Jones"
          width={192}
          height={192}
          className="object-cover"
          priority
        />
      </div>

      {/* Right: Content */}
      <div className="flex-grow flex flex-col justify-between">
        <h2 className="text-xl font-bold font-mono text-heading mb-2">
          Professional Info
        </h2>
        <h1 className="text-2xl font-extrabold font-mono text-heading">
          Cloud Architect & Infrastructure Consultant
        </h1>

        <p className="mt-4 text-sm font-mono text-body">
          Over 15 years of experience leading enterprise IT, hybrid infrastructure,
          and cloud architecture projects across AWS, GCP, and beyond. Pragmatic
          problem-solver, code junkie, and compliance whisperer.
        </p>
      </div>
    </section>
  );
}