import React, { Component } from 'react';
import classnames from 'classnames';
import calcTextareaHeight from './calcTextareaHeight';
import { InputAutoHeightType, TextAreaProps } from './PropsType';
import { fixControlledValue } from './InputCore';

class Textarea extends Component<TextAreaProps, any> {
  static defaultProps = {
    autoHeight: false,
  };

  textareaRef = React.createRef<HTMLTextAreaElement>();

  constructor(props) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
      textareaStyle: {},
    };
  }

  componentDidMount() {
    this.resizeTextarea();
  }

  resizeTextarea = () => {
    const { autoHeight } = this.props;

    if (!autoHeight || !this.textareaRef.current) {
      return false;
    }
    const { minRows, maxRows } = autoHeight as InputAutoHeightType;
    const textareaCalcStyle = calcTextareaHeight(this.textareaRef.current, false, minRows, maxRows);

    this.setState({
      textareaStyle: textareaCalcStyle,
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props;
    this.setState({ value: e.target.value });
    if (onChange) {
      onChange(e);
    }
    this.resizeTextarea();
  };

  focus = () => {
    if (this.textareaRef.current) {
      this.textareaRef.current.focus();
    }
  };

  blur = () => {
    if (this.textareaRef.current) {
      this.textareaRef.current.blur();
    }
  };

  render() {
    const {
      prefixCls,
      className,
      shape,
      style,
      disabled,
      defaultValue,
      showLength,
      autoHeight,
      bordered,
      maxLength,
      ...others
    } = this.props;
    const { value, textareaStyle } = this.state;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}--textarea`]: true,
      [`${prefixCls}--${shape}`]: shape,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--bordered`]: bordered,
      [`${prefixCls}--nobordered`]: !bordered,
    });

    return (
      <div className={cls} style={style}>
        <textarea
          {...others as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          style={textareaStyle}
          maxLength={maxLength}
          disabled={disabled}
          value={fixControlledValue(value)}
          ref={this.textareaRef}
          onChange={this.handleChange}
          className={`${prefixCls}__inner`}
        >
          {defaultValue}
        </textarea>
        {showLength && (
          <span className={`${prefixCls}__length-wrapper`}>
            <span className={`${prefixCls}__length-count`}>{(value || '').length}</span>
            /
            <span className={`${prefixCls}__length-max-count`}>{maxLength}</span>
          </span>
        )}
      </div>
    );
  }
}

export default Textarea;
