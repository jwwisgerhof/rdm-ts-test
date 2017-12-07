import { apiBase } from "../../config/variables";
import MenuItem from "../../interfaces/MenuItem";
import User from "../../interfaces/User";

const appMenuItems = (account: User): MenuItem[] => [
  {
    primaryText: "Dashboard",
    secondaryText: account.mail,
    linkTo: "/"
  },
  {
    linkTo: "/my-records",
    primaryText: "My records",
    secondaryText: ""
  },
  {
    linkTo: "/create-record",
    primaryText: "Create new record",
    secondaryText: ""
  },
  {
    linkTo: "/my-collaborators",
    primaryText: "My collaborators",
    secondaryText: ""
  },
  {
    linkTo: "/about",
    primaryText: "About",
    secondaryText: ""
  },
  {
    linkTo: "/help",
    primaryText: "Help",
    secondaryText: ""
  },
  {
    linkTo: `${apiBase}auth/logout`,
    primaryText: "Logout",
    secondaryText: ""
  }
];

export default appMenuItems;
