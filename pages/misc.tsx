import ProfessionalInfo from "../components/ProfessionalInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import PeerReviews from "../components/PeerReviews";

export default function MiscPage() {
  return (
        <main className="p-6 overflow-y-auto flex-grow space-y-4">
          <h1 className="text-2xl font-bold font-mono">Miscellaneous</h1>
          <p className="text-sm font-mono cardMuted">
            Additional content or experiments can go here.
          </p>
        </main>
  );
}