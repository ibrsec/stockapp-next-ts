 'use client';
import { useAppSelector } from '@/lib/hooks/hooks';
import { RootState } from '@/lib/store/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const DashboardPage = () => { 
// const auth = useAppSelector(state => state.login.auth) 
// const auth = useSelector((state: RootState) => state.login.auth);

// const router = useRouter();

// console.log('auth =',auth);
// if(!auth?.token){
//   router.push("/login");
// }

  return (
    <div>DashboardPage</div> 
  )
}

export default DashboardPage