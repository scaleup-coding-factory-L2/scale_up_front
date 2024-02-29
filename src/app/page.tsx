import Image from "next/image";
import HourlyRate from "../components/getAllRate";

export default function Home() {
  return (
    <div>
      <h1>Hourly Rates</h1>
      <HourlyRate />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </div>
  );
}
