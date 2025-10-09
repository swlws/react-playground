import { NAMESPACE } from '../../constant';

export default function RightBracket(props) {
  const { value = [] } = props;

  const onChange = (e) => {
    props.onChange([e.target.value]);
  };

  return (
    <div className={`${NAMESPACE}__form__right-bracket`}>
      <input value={value[0]} onChange={onChange}></input>
    </div>
  );
}
