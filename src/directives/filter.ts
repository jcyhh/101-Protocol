import { initNumber, initAddress, initPhone } from '@/utils'

enum FilterType {
    Address = 'address',
    Phone = 'phone',
    Num = 'num'
}

function format(type: FilterType, data: any) {
    if (type == FilterType.Num) return initNumber(data)
    else if (type == FilterType.Address) return initAddress(data)
    else if (type == FilterType.Phone) return initPhone(data)
}

export default {
    mounted(el: HTMLElement, binding: any) {
        const arg = binding.arg || FilterType.Num
        el.textContent = `${format(arg, binding.value)}`
    },
    updated(el: HTMLElement, binding: any) {
        const arg = binding.arg || FilterType.Num
        el.textContent = `${format(arg, binding.value)}`
    }
};