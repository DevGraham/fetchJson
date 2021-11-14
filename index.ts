import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const toDo = response.data;

  const id = toDo.id;
  const completed = toDo.completed;
  const title = toDo.title;

  console.log(`
        The item with the ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
});
