function handleGetUser1() {
  try {
    console.log("get user 12");
    renderLoader()
    axios
      .get("/api/1")
      .then(({ data }) => {
        console.log(data);
        const { user, error } = data;
        if (error) throw new Error(error);
        console.log(user);
        renderLoader()
        renderUser(user);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

function handleGetUser2() {
  try {
    console.log("get user 12");
    renderLoader()
    axios
      .get("/api/user1")
      .then(({ data }) => {
        console.log(data);
        const { user, error } = data;
        if (error) throw new Error(error);
        console.log(user);
        renderLoader()
        renderUser(user);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

function handleGetUser3() {
  try {
    console.log("get user 12");
    renderLoader()
    axios
      .get("/api/user1")
      .then(({ data }) => {
        console.log(data);
        const { user, error } = data;
        if (error) throw new Error(error);
        console.log(user);
        renderLoader()
        renderUser(user);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}