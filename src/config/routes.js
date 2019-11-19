  
import Dashboard from "../components/dashboard/Dashboard";
import CreateTask from "../components/tasks/CreateTask"


// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";
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
    icon: AddIcon,
    component: CreateTask
  },
  {
    path: "/task/:id",
    name: "Task Detail",
    mini: "UP",
    icon: AddIcon,
    component: TaskDetail
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