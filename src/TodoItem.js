import React , {useState , useContext} from 'react'
import { Context }  from './context'

export default function TodoItem({title, id, completed}) {
  // const [checked , setChecked] = useState(completed);
  const cls = ['todo']
  const { dispatch } = useContext(Context); 

  if(completed){
    cls.push('completed')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange = {() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          onClick = { () => dispatch({
            type: 'remove',
            payload: id
          }) }
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}