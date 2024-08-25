import { ReactRangeSliderProps } from "react-range-slider-input"
import { HTMLAttributes } from "react"

type DivProps = Omit<
  Omit<HTMLAttributes<HTMLDivElement>, keyof RangeSliderBaseProps>,
  keyof OriginalSliderProps
>

export type SliderAccent = boolean | "warning" | "error" | "success"
export type SliderSize = "large" | "small"

export interface RangeSliderValue {
  min: number
  max: number
}

export interface RangeSliderBaseProps {
  onChange?: (newValue: RangeSliderValue) => void
  defaultValue?: RangeSliderValue
  value?: RangeSliderValue
}

type OriginalSliderProps = Omit<
  ReactRangeSliderProps,
  keyof RangeSliderBaseProps
>

export type SliderColor =
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "brown"
  | "pink"
  | "deeppurple"
  | "indigo"
  | "lightgreen"
  | "deeporange"
  | "light"
  | "dark"

export interface SliderProps extends OriginalSliderProps, DivProps {
  accent?: SliderAccent
  color?: SliderColor
  size?: SliderSize

  onChange?: (newValue: number) => void
  defaultValue?: number
  value?: number
}

export interface RangeSliderProps
  extends RangeSliderBaseProps,
    OriginalSliderProps,
    DivProps {
  accent?: SliderAccent
  color?: SliderColor
  size?: SliderSize
}
