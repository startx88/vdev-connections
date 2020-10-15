export default {
  userVerification(state) {
    return state.isAuth && !state.user.verify && state.user.role === "user"
  },
  isUser(state) {
    return state.isAuth && state.user.verify && state.user.role === "user"
  },
  isAdmin(state) {
    return state.isAuth && state.user.verify && state.user.role === "admin"
  },
  userInfoLoading(state) {
    return state.loading;
  },
  userFullname(state) {
    const name = state.user.firstname + " " + state.user.lastname;
    return name;
  },
  userShortName(state) {
    const name = state.user.firstname[0] + "" + state.user.lastname[0];
    return name;
  },
  user(state) {
    return state.user;
  },
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuth(state) {
    return state.isAuth;
  }

}