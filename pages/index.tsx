import ProfessionalInfo from "../components/ProfessionalInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import PeerReviews from "../components/PeerReviews";

export default function Home() {
  return (
    <>
      <ProfessionalInfo />
      <Experience />
      <Education />
      <PeerReviews />
    </>
  );
}