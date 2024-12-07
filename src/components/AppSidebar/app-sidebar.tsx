import { BookType, Home, Server, Blocks, BookPlus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import { AuthButton } from "../Auth/auth-button";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

// * Menu items.
const items = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Frontend",
    url: "/front-end",
    icon: BookType,
  },
  {
    title: "Backend",
    url: "/back-end",
    icon: Server,
  },
  {
    title: "Extensiones",
    url: "/extensions",
    icon: Blocks,
  },
  {
    title: "Cursos",
    url: "/courses",
    icon: BookPlus,
  },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold">
            Navegación
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AuthButton />
      </SidebarFooter>
    </Sidebar>
  );
}
