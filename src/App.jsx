import { useEffect, useState, useCallback } from 'react';
import { todosData } from './assets/data';
import { TodoItem } from './components/TodoItem';

function App() {
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

  const handleToggle = useCallback(
    id =>
      setTodos(prev => {
        return prev.map(item => {
          if (item.id === id) {
            return { ...item, isDone: !item.isDone };
          }
          return item;
        });
      }),
    []
  );

  const handleDelete = useCallback(id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  }, []);

  useEffect(() => {
    const mockResponse = setTimeout(() => {
      setTodos(todosData);
    }, 1500);

    return () => clearTimeout(mockResponse);
  }, []);

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
              <TodoItem key={item.id} item={item} toggleTodo={handleToggle} removeTodo={handleDelete} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
