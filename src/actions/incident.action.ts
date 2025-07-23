"use server";
import prisma from "../../prisma";

export async function getIncidents({ resolved }: { resolved?: boolean }) {
  try {
    const incidents = await prisma.incident.findMany({
      where: resolved !== undefined ? { resolved } : {},
      orderBy: {
        tsStart: "desc",
      },
    });

    return {
      message: "Get Incidents successful",
      incidents,
    };
  } catch (error) {
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

    return {
      message: "Incident resolution toggled successfully",
      incident: updated,
    };
  } catch (error) {
    return {
      error: "Failed to update incident",
    };
  }
}
