  
import Dashboard from "../components/dashboard/Dashboard";
import CreateTask from "../components/tasks/CreateTask"
import AddHabitForm from "../components/habits/AddHabitForm";
import HabitList from "../components/habits/HabitList";
import HabitStreaks from "../components/habits/HabitStreaks";
import Settings from "../components/pages/Settings";
import History from "../components/pages/History";
// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from '@material-ui/icons/Add'
import PostAddIcon from "@material-ui/icons/PostAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";

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
    path: "/view-history/18748971677",
    name: "Habit Streaks",
    mini: "UP",
    icon: TimelineRoundedIcon,
    component: HabitStreaks
  },
  {
    path: "/settings",
    name: "Settings",
    mini: "Setting",
    icon: SettingsIcon,
    component: Settings
  },
  {
    path: "/history",
    name: "History",
    mini: "Hist",
    icon: HistoryIcon,
    component: History
  }
];
export default mainRoutes;