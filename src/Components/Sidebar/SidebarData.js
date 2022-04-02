import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import MovieIcon from "@mui/icons-material/Movie";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";

const SidebarData = [
  {
    name: "HOME",
    icon: HomeSharpIcon,
    link: "/",
  },
  {
    name: "VIDEO",
    icon: MovieIcon,
    link: "/search/:id",
  },
  {
    name: "POST",
    icon: ForumIcon,
    link: "/video",
  },
  {
    name: "ABOUT",
    icon: PersonIcon,
    link: "/about",
  },
];

export { SidebarData };
