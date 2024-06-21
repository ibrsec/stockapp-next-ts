"use client";
import { errorToast, successToast } from "@/helpers/Toastify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthApis = () => {


//dispatchler
useEffect(()=> {
  console.log('use effect is worked');
},[])


const router = useRouter();


  const loginApi = async (email: string, password: string) => {
    const url = process.env.NEXT_PUBLIC_baseUrl + "/auth/login";
    console.log(url);
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    try {
      const responseLogin = await fetch(url, options);
      console.log("responseLogin = ", responseLogin);
      if(!responseLogin.ok){
        throw new Error(responseLogin?.statusText);
      }
      successToast("Logined is successfullly");
      router.replace("/stock/dashboard");
    } catch (error) {
      console.log('errorLogin = ',error);
      errorToast("Login is failed!")
    }
  };
  return { loginApi };
};

export default useAuthApis;
