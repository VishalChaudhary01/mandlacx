import Incidents from "@/components/incidents";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-6 md:flex-row">
      <div className="flex-1 lg:w-3/5">
        <Image
          src="/image.svg"
          alt="video image"
          width={800}
          height={800}
          className="w-[800px] h-auto object-cover rounded-md"
        />
      </div>
      <Incidents />
    </div>
  );
}
