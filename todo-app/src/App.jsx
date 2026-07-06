import React, { useState } from 'react';

export default function App(){
  const [task, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const addTask = () => {
    if (input.trim() !== ''){
      setTasks([...task, input]);
      setInput('');
    }
};

const deleteTask = (indexToRemove) => {
  setTasks(task.filter((_, index) => index !== indexToRemove));
};
return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center p-6">
      
      {}
      <div className="bg-white p-7 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        
        {}
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center tracking-tight">
          My Daily Tasks
        </h1>

        {}
        <div className="flex gap-2 mb-5">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your task here..."
            className="flex-1 px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-700 text-sm shadow-sm transition"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 active:scale-95 font-medium text-sm shadow-sm transition-all"
          >
            Add Task
          </button>
        </div>

        {}
        <ul className="space-y-2.5">
          {task.map((singleTask, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 shadow-sm transition hover:bg-slate-100/50"
            >
              <span className="text-slate-700 text-sm font-medium break-all pr-2">{singleTask}</span>
              <button 
                onClick={() => deleteTask(index)} 
                className="text-sm text-red-500 hover:text-red-700 font-semibold px-2 py-1 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {}
        {task.length === 0 && (
          <p className="text-center text-slate-400 text-xs mt-6 font-medium bg-slate-50 py-3 rounded-xl border border-dashed border-slate-200">
            No tasks added yet. Get started above!
          </p>
        )}

      </div>
    </div>
  );
}