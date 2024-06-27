"use client";
import { errorToast, successToast } from "@/helpers/Toastify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAuthFailEnd,
  fetchAuthLogout,
  fetchAuthStart,
  fetchAuthSuccessLogin,
} from "../features/loginSlice";

const useAuthApis = () => {
  //dispatchler
  useEffect(() => {
    console.log("use effect is worked");
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();

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
    dispatch(fetchAuthStart());
    try {
      const responseLogin = await fetch(url, options);
      console.log("responseLogin = ", responseLogin);
      if (!responseLogin.ok) {
        throw new Error(responseLogin?.statusText);
      }
      successToast("Logined is successfullly");
      const json = await responseLogin.json();
      console.log("json = ", json);
      dispatch(
        fetchAuthSuccessLogin({
          currentUser: json?.user?.username,
          token: json?.token,
        })
      );
      router.push("/stock/dashboard");
    } catch (error) {
      dispatch(fetchAuthFailEnd());
      console.log("errorLogin = ", error);
      errorToast("Login is failed!");
    }
  };

  const registerApi = async (values: {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
  }) => {
    const url = process.env.NEXT_PUBLIC_baseUrl + "/users";
    console.log(url);
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    };

    dispatch(fetchAuthStart());
    try {
      const responseRegister = await fetch(url, options);
      console.log("responseRegister = ", responseRegister);
      if (!responseRegister.ok) {
        throw new Error(responseRegister?.statusText);
      }
      successToast("Registered successfullly");
      const json = await responseRegister.json();
      console.log("json = ", json);
      dispatch(
        fetchAuthSuccessLogin({
          currentUser: json?.data?.username,
          token: json?.token,
        })
      );
      router.replace("/stock/dashboard");
    } catch (error) {
      dispatch(fetchAuthFailEnd());
      console.log("errorRegister = ", error);
      errorToast("Register is failed!");
    }
  };
//-----
const logoutApi = async () => {
  const url = process.env.NEXT_PUBLIC_baseUrl + "/auth/logout";
  console.log(url);
  

  dispatch(fetchAuthStart());
  try {
    const responseLogout = await fetch(url);
    console.log("responseLogout = ", responseLogout);
    if (!responseLogout.ok) {
      throw new Error(responseLogout?.statusText);
    }
    successToast("Logouted successfullly");
   
    dispatch(fetchAuthLogout());
    router.replace("/login");
  } catch (error) {
    dispatch(fetchAuthFailEnd());
    console.log("errorLogout = ", error);
    errorToast("Logout is failed!");
  }
};





  
  
  return { loginApi, registerApi, logoutApi };
};

export default useAuthApis;
