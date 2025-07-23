"use client";

import { toggleResolveIncident } from "@/actions/incident.action";
import { ChevronRight } from "lucide-react";

export default function ResolveButton({ incidentId }: { incidentId: string }) {
  return (
    <div className="flex items-center gap-1 place-self-center text-yellow-500">
      <button
        onClick={async () => await toggleResolveIncident({ incidentId })}
        className="text-xs"
      >
        Resolve
      </button>
      <ChevronRight className="w-4 h-4" />
    </div>
  );
}
