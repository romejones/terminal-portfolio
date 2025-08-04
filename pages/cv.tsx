import ProfessionalInfo from "../components/ProfessionalInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import PeerReviews from "../components/PeerReviews";

export default function CVPage() {
  return (
        <main className="p-6 overflow-y-auto flex-grow space-y-6">
          <Experience />
          <Education />
        </main>
    );
}