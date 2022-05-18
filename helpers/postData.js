const PostData = async (url, object) => {
  try {
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
    let data = await res.json();
  } catch (error) {
    alert('Hubo un error', error)
  }
};

export default PostData;
