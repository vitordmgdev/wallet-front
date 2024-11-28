import { Outlet } from "react-router-dom";
import {
    Sidebar,
    SidebarProvider,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "../components/ui/sidebar";
import Header from "../components/header";
import { Flex } from "@radix-ui/themes";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]

const Layout = () => {
    return (
      <Flex direction="column" className=" w-full">
          <div className="p-2 sm:p-4 pt-0 h-full block lg:flex lg:justify-center w-full">
              <Outlet />
          </div>
      </Flex>
    )
}

export default Layout;