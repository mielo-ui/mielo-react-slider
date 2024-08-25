// Its wrapper around library
// https://github.com/n3r4zzurr0/react-range-slider-input

import Slider from "react-range-slider-input"
import clsx from "clsx"

import { RangeSliderProps } from "./Props"
import * as helpers from "./helpers"

export function RangeSlider({
  defaultValue: _defaultValue,
  orientation = "horizontal",
  className: _className,
  onChange: _onChange,
  value: _value,
  accent,
  color,
  size,
  ...rest
}: RangeSliderProps) {
  const sliderRestProps: any = helpers._sliderProps(rest)
  const otherRestProps: any = helpers._otherProps(rest)

  const defaultValue = !_defaultValue ? undefined : [_defaultValue.min, _defaultValue.max]
  const value = !_value ? undefined : [_value.min, _value.max]

  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie slider range",
    orientation,
    accentClassName,
    color,
    size,
    _className,
  )
  
  const onChange = ([ min, max ]: number[]) => {
    _onChange?.({ min, max })
  }

  const sliderProps = {
    ...sliderRestProps,
    rangeSlideDisabled: true,
    onInput: onChange,
    defaultValue,
    orientation,
    className,
    value,
  }

  return (
    <div className={className} {...otherRestProps}>
      <Slider {...sliderProps} />
    </div>
  )
}
RangeSlider.displayName = "Mie.Slider.Range"