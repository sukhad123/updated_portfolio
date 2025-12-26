"use client";

import { addToast, ToastProvider,cn } from "@heroui/react";
import { useEffect } from "react";

const CustomToastComponent = () => {
  useEffect(() => {
    addToast({
      title: "Welcome! 🚀",
      description:
        "Portfolio loaded successfully.\nYou can drag components like photos and info boxes!",
        color:"success"
  
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
