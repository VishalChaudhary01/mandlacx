import { IncidentType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const [shopFloor, vault, entrance] = await Promise.all([
    prisma.camera.create({
      data: { name: "Shop Floor A", location: "Level 1" },
    }),
    prisma.camera.create({
      data: { name: "Vault", location: "Basement" },
    }),
    prisma.camera.create({
      data: { name: "Entrance", location: "Main Gate" },
    }),
  ]);

  const now = new Date();

  const addMinutes = (date: Date, minutes: number) =>
    new Date(date.getTime() + minutes * 60000);

  const incidentData = [
    {
      cameraId: shopFloor.id,
      incidentType: IncidentType.UNAUTHORIZED_ACCESS,
      tsStart: now,
      tsEnd: addMinutes(now, 2),
      icon: "/icons/unauthorize.png",
      thumbnailUrl: "/thumbs/shop1.png",
    },
    {
      cameraId: vault.id,
      incidentType: IncidentType.GUN_TTHRREAT,
      tsStart: addMinutes(now, -60),
      tsEnd: addMinutes(now, -58),
      icon: "/icons/gun.png",
      thumbnailUrl: "/thumbs/vault1.png",
    },
    {
      cameraId: entrance.id,
      incidentType: IncidentType.UNAUTHORIZED_ACCESS,
      tsStart: addMinutes(now, -120),
      tsEnd: addMinutes(now, -118),
      icon: "/icons/unauthorize.png",
      thumbnailUrl: "/thumbs/entrance1.png",
    },
    {
      cameraId: shopFloor.id,
      incidentType: IncidentType.GUN_TTHRREAT,
      tsStart: addMinutes(now, -180),
      tsEnd: addMinutes(now, -175),
      icon: "/icons/gun.png",
      thumbnailUrl: "/thumbs/shop2.png",
    },
    {
      cameraId: vault.id,
      incidentType: IncidentType.UNAUTHORIZED_ACCESS,
      tsStart: addMinutes(now, -240),
      tsEnd: addMinutes(now, -237),
      icon: "/icons/unauthorize.png",
      thumbnailUrl: "/thumbs/vault1.png",
    },
    {
      cameraId: entrance.id,
      incidentType: IncidentType.UNAUTHORIZED_ACCESS,
      tsStart: addMinutes(now, -300),
      tsEnd: addMinutes(now, -298),
      icon: "/icons/unauthorize.png",
      thumbnailUrl: "/thumbs/entrance1.png",
    },
    {
      cameraId: shopFloor.id,
      incidentType: IncidentType.GUN_TTHRREAT,
      tsStart: addMinutes(now, -360),
      tsEnd: addMinutes(now, -355),
      icon: "/icons/gun.png",
      thumbnailUrl: "/thumbs/shop1.png",
    },
    {
      cameraId: vault.id,
      incidentType: IncidentType.GUN_TTHRREAT,
      tsStart: addMinutes(now, -400),
      tsEnd: addMinutes(now, -397),
      icon: "/icons/gun.png",
      thumbnailUrl: "/thumbs/vault1.png",
    },
    {
      cameraId: entrance.id,
      incidentType: IncidentType.UNAUTHORIZED_ACCESS,
      tsStart: addMinutes(now, -460),
      tsEnd: addMinutes(now, -458),
      icon: "/icons/unauthorize.png",
      thumbnailUrl: "/thumbs/entrance1.png",
    },
    {
      cameraId: shopFloor.id,
      incidentType: IncidentType.UNAUTHORIZED_ACCESS,
      tsStart: addMinutes(now, -500),
      tsEnd: addMinutes(now, -498),
      icon: "/icons/unauthorize.png",
      thumbnailUrl: "/thumbs/shop2.png",
    },
  ];

  await prisma.incident.createMany({ data: incidentData });

  console.log("Seed data create successfully");
}

main()
  .catch((e) => {
    console.error("Seed error: ", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
