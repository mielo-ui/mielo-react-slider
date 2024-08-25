import ReactSlider from "react-range-slider-input"
import clsx from "clsx"

import { RangeSlider } from "./RangeSlider"
import { SliderProps } from "./Props"
import * as helpers from "./helpers"

function Slider({
  orientation = "horizontal",
  defaultValue: _defaultValue,
  className: _className,
  onChange: _onChange,
  value: _value,
  accent,
  color,
  size,
  ...rest
}: SliderProps) {
  const sliderRestProps: any = helpers._sliderProps(rest)
  const otherRestProps: any = helpers._otherProps(rest)

  const accentClassName = accent && (accent === true ? "accent" : accent)

  const className = clsx(
    "mie slider",
    orientation,
    accentClassName,
    color,
    size,
    _className,
  )

  const onChange = ([_min, max]: number[]) => {
    _onChange?.(max)
  }

  const defaultValue = !_defaultValue ? undefined : [0, _defaultValue]
  const value = !_value ? undefined : [0, _value]

  const sliderProps = {
    ...sliderRestProps,
    thumbsDisabled: [true, false],
    rangeSlideDisabled: true,
    onInput: onChange,
    defaultValue,
    orientation,
    className,
    value,
  }

  return (
    <div className={className} {...otherRestProps}>
      <ReactSlider {...sliderProps} />
    </div>
  )
}

Slider.displayName = "Mie.Slider"

export default Object.assign(Slider, {
  Range: RangeSlider,
})