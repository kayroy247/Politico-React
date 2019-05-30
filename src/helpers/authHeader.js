const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return `Bearer ${user.token}`;
  }
  return '';
};

export default authHeader;
