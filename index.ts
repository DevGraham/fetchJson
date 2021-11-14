import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface toDo {
  id: number;
  completed: boolean;
  title: string;
}

axios.get(url).then((response) => {
  const toDo = response.data as toDo;

  const id = toDo.id;
  const completed = toDo.completed;
  const title = toDo.title;

  logToDo(id, completed, title);
});

const logToDo = (id: number, completed: boolean, title: string) => {
  console.log(`
        The item with the ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
};
