import React from 'react'

const SwitchButton = ({ id, checked, onChange }) => {
  return (
    <div className='inline-flex items-center'>
      <div className='relative inline-block h-4 w-8 cursor-pointer rounded-full border dark:border-majky-400'>
        <input
          id={id}
          type='checkbox'
          className='peer absolute left-0 top-0 h-4 w-8 cursor-pointer appearance-none rounded-full bg-majky-100 transition-colors duration-300 checked:bg-majky-500 peer-checked:border-majky-500 peer-checked:before:bg-majky-500 dark:bg-majky-800 dark:checked:bg-majky-300 dark:peer-checked:border-majky-300 dark:peer-checked:before:bg-majky-300'
          checked={checked}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className="before:content[''] before:bg-blue-slate-500 absolute -left-1  top-2/4 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-majky-100 bg-white shadow-md transition-all duration-300 before:absolute before:left-2/4 before:top-2/4 before:block before:h-10 before:w-10 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-majky-500 peer-checked:before:bg-majky-500 dark:border-majky-400"
        >
          <div
            className='left-2/4 top-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5'
            data-ripple-dark='true'
          ></div>
        </label>
      </div>
    </div>
  )
}

export default SwitchButton
