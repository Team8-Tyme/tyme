  
import Dashboard from "../components/dashboard/Dashboard";
import CreateTask from "../components/tasks/CreateTask"
import AddHabitForm from "../components/habits/AddHabitForm";
import HabitList from "../components/habits/HabitList";
import HabitStreaks from "../components/habits/HabitStreaks";
import Settings from "../components/pages/Settings"
// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from '@material-ui/icons/Add'
import PostAddIcon from "@material-ui/icons/PostAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
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
    component: HabitList
  },
  {
    path: "/view-history/:id",
    name: "Habit History",
    mini: "UP",
    icon: TimelineRoundedIcon,
    component: HabitStreaks
  },
  {
    path: "/settings",
    name: "Settings",
    mini: "UP",
    icon: SettingsRoundedIcon,
    component: Settings
  }

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