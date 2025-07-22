import {
  Cctv,
  LayoutDashboard,
  Settings,
  TriangleAlert,
  UsersRound,
} from "lucide-react";

export const navbars = [
  {
    label: "Dashboard",
    url: "#",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    label: "Cameras",
    url: "#",
    icon: <Cctv className="w-5 h-5" />,
  },
  {
    label: "Scenes",
    url: "#",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    label: "Incidents",
    url: "#",
    icon: <TriangleAlert className="w-5 h-5" />,
  },
  {
    label: "Users",
    url: "#",
    icon: <UsersRound className="w-5 h-5" />,
  },
];
