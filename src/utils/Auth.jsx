export const UserInformationLocalStorage = () => {
  const username = localStorage.getItem('userName');
  const avatar = localStorage.getItem('avatar');
  const token = localStorage.getItem('accessToken');
  const email = localStorage.getItem('email');
  const manager = localStorage.getItem('venueManager');
  return {
    username: username,
    avatar: avatar,
    token: token,
    email: email,
    manager: manager,
  };
};
console.log(UserInformationLocalStorage);

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
