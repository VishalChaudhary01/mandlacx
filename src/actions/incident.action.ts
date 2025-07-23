"use server";
import { Incident } from "@prisma/client";
import prisma from "../../prisma";
import { revalidatePath } from "next/cache";

export async function getIncidents({ resolved }: { resolved?: boolean }) {
  try {
    const incidents = await prisma.incident.findMany({
      where: resolved !== undefined ? { resolved } : {},
      include: {
        camera: {
          select: {
            name: true,
            location: true,
          },
        },
      },
      orderBy: {
        tsStart: "desc",
      },
    });

    const unresolvedIncidents = incidents.filter(
      (incident: Incident) => !incident.resolved
    ).length;

    const resolvedIncidents = incidents.length - unresolvedIncidents;

    return {
      message: "Get Incidents successful",
      incidents,
      resolvedIncidents,
      unresolvedIncidents,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to fetch incidents",
    };
  }
}

export async function toggleResolveIncident({
  incidentId,
}: {
  incidentId: string;
}) {
  try {
    const incident = await prisma.incident.findFirst({
      where: { id: incidentId },
    });
    if (!incident) {
      return { error: "Incident not found" };
    }

    const updated = await prisma.incident.update({
      where: { id: incidentId },
      data: { resolved: !incident.resolved },
    });

    revalidatePath("/");

    return {
      message: "Incident resolution toggled successfully",
      incident: updated,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to update incident",
    };
  }
}
