"use client";

import { addToast, ToastProvider } from "@heroui/react";
import { useEffect } from "react";

const CustomToastComponent = () => {
  useEffect(() => {
    addToast({
      title: "Welcome! 🚀",
      description:
        "Portfolio loaded successfully.\nYou can drag components like photos and info boxes!",
  
    });
  }, []);

  return null; // Nothing to render
};

export default function Toaster() {
  return (
    <>
       
      <CustomToastComponent />
    </>
  );
}
