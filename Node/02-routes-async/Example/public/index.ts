

interface User{
  name: string;
  age: number;
}

function handleGetUser1() {
  try {
    // @ts-ignore: cannot find module 'axios'
    axios
      .get("/api/user1") //event loop
      .then(({ data }) => {
        const { user, error } = data;
        if (error) throw new Error(error);
        console.log(user);
        renderUser(user);
      })
      .catch((err) => console.error(err));

    console.log('try to do something')

  } catch (error) {
    console.error(error);
  }
}

async function handleGetUser2() {
  try {
   
   // @ts-ignore: cannot find module 'axios'
    const  {data}  = await axios.get("/api/user2"); //event loop
    console.log('data arrived')
    const { user, error } = data;
    if (error) throw new Error(error);

    renderUser(user);

  } catch (error) {
    console.error(error);
  }
}

function handleGetUser3() {
  try {
    // @ts-ignore: cannot find module 'axios'
    axios.get("/api/user3").then(({ data }) => {
      console.log(data);
      const { user, error } = data;
      if (error) throw new Error(error);
      renderUser(user);
    });
  } catch (error) {
    console.error(error);
  }
}

function renderUser(user: User) {
  const root: HTMLElement = document.querySelector("#root");

  root.innerText = `user ${user.name} is ${user.age} years old`;
}

