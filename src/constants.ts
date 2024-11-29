export const BASE_URL = "http://localhost:3000/api/v1";
export const AUTH_ROUTES = {
  SIGNUP: "/auth/signup", // POST
  SIGNIN: "/auth/signin", // POST
  SIGNOUT: "/auth/signout", // POST
};
export const POSTS_ROUTES = {
  CREATE: "/posts", // POST
  LIST: "/posts", // GET
  DELETE: "/posts/:id", // DELETE
  UPDATE: "/posts/:id", // PUT
  GET: "/posts/:id", // GET
};

export const loginURL = `${BASE_URL}${AUTH_ROUTES.SIGNIN}`;
export const signupURL = `${BASE_URL}${AUTH_ROUTES.SIGNUP}`;
export const getPostsURL = `${BASE_URL}${POSTS_ROUTES.LIST}`;
export const createPostURL = `${BASE_URL}${POSTS_ROUTES.CREATE}`;
export const deletePostURL = `${BASE_URL}${POSTS_ROUTES.DELETE}`;
export const updatePostURL = `${BASE_URL}${POSTS_ROUTES.UPDATE}`;
export const getPostURL = `${BASE_URL}${POSTS_ROUTES.GET}`;