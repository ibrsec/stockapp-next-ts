
const useAuthApis = () => {



    const loginApi = () => {
        const url = process.env.NEXT_PUBLIC_baseUrl
        console.log(url);
    }
  return {loginApi}
}

export default useAuthApis;