// Its wrapper around library
// https://github.com/n3r4zzurr0/react-range-slider-input

import Slider from "react-range-slider-input"
import clsx from "clsx"

import { RangeSliderProps } from "./Props"
import * as helpers from "./helpers"

export function RangeSlider({
  defaultValue: _defaultValue,
  className: _className,
  onChange: _onChange,
  value: _value,
  style,
  ...rest
}: RangeSliderProps) {
  const sliderProps: any = helpers._sliderProps(rest)
  const otherProps: any = helpers._otherProps(rest)

  const defaultValue = !_defaultValue ? undefined : [_defaultValue.min, _defaultValue.max]
  const value = !_value ? undefined : [_value.min, _value.max]
  
  const onChange = ([ min, max ]: number[]) => {
    _onChange?.({ min, max })
  }
  
  const className = clsx("mie slider range", _className)

  return (
    <div {...otherProps} style={style} className={className}>
      <Slider
        className="wrapped"
        defaultValue={defaultValue}
        onInput={onChange}
        value={value}
        {...sliderProps}
      />
    </div>
  )
}

RangeSlider.displayName = "Mie.Slider.Range"