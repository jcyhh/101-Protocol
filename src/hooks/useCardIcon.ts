import card1 from '@/assets/card/1.png'
import card2 from '@/assets/card/2.png'
import card3 from '@/assets/card/3.png'
import card4 from '@/assets/card/4.png'
import card5 from '@/assets/card/5.png'
import card6 from '@/assets/card/6.png'
import card7 from '@/assets/card/7.png'

export function useCardIcon () {
    const getCardIcon = (id:number) => {
        if(id==1)return card1
        else if(id==2)return card2
        else if(id==3)return card3
        else if(id==4)return card4
        else if(id==5)return card5
        else if(id==6)return card6
        else if(id==7)return card7
        else return card1
    }
    return {
        getCardIcon
    }
}