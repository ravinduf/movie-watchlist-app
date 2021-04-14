const authHeader = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return {Authorization: `Token ${token}`}
  }
  else {
    return {}
  }

}

export default authHeader;