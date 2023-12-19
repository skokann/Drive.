"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function Nav() {
  const { user, isLoaded } = useUser();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Login",
    "Profile",
    "Dashboard",
    "Analytics",
    "System",
    "My Settings",
    "Team Settings",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">DRIVE.</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {isLoaded && user && (
          <NavbarItem className="flex gap-3">
            <Button as={Link} color="primary" href="/dashboard" variant="flat">
              Dashboard
            </Button>
            <UserButton afterSignOutUrl="/" />
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
