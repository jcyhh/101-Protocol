import { apiGetCardList } from "@/api/card"
import { apiCardholder } from "@/api/user"
import { computed, ref } from "vue"

export function useCardholder () {

    const pickerCurrent = ref(0)

    const pickerShow = ref(false)

    const pickerList = ref<any[]>([])

    const currentPicker = computed(()=>pickerList.value.length==0?null:pickerList.value[pickerCurrent.value])

    const loadPickerList = async () => {
        const res:any = await apiCardholder({
            page_no: 1,
            page_size: 20
        })
        pickerList.value = res.cardholders
    }

    return {
        pickerShow,
        pickerList,
        pickerCurrent,
        currentPicker,
        loadPickerList
    }
}

export function useCard () {
    const pickerCurrent = ref(0)

    const pickerShow = ref(false)

    const pickerList = ref<any[]>([])

    const currentPicker = computed(()=>pickerList.value.length==0?null:pickerList.value[pickerCurrent.value])

    const loadPickerList = async () => {
        const res:any = await apiGetCardList({
            pay_status: 2
        })
        pickerList.value = res.data.filter((item:any)=>item.complete_card_number)
    }

    return {
        pickerShow,
        pickerList,
        pickerCurrent,
        currentPicker,
        loadPickerList
    }
}