"use client";

import { useWindowWidth } from "@react-hook/window-size";
import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Nav } from "./ui/nav";

const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute top-7 right-[-20px]">
          <Button
            variant="secondary"
            className="rounded-full p-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default SideNavbar;
