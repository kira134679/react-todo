export default function Button({ type, classes, children, onClick }) {
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
