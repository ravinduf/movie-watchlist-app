const isLogin = () => {
  if (localStorage.getItem('token')){
    return true;
  }
  else {
    return false;
  }
}

export default isLogin;