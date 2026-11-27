import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import style from './style.module.css';

export function CountDown() {
  const { taskState } = useTaskContext();

  return (
    <div className={style.container}>
      {taskState.formattedSecondsRemaining}
    </div>
  );
}