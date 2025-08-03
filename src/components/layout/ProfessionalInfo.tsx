import Image from "next/image";
import { LinkedIn, GitHub } from "lucide-react";

export default function ProfessionalInfo() {
  return (
    <section className="border-4 border-black bg-[#FFEE58] p-6 flex flex-col sm:flex-row gap-6">
      {/* Left: Profile Picture */}
      <div className="flex-shrink-0 border-2 border-black rounded-lg overflow-hidden w-48 h-48">
        <Image
          src="/Jeremy-pic.jpeg"
          alt="Jeremy Jones"
          width={192}
          height={192}
          className="object-cover"
          priority
        />
      </div>

      {/* Right: Content */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Top: Name + Social Links */}
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-extrabold mb-2">Jeremy D Jones</h2>
          <div className="flex space-x-4">
          <div className="flex space-x-4 font-mono text-sm">
  <a
    href="https://www.linkedin.com/in/jeremy-d-jones/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-blue-700"
  >
    LinkedIn
  </a>
  <a
    href="https://github.com/romejones"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-gray-800"
  >
    GitHub
  </a>
</div>

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <StatBox label="7+ Years" description="Cloud Experience" />
          <StatBox label="5+ Years" description="Datacenter Experience" />
          <StatBox label="TBD" description="Stat 3" />
          <StatBox label="TBD" description="Stat 4" />
        </div>

        {/* Bio */}
        <p className="text-sm font-mono mb-4">
          Experienced cloud architect focused on scalable infrastructure, hybrid cloud, and modern application design.
        </p>

        {/* Badges */}
        <div className="flex space-x-4">
          <img
            src="https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
            alt="AWS Solutions Architect Associate"
            className="h-20 border-2 border-black"
          />
          <img
            src="https://images.credly.com/size/340x340/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png"
            alt="Google Cloud Professional Cloud Architect"
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

function StatBox({ label, description }: { label: string; description: string }) {
  return (
    <div className="border-2 border-black p-3 flex flex-col items-center">
      <span className="text-lg font-extrabold">{label}</span>
      <span className="text-xs font-mono">{description}</span>
    </div>
  );
}