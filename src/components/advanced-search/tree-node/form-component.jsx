import LeftBracket from '../form-components/left-bracket/index';
import RightBracket from '../form-components/right-bracket/index';
import Input from '../form-components/input/index';
import { ENUM_VALIDATE_STATE, NAMESPACE } from '../constant';

const componentMap = {
  leftBracket: LeftBracket,
  rightBracket: RightBracket,
  input: Input,
};

export default function RenderFormComponent({
  componentType,
  value,
  onChange,
  validateState = ENUM_VALIDATE_STATE.SUCCESS,
  validateMessage = '',
}) {
  const Component = componentMap[componentType];

  let className = `${NAMESPACE}__tree-node__row__form-component`;
  if (validateState === ENUM_VALIDATE_STATE.ERROR) {
    className += ' validate-error';
  }
  return (
    <div className={className} title={validateMessage}>
      <Component value={value} onChange={onChange} />
    </div>
  );
}
