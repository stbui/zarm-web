import React from 'react';
import { render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Radio from '../index';

describe('Radio', () => {
  it('renders normal Radio correctly', () => {
    const wrapper = render(
      <Radio value="a">选择</Radio>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders disabled Radio correctly', () => {
    const wrapper = render(
      <Radio disabled value="a">
        选择
      </Radio>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders checked Radio correctly', () => {
    const wrapper = render(
      <Radio checked>选择</Radio>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('behaves correctly when changing radio status', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Radio value="a" onChange={onChange}>
        选择
      </Radio>,
    );

    wrapper.find('.zw-radio__input').simulate('change');
    expect(onChange).toBeCalled();
  });

  it('renders Radio Group correctly', () => {
    const wrapper = render(
      <Radio.Group>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </Radio.Group>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders defaultValue Radio Group correctly', () => {
    const wrapper = render(
      <Radio.Group defaultValue="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </Radio.Group>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders value Radio Group correctly', () => {
    const wrapper = render(
      <Radio.Group value="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </Radio.Group>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders checked Radio Group correctly', () => {
    const wrapper = render(
      <Radio.Group>
        <Radio value="a">A</Radio>
        <Radio value="b" checked>B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </Radio.Group>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('behaves correctly when choosing from Radio Group', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Radio.Group onChange={onChange}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </Radio.Group>,
    );

    wrapper
      .find('.zw-radio__input')
      .first()
      .simulate('change');
    expect(onChange).toBeCalled();
  });
});
