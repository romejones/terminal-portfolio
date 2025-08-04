import ProfessionalInfo from "../components/ProfessionalInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import PeerReviews from "../components/PeerReviews";

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <ProfessionalInfo />
      <Experience />
      <Education />
      <PeerReviews />
    </main>
  );
}
