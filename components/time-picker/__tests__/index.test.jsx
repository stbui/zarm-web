import React from 'react';
import { render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker from '../index';
import TimeSelect from '../TimeSelect';

jest.mock('react-dom', () => ({
  createPortal: node => node,
}));

describe('TimePicker', () => {
  // beforeAll(() => {
  //   ReactDOM.createPortal = jest.fn((element) => {
  //     return element;
  //   });
  // });
  //
  // afterEach(() => {
  //   ReactDOM.createPortal.mockClear();
  // });

  it('renders normal time-picker correctly', () => {
    const wrapper = render(
      <div>
        <TimePicker />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders disabled time-picker correctly', () => {
    const wrapper = render(
      <div>
        <TimePicker
          isDisabled
        />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders disabled time-select correctly', () => {
    const wrapper = render(
      <TimeSelect
        value="00:00:00"
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders isRadius time-picker correctly', () => {
    const wrapper = render(
      <div>
        <TimePicker
          isRadius
          style={{ width: 160 }}
        />
      </div>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('behaves correctly when clear button click', () => {
    const wrapper = mount(<TimePicker value="12:33:22" />);
    wrapper.find('.clear-btn').simulate('click');

    expect(wrapper.find('.za-select__text').text()).toBe('00:00:00');
  });
});
