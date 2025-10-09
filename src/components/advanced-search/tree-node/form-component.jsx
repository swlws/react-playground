import LeftBracket from '../form-components/left-bracket/index';
import RightBracket from '../form-components/right-bracket/index';
import Input from '../form-components/input/index';

const componentMap = {
  leftBracket: LeftBracket,
  rightBracket: RightBracket,
  input: Input,
};

export default function RenderFormComponent(props) {
  const { componentType, value } = props;
  const Component = componentMap[componentType];

  const onChange = (value) => {
    props.onChange(value);
  };

  return <Component value={value} onChange={onChange} />;
}
