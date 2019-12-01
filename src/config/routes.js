  
import Dashboard from "../components/dashboard/Dashboard";
import CreateTask from "../components/tasks/CreateTask"
import AddHabitForm from "../components/habits/AddHabitForm";
import Home from "../components/habits/HabitList";
import History from "../components/habits/HabitStreaks";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from '@material-ui/icons/Add'
import PostAddIcon from "@material-ui/icons/PostAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HistoryIcon from "@material-ui/icons/History";
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
    icon: AddIcon,
    component: CreateTask
  },
  {
    path: "/add-habit",
    name: "Add Habit",
    mini: "UP",
    icon: PostAddIcon,
    component: AddHabitForm
  },
  {
    path: "/habit-list",
    name: "Habit List",
    mini: "UP",
    icon: ListAltIcon,
    component: Home
  },
  {
    path: "/view-history/:id",
    name: "Habit History",
    mini: "UP",
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