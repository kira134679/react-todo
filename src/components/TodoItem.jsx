import { memo } from 'react';
import Button from './Button';

export const TodoItem = memo(({ item, toggleTodo, removeTodo }) => {
  console.log(`我是todoitem ${item.id}`);
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        item.isDone ? 'text-decoration-line-through text-muted' : ''
      }`}
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
        <Button type={'button'} classes={'btn btn-danger btn-sm'} onClick={() => removeTodo(item.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
});
