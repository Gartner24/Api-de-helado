const PutData = async (url, object) => {
    try {
      let res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      });
    
      let data = await res.json();
      alert('Info changed!')
    } catch (error) {
      alert('Hubo un error', error)
    }
  };
  
  export default PutData;