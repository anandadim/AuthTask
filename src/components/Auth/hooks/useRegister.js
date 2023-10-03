"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [registerDataUser, setRegisterDataUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDataUser({ ...registerDataUser, [name]: value });
  };

  const handlingSubmitRegister = async () => {
    toast.loading("Registering..");
    const respon = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerDataUser),
    });

    const { data, message, error } = await respon.json();

    if (error) {
      toast.remove();
      toast.error(error);
      return;
    }

    toast.remove();
    toast.success(message);
    router.push("/login");
  };

  return { registerDataUser, handleChange, handlingSubmitRegister };
};
