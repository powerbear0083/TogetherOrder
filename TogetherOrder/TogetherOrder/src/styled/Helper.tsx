/**
 * @description 樣式專用 Helper
 */

/**
 * @description px 轉換 rem
 * @param { number } value 
 */
export function pxToRem(value:  number) {
    return `${value / 100}rem`
}

/**
 * 將 hex 色票轉乘 rgba
 * @param {string} hex - Expanded hexadecimal CSS color value.
 * @param {number} alpha - Alpha as a decimal.
 * @returns {string} RGBA CSS color value.
 */
export function hexToRgba (hex: string, alpha: number) {
    const r = parseInt(hex.substring(1, 3), 16)
    const g = parseInt(hex.substring(3, 5), 16)
    const b = parseInt(hex.substring(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}