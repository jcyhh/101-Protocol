import { t } from '@/locale'
import { showLoadingToast } from 'vant';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { showImagePreview } from 'vant';
import { appTimeZone } from '@/config';

dayjs.extend(utc)
dayjs.extend(timezone)

export function showLoading() {
    showLoadingToast({
        overlay: true, // 遮罩
        forbidClick: true, // 禁止点击
        duration: 0, // 无限时长
        zIndex: 10000000000 // 层级
    });
}

function toBigNumber(value:number|string) {
    return new BigNumber(value || 0)
}

/**
 * 普通数字乘法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a * b
 */
export function computedMul(a:number|string, b:number|string) {
    return toBigNumber(a).times(toBigNumber(b)).toNumber()
}

/**
 * 普通数字除法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a / b 保留两位小数
 */
export function computedDiv(a:number|string, b:number|string) {
    return toBigNumber(a).div(toBigNumber(b)).toNumber()
}


/**
 * 普通数字加法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a + b
 */
export function computedAdd(a:number|string, b:number|string) {
    return toBigNumber(a).plus(toBigNumber(b)).toNumber()
}

/**
 * 普通数字减法精度计算
 * @param {Number|String} a - 第一个数字 
 * @param {Number|String} b - 第二个数字
 * @returns {Number} a - b
 */
export function computedSub(a:number|string, b:number|string) {
    return toBigNumber(a).minus(toBigNumber(b)).toNumber()
}

/**
 * 按设计稿宽度换算当前屏幕对应像素
 * @param {Number|String} px - 设计稿像素
 * @param {Number|String} designWidth - 设计稿宽度，默认750
 * @returns {Number} 当前屏幕对应像素
 */
export function getAdaptWidht(px:number|string, designWidth:number|string = 750) {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : Number(designWidth)
    return computedDiv(computedMul(screenWidth, px), designWidth)
}

/**
 * 按设计稿高度换算当前屏幕对应像素
 * @param {Number|String} px - 设计稿像素
 * @param {Number|String} designHeight - 设计稿高度
 * @returns {Number} 当前屏幕对应像素
 */
export function getAdaptHeight(px:number|string, designHeight:number|string) {
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : Number(designHeight)
    return computedDiv(computedMul(screenHeight, px), designHeight)
}

/**
 * 计算 a 占 b 的百分比
 * @param {Number|String} a - 当前值
 * @param {Number|String} b - 总值
 * @returns {Number} 百分比，异常返回0，最大返回100
 */
export function getPercent(a:number|string, b:number|string) {
    const numA = Number(a)
    const numB = Number(b)

    if(!Number.isFinite(numA) || !Number.isFinite(numB) || numA < 0 || numB <= 0)return 0
    if(numA >= numB)return 100

    return computedMul(computedDiv(numA, numB), 100)
}

/**
 * 个位数补0
 * @param {Number|String} value - 数字或数字字符串
 * @returns {String} 个位数补0后的字符串
 */
export function padZero(value:number|string) {
    const num = Number(value)
    if(Number.isFinite(num) && Number.isInteger(num) && num >= 0 && num < 10){
        return `0${Math.trunc(num)}`
    }
    return `${value}`
}

/**
 * 判断当前是否在指定时区的 start～end 时间段内；与设备本地时区无关
 * @param startStr - 开始：支持 HH:mm / HH:mm:ss，或 dayjs 可解析的日期时间字符串
 * @param endStr - 结束：同上；仅时间时按上海「当天」比较；若 start>end 视为跨天（如 22:00～06:00）
 */
export function isNowInTimeZoneRange(startStr: string, endStr: string): boolean {
    if (!startStr || !endStr) return false
    const now = dayjs.tz(new Date(), appTimeZone)

    const parseMinutes = (s: string) => {
        const m = String(s).trim().match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/)
        if (!m) return null
        return Number(m[1]) * 60 + Number(m[2])
    }

    const startM = parseMinutes(startStr)
    const endM = parseMinutes(endStr)
    if (startM !== null && endM !== null) {
        const n = now.hour() * 60 + now.minute()
        if (startM <= endM) return n >= startM && n <= endM
        return n >= startM || n <= endM
    }

    const start = dayjs.tz(startStr, appTimeZone)
    const end = dayjs.tz(endStr, appTimeZone)
    if (!start.isValid() || !end.isValid()) return false
    return (now.isAfter(start) || now.isSame(start)) && (now.isBefore(end) || now.isSame(end))
}

/**
 * 计算当前时间距离目标时间还剩多少秒
 * @param dateStr - 日期时间字符串，格式如：2026-04-23 16:00:00
 * @returns 剩余秒数；如果目标时间已过，返回负数
 */
export function getSecondsDiffByDate(dateStr: string): number {
    if (!dateStr) return 0
    const now = dayjs.tz(new Date(), appTimeZone)
    const target = dayjs.tz(dateStr, appTimeZone)
    if (!target.isValid()) return 0
    return Math.floor((target.valueOf() - now.valueOf()) / 1000)
}

export function isIOS() {
    const ua = navigator.userAgent;
    const isIPhone = /iPhone/i.test(ua);
    const isIPad = /iPad/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
    return isIPhone || isIPad || /iPod/i.test(ua);
}

// 格式化数字
export function initNumber(value:number | bigint){
    let text:string = ''
    if(value){
        const num = Math.floor(parseFloat(`${value}`) * 1e6) / 1e6
        let numFormat = new Intl.NumberFormat('en-US',{
            maximumFractionDigits: 6
        }).format(num)
        text = numFormat == '0'?'0.00':numFormat
    }else{
        text = '0.00'
    }
    return text
}

// 隐藏手机号中间信息
export function initPhone(value:string){
    if(!value)return '--'
    return value.slice(0, 3) + "****" + value.slice(value.length - 4)
}

// 隐藏钱包地址中间信息
export function initAddress(value:string){
    if(!value)return '--'
    return value.slice(0, 5) + '****' + value.slice(value.length - 4)
}

/**
 * 格式化倒计时秒数为时分秒
 * @param seconds 秒数
 * @returns 格式化后的字符串，如 "12:34:56"
 */
export function formatCountdown(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/**
 * 格式化时间戳为日期时间字符串
 * @param timestamp 时间戳（秒）
 * @returns 格式化后的字符串，如 "2026-01-08 17:27:14"
 */
export function formatTimestamp(timestamp: number): string {
    return dayjs(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')
}

export function openLink (link: string) {
    location.href = link
}

export function previewImgs (list:string[], index:number=0) {
    showImagePreview({
        images: list,
        startPosition: index
    })
}