import { SubmitHandler } from 'react-hook-form';
import IFormInputs from './IFormInputs.ts';
import IState from './IState.ts';

interface IDataContext extends IState {
  onSubmit: SubmitHandler<IFormInputs>;
}

export default IDataContext;
