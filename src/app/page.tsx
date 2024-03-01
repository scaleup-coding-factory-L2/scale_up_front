import Image from "next/image"; 
import HourlyRatesList from "../components/modifyHourlyRate";

export default function Home() {
  return (
    <div>
      <h1>Hourly Rates</h1>
      <HourlyRatesList/>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </div>
  );
}
