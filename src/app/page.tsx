import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 flex flex-col gap-6 md:flex-row">
      <div className="flex-1">
        <Image
          src="/image.svg"
          alt="video image"
          width={800}
          height={800}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      <div className="w-full md:max-w-sm lg:max-w-md bg-muted rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Incidents</h2>
      </div>
    </div>
  );
}
