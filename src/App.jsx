function App() {
  const todos = [
    {
      id: 1,
      title: 'First todo item',
      isDone: false,
    },
    {
      id: 2,
      title: 'Second todo item',
      isDone: false,
    },
    {
      id: 3,
      title: 'A completed todo item',
      isDone: true,
    },
  ];

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-4">React Todo</h1>

        <div className="card">
          <div className="card-body">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Add a new task..." />
              <button className="btn btn-primary" type="button">
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
                  <button className={`btn ${item.isDone ? 'btn-warning' : 'btn-success'} btn-sm me-2`}>
                    {item.isDone ? 'Undo' : 'Done'}
                  </button>
                  <button className="btn btn-danger btn-sm">Delete</button>
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
