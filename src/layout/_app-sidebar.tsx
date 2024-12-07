import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar/app-sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="py-4 px-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
