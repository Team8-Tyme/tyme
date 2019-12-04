  
import Dashboard from "../components/dashboard/Dashboard";
import CreateProject from "../components/pages/createProject"
import History from "../components/pages/History"
import CreateTask from "../components/tasks/CreateTask"


import Settings from "../components/pages/Settings"


// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";

import HistoryIcon from '@material-ui/icons/History';

import SettingsIcon from "@material-ui/icons/Settings"
import HistoryIcon from "@material-ui/icons/History"
import AddIcon from '@material-ui/icons/Add'
import TaskDetail from "../components/tasks/TaskDetail";


const mainRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    mini: "PD",
    component: Dashboard
  },
  {
    path: "/create",
    name: "Create Task",
    mini: "UP",
    icon: WorkIcon,
    component: CreateTask
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