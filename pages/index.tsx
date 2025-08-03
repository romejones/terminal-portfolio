import Container from "../src/components/layout/Container";
import ProfessionalInfo from "../src/components/layout/ProfessionalInfo";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="col-span-2">
          <ProfessionalInfo />
        </div>

        <div className="col-span-1 border-4 border-black bg-white p-6">
          <h2 className="text-lg font-bold mb-2">Work Experience</h2>
          <ul className="text-sm font-mono space-y-1">
            <li>AWS (2018–2022)</li>
            <li>SADA (2022–2024)</li>
            <li>Insight (2024–2025)</li>
          </ul>
        </div>

        <div className="col-span-1 border-4 border-black bg-white p-6">
          <h2 className="font-bold mb-1">Peer Reviews</h2>
          <p className="text-sm font-mono">“Smart and brutally honest. 10/10.”</p>
        </div>

        <div className="col-span-2 border-4 border-black bg-white p-6">
          <h2 className="font-bold mb-1">Education</h2>
          <ul className="text-sm font-mono space-y-1">
            <li>University of Oklahoma, B.A. Philosophy</li>
            <li>Rogers State University, A.A. Liberal Studies</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}