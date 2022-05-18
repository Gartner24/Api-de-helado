const GetData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    alert('error 404')
  }
};

export default GetData;
