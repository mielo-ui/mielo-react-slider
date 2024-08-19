import ReactSlider from "react-range-slider-input"
import clsx from "clsx"

import { RangeSlider } from "./RangeSlider"
import { SliderProps } from "./Props"
import * as helpers from "./helpers"

function Slider({
  defaultValue: _defaultValue,
  className: _className,
  onChange: _onChange,
  value: _value,
  accent,
  color,
  style,
  size,
  ...rest
}: SliderProps) {
  const accentClassName = accent && (accent === true ? "accent" : accent)
  const sliderProps: any = helpers._sliderProps(rest)
  const otherProps: any = helpers._otherProps(rest)

  const className = clsx("mie slider", accentClassName, color, size, _className)

  const onChange = ([_min, max]: number[]) => {
    _onChange?.(max)
  }

  const defaultValue = !_defaultValue ? undefined : [0, _defaultValue]
  const value = !_value ? undefined : [0, _value]

  return (
    <div {...otherProps} style={style} className={className}>
      <ReactSlider
        {...sliderProps}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
        defaultValue={defaultValue}
        onInput={onChange}
        value={value}
      />
    </div>
  )
}

Slider.displayName = "Mie.Slider"

export default Object.assign(Slider, {
  Range: RangeSlider,
})