import pick from "lodash.pick"
import omit from "lodash.omit"

import { RangeSliderProps } from "./Props"

const _sliderPropsKeys = [
  "onThumbDragStart",
  "onRangeDragStart",
  "onRangeDragEnd",
  "onThumbDragEnd",

  "rangeSlideDisabled",
  "thumbsDisabled",
  "onInput",

  "orientation",
  "disabled",

  "defaultValue",
  "value",
  "step",
  "max",
  "min",
  "id",
]

export const _sliderProps = (props: RangeSliderProps) =>
  pick(props, _sliderPropsKeys)
export const _otherProps = (props: RangeSliderProps) =>
  omit(props, _sliderPropsKeys) 
