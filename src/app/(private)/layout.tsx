
'use client'; 
import { RootState } from '@/lib/store/store';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';

const layoutPrivate = ({children}:{children:ReactNode}) => {
  
  const auth = useSelector((state: RootState) => state.login.auth);

  const router = useRouter();
  
  console.log('auth =',auth);
  if(!auth?.token){
    router.push("/login");
  }


  return (
    <div>{children}</div>
  )
}

export default layoutPrivate