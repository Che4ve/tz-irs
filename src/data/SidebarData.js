import { BiSolidDashboard } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

export const SidebarData = [
    {
        title: "Сводка",
        path: "/dashboard",
        icon: <BiSolidDashboard/>,
        className: "sidebar-item",
        addCLass: "",
    },
    {
        title: "Граждане",
        path: "/citizens",
        icon: <IoPeople/>,
        className: "sidebar-item",
        addCLass: "",
    },
    {
        title: "Настройки",
        path: "/settings",
        icon: <IoMdSettings/>,
        className: "sidebar-item",
        addCLass: "settings",
    }
]