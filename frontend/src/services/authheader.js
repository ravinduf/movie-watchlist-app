const authHeader = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return  `Token ${token}`
  }
  else {
    return ``;
  }

}

export default authHeader;