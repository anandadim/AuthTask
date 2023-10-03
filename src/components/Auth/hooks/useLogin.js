"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginDataUser, setLoginDataUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDataUser({ ...loginDataUser, [name]: value });
  };

  const handlingSubmitLogin = async () => {
    setIsLoading(true);
    toast.remove();
    toast.loading("Go to Home Page..");
    const respon = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginDataUser),
    });

    const { token, data } = await respon.json();
    Cookies.set("dm-token", token);

    if (respon.status != 200) {
      toast.remove();
      toast.error("Please fill the form");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    toast.remove();
    toast.success("Login successful!!");
    router.push("/dashboard");
  };

  return { isLoading, loginDataUser, handleChange, handlingSubmitLogin };
};
