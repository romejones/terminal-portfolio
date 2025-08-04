import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ProfessionalInfo from "../components/ProfessionalInfo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremy Jones Portfolio</title>
        <meta name="description" content="Portfolio site of Jeremy Jones – Cloud Architect, Infrastructure Consultant, and DevOps specialist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex bg-white text-black">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <ProfessionalInfo />
            </div>

            <div className="border-4 border-black bg-white p-6">
              <h2 className="text-lg font-bold mb-2">Work Experience</h2>
              <ul className="text-sm font-mono space-y-1">
                <li>AWS (2018–2022)</li>
                <li>SADA (2022–2024)</li>
                <li>Insight (2024–2025)</li>
              </ul>
            </div>

            <div className="border-4 border-black bg-[#81D4FA] p-6">
              <h2 className="font-bold mb-1">Peer Reviews</h2>
              <p className="text-sm font-mono">“Smart and brutally honest. 10/10.”</p>
            </div>

            <div className="md:col-span-2 border-4 border-black bg-[#AED581] p-6">
              <h2 className="font-bold mb-1">Education</h2>
              <ul className="text-sm font-mono space-y-1">
                <li>University of Oklahoma, B.A. Philosophy</li>
                <li>Rogers State University, A.A. Liberal Studies</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}