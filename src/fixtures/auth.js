localStorage.setItem("isAutentificated", false);

// export const auth = {
//   isAutentificated: false,
//   logIn(cb) {
//     this.isAutentificated = true;
//     cb();
//   },
//   logOut(cb) {
//     this.isAutentificated = false;
//     cb();
//   }
// };

export const login = () => {
  localStorage.getItem("isAutentificated", true);
};

export const logout = () => {
  localStorage.getItem("isAutentificated", false);
};
