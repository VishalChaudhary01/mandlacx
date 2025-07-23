import { Cctv, Clock4, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import ResolveButton from "./resolve-button";
import { getIncidents } from "@/actions/incident.action";

export default async function Incidents() {
  const { incidents, resolvedIncidents, unresolvedIncidents } =
    await getIncidents({});

  return (
    <div className="lg:w-2/5 md:max-h-[434px] md:overflow-y-auto bg-[#1E1E1E] rounded-md p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full p-1.5 bg-[#7F1D1D] border-2 border-[#450A0A]">
            <TriangleAlert className="w-4 h-4 text-[#F87171]" />
          </div>
          <h2 className="text-base font-semibold">
            {unresolvedIncidents} Unresolved Incidents
          </h2>
        </div>
        <div className="flex items-center gap-2 border border-gray-600 rounded-xl px-2">
          <Image src="/icons/right.png" width={16} height={16} alt="icon" />

          <h2 className="text-xs">{resolvedIncidents} Resolved Incidents</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {incidents?.map((incident) => (
          <div key={incident.id} className="flex gap-4 overflow-hidden">
            <Image
              src={incident.thumbnailUrl}
              width={120}
              height={74}
              alt="thumbnail"
              className="object-cover w-[120px] h-[74px] border border-gray-600 rounded-md"
            />

            <div className="flex flex-1 flex-col justify-between pr-2">
              <div className="flex items-center gap-2">
                {
                  <Image
                    src={incident.icon}
                    width={16}
                    height={16}
                    alt="icon"
                  />
                }
                <span className="text-sm font-semibold capitalize text-white">
                  {incident.incidentType.replaceAll("_", " ").toLowerCase()}
                </span>
              </div>
              <div className="flex flex-col">
                <p className="flex items-center gap-1">
                  <Cctv className="w-[10px] h-[10px] fill-white" />
                  <span className="text-xs">
                    {incident.camera.name || "Unknown"}
                  </span>
                </p>
                <p className="flex items-center gap-1">
                  <Clock4 className="w-[10px] h-[10px]" />
                  <span className="text-xs font-medium">
                    {format(new Date(incident.tsStart), "HH:mm")} -{" "}
                    {format(new Date(incident.tsEnd), "HH:mm")} on{" "}
                    {format(new Date(incident.tsStart), "d-MMM-yyyy")}
                  </span>
                </p>
              </div>
            </div>
            {incident.resolved ? (
              <span className="text-xs text-green-500 place-self-center">
                Redolved
              </span>
            ) : (
              <ResolveButton incidentId={incident.id} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
