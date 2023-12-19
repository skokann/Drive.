"use client";
import { ClerkProvider } from "@clerk/nextjs";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Navbar />
        <Hero />
      </NextUIProvider>
    </>
  );
}
