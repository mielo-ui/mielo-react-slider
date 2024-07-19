import ReactSlider, { ReactRangeSliderProps } from "react-range-slider-input"
import clsx from "clsx"

import { RangeSlider } from "./RangeSlider"

export interface SliderProps
  extends Omit<
    ReactRangeSliderProps,
    "onChange" | "defaultValue" | "value" | "rangeSlideDisabled"
  > {
  accent?: "warning" | "error" | "success"
  size?: "large" | "small"

  onChange?: (newValue: number) => void
  defaultValue?: number
  value?: number
}

function Slider({
  defaultValue: _defaultValue,
  className: _className,
  onChange: _onChange,
  value: _value,
  accent,
  size,
  ...props
}: SliderProps) {
  const className = clsx("mie slider", accent, size, _className)

  const onChange = ([_min, max]: number[]) => {
    _onChange?.(max)
  }

  const defaultValue = !_defaultValue ? undefined : [0, _defaultValue]
  const value = !_value ? undefined : [0, _value]

  return (
    <div className={className}>
      <ReactSlider
        {...props}
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