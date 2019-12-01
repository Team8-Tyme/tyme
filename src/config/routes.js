  
import Dashboard from "../components/dashboard/Dashboard";
import CreateProject from "../components/pages/createProject"
import History from "../components/pages/history"

import Settings from "../components/pages/Settings"
import History from "../components/pages/History"

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";

import HistoryIcon from '@material-ui/icons/History';

import SettingsIcon from "@material-ui/icons/Settings"
import HistoryIcon from "@material-ui/icons/History"


const mainRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    mini: "PD",
    component: Dashboard
  },
  {
    path: "/createProject",
    name: "Create Project",
    mini: "UP",
    icon: WorkIcon,
    component: CreateProject
  },

  {
    path: "/history", 
    name: "History", 
    icon: HistoryIcon, 
    mini: "UP", 
    component: History
  },

  {
    path: "/settings",
    name: "Settings",
    mini: "Setting",
    icon: SettingsIcon,
    component: Settings
  }
  },
  {
    path: "/history",
    name: "History",
    mini: "Hist",
    icon: HistoryIcon,
    component: History
  },
//   {
//     path: "/tables/members",
//     name: "Members",
//     mini: "GP",
//     icon: GroupIcon,
//     component: ReactTables
//   },
//   { 
//     path: "/projects", 
//     name: "Projects", 
//     mini: "P", 
//     icon: WorkIcon, 
//     component: ProjectsPage 
//   },
//   { path: "/calendar", 
//     name: "Calendar", 
//     mini: "CA", 
//     icon: DateRange, 
//     component: Calendar 
//   },
//   { path: "/stats", 
//     name: "Stats", 
//     mini: "S", 
//     icon: EqualizerIcon, 
//     component: Stats 
//   },
//   { path: "/chat", 
//     name: "Chat", 
//     mini: "C", 
//     icon: ChatIcon, 
//     component: Calendar 
//   },
//    { redirect: true, 
//      path: "/", 
//      pathTo: "/dashboard", 
//      name: "Dashboard" 
//    }
];
export default mainRoutes;