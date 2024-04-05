import { useState } from 'react';
import { FiTrash, FiCheckSquare, FiEdit } from 'react-icons/fi';
import '../styles/tasklist.scss';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState('');

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask: Task = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setNewTaskTitle('');
  }

  function handleToggleTaskCompletion(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleEditTask(id: number) {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTaskId(id);
      setEditingTaskTitle(taskToEdit.title);
    }
  }

  function handleSaveTaskEdit(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: editingTaskTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditingTaskTitle('');
  }

  function handleMarkAllTasksAsComplete() {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      isComplete: true,
    }));
    setTasks(updatedTasks);
  }

  return (
    <section className='task-list container'>
      <header>
        <h2>Minhas tasks</h2>

        <div className='input-group'>
          <input
            type='text'
            placeholder='Adicionar novo todo'
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            type='submit'
            data-testid='add-task-button'
            onClick={handleCreateNewTask}
          >
            <FiCheckSquare size={16} color='#fff' />
          </button>
        </div>
        <button onClick={handleMarkAllTasksAsComplete}>
          Mark All as Complete
        </button>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? 'completed' : ''}
                data-testid='task'
              >
                {editingTaskId === task.id ? (
                  <>
                    <input
                      type='text'
                      value={editingTaskTitle}
                      onChange={(e) => setEditingTaskTitle(e.target.value)}
                    />
                    <button onClick={() => handleSaveTaskEdit(task.id)}>
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <p>{task.title}</p>
                    <button onClick={() => handleEditTask(task.id)}>
                      <FiEdit size={16} />
                    </button>
                  </>
                )}
              </div>

              <label className='checkbox-container'>
                <input
                  type='checkbox'
                  readOnly
                  checked={task.isComplete}
                  onClick={() => handleToggleTaskCompletion(task.id)}
                />
                <span className='checkmark'></span>
              </label>

              <button
                type='button'
                data-testid='remove-task-button'
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
