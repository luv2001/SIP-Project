import * as api from "../api/index";

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // This is not default export
    dispatch({
      type: "FEATCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default getPosts;
