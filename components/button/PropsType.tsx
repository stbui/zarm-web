import { ButtonHTMLAttributes, MouseEvent, CSSProperties } from 'react';

export type ButtonTheme = 'default' | 'primary' | 'danger';
export type ButtonSize = 'lg' | 'sm' | 'md';
export type ButtonShape = 'circle' | 'round' | 'rect' | 'radius';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  prefixCls?: string;
  htmlType?: ButtonType;
  theme?: ButtonTheme;
  size?: ButtonSize;
  icon?: string;
  block?: boolean;
  shape?: ButtonShape;
  active?: boolean;
  focus?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ghost?: boolean;
  style?: CSSProperties;
  onClick?: (e: MouseEvent) => void;
  href?: string | undefined;
  target?: string | undefined;
}

export interface ButtonGroupProps {
  prefixCls?: string;
  size?: ButtonSize;
  style?: CSSProperties;
  className?: string;
}
