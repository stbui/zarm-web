export interface GroupProps {
  prefixCls?: string;
  value?: string[] | number[];
  defaultValue?: string[] | number[];
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange: (checkedValue: Array<string | number | boolean>) => void;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export default interface PropsType {
  prefixCls?: string;
  value?: string | number;
  checked?: boolean;
  defaultChecked?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  disabled?: boolean;
  isDisabled?: boolean;
  indeterminate?: boolean;
  onChange: (event: HTMLInputEvent) => void;
}
