
import { FILTERS } from "../constants/FIlter";

export function filterTodos(todos, filter) {

  switch (filter) {
    case FILTERS.ACTIVE:
      return todos.filter((t) => !t.completed);

    case FILTERS.COMPLETED:
      return todos.filter((t) => t.completed);

    default:
      return todos;
  }
}