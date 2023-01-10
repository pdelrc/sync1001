const getNameAxios = async (idPost) => {
  try {
    const resPost = await axios(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    const resUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );
    console.log(resUser.data.name);
  } catch (error) {
    console.log(error);
  }
};

getNameAxios(56);
