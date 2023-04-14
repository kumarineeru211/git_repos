import {atom} from 'recoil'


 export const userdata =atom (
    {
        key:"NameId",
        default: [
                {
                    Name: "Name",
                    default: "Neeru",
                },
                {
                    key:"ItemId",
                    default: [],
                },
                {
                    key:"PriceId",
                    default: [],
                },
                {
                    key:"QuantityId",
                    default: [],
                }
        ]
    
    }


 )