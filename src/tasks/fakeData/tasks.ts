import { TaskStatus } from '../task.model';

export default [
  {
    id: '1',
    title: 'First task',
    description: 'The first task',
    status: TaskStatus.OPEN,
  },
  {
    id: '2',
    title: 'Second task',
    description: 'The second task',
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: '3',
    title: 'Third task',
    description: 'The third task',
    status: TaskStatus.DONE,
  },
];
