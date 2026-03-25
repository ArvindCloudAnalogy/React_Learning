import { useState } from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditStart = () => {
    setEditedText(todo.text);
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  const handleEditSave = () => {
    const trimmedText = editedText.trim();
    if (!trimmedText) return;

    editTodo(todo.id, trimmedText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditSave();
    }

    if (e.key === "Escape") {
      handleEditCancel();
    }
  };

  return (
    <div className="flex items-center justify-between border p-3 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4"
        />

        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isEditing ? (
          <>
            <button
              onClick={handleEditSave}
              className="text-green-600 hover:text-green-700"
            >
              Save
            </button>
            <button
              onClick={handleEditCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditStart}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
