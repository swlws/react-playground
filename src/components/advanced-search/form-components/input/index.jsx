import { NAMESPACE } from '../../constant';

export default function Input(props) {
  const { value = [] } = props;

  const onChange = (e) => {
    props.onChange([e.target.value]);
  };

  return (
    <div className={`${NAMESPACE}__form__input`}>
      <input type="text" value={value[0]} onChange={onChange}></input>
    </div>
  );
}
