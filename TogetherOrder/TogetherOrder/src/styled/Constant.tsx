/**
 * @description 變數檔案
 */

/**
 * @description 色票
 */

type Colors = {
    primary: string,
    secondary: string,
    white: string
}
export const colors: Colors = {
    primary: '#FFBC1C',
    secondary: '#3B63BC',
    white: '#FFFFFF'
}

/**
 * @description 字形
 */
export const fontFamily: string = 'Arial, Helvetica, \'LiHei\', "Microsoft JhengHei", "PMingLiU", "微軟正黑體", "新細明體", sans-serif'

/**
 * @description 字級
 */
type FontSize = {
    fz13: number,
    fz16: number,
    fz20: number,
    fz24: number,
    fz28: number,
    fz32: number
}
export const fontSize:FontSize = {
    fz13: 13,
    fz16: 16,
    fz20: 20,
    fz24: 24,
    fz28: 28,
    fz32: 32
}

type BreakPoint = {
    mobile: number,
    desktop: number
}
export const breakpoint: BreakPoint = {
    mobile: 320,
    desktop: 768
}