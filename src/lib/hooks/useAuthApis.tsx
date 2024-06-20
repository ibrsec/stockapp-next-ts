const useAuthApis = () => {


//link to
//sonuc uyarisi gosterme
//dispatchler



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
    } catch (error) {
      console.log('errorLogin = ',error);
    }
  };
  return { loginApi };
};

export default useAuthApis;
