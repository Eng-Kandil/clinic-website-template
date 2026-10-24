import { clinic } from "../config/clinic";
import { ClinicPage } from "../components/ClinicPage";

export default function Home() {
  return <ClinicPage clinic={clinic} />;
}
