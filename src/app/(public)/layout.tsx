'use client';
import { RootState } from "@/lib/store/store";
import { useRouter } from "next/navigation";
import { ReactNode } from "react"
import { useSelector } from "react-redux";

const layout = ({children}:{children:ReactNode}) => {


  const auth = useSelector((state: RootState) => state.login.auth);

  const router = useRouter();
  
  console.log('auth =',auth);
  if(auth?.token){
    router.push("/stock/dashboard");
  }
  return (
    <div>{children}</div>
  )
}

export default layout