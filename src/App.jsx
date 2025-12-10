import { useState } from 'react';
import Button from './components/Button';

function App() {
  // const todos = [
  //   {
  //     id: 1,
  //     title: 'First todo item',
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Second todo item',
  //     isDone: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'A completed todo item',
  //     isDone: true,
  //   },
  // ];

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  function handleTask(e) {
    setTask(e.target.value);
  }

  function addTodo(task) {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        title: task,
        isDone: false,
      },
    ]);

    // 清空input
    setTask('');
  }

  function removeTodo(task) {
    let newTodos = [...todos];
    newTodos.splice(todos.indexOf(task), 1);
    setTodos(newTodos);
  }

  function toggleTodo(id) {
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });

    setTodos(newTodos);
  }

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-4">React Todo</h1>

        <div className="card">
          <div className="card-body">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add a new task..."
                value={task}
                onChange={handleTask}
              />
              <button className="btn btn-primary" type="button" onClick={() => addTodo(task)}>
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="card mt-4">
          <ul className="list-group list-group-flush">
            {todos.map(item => (
              <li
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  item.isDone ? 'text-decoration-line-through text-muted' : ''
                }`}
                key={item.id}
              >
                {item.title}
                <div>
                  <Button
                    type={'button'}
                    classes={`btn ${item.isDone ? 'btn-warning' : 'btn-success'} btn-sm me-2`}
                    onClick={() => toggleTodo(item.id)}
                  >
                    {item.isDone ? 'Undo' : 'Done'}
                  </Button>
                  <Button type={'button'} classes={'btn btn-danger btn-sm'} onClick={() => removeTodo(item)}>
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
