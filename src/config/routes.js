  
import Dashboard from "../components/dashboard/Dashboard";
import CreateTask from "../components/tasks/CreateTask"
import TaskDetail from "../components/tasks/TaskDetail";
import History from "../components/habits/History";
// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from '@material-ui/icons/Add'
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DetailsIcon from "@material-ui/icons/Details";
import MoveToInboxOutlinedIcon from "@material-ui/icons/MoveToInboxOutlined";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AddHabitForm from "../components/habits/AddHabitForm";
import Home from "../components/habits/Home";

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
    path: "/task/:id",
    name: "Task Detail",
    mini: "UP",
    icon: DetailsIcon,
    component: TaskDetail
  },
  {
    path: "/habit-list",
    name: "Habit List",
    mini: "UP",
    icon: TrendingUpIcon,
    component: Home
  },
  
  {
    path: "/add-habit",
    name: "Add Habit",
    mini: "UP",
    icon: MoveToInboxOutlinedIcon,
    component: AddHabitForm
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