import axios from 'axios'
import {
    CHANGE_CITY
} from './mutation-types'


export default {

    async getCurrentPosition(context) {
        let cityId = 5
        let cityName = '北京'

        let citys = await axios.post('/jucheng/Index/getCityList').then((res) => {
            return res.data.city_list;
        })

        let result = await axios.get('/bd/location/ip?ak=EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO').then((res) => {
            return res;
        })

        if (result) { // 如果定位成功
            cityName = result.data.content.address.replace('市', '')
            for (var i in citys) {
                for (var j in citys[i].lists) {
                    if (citys[i].lists[j].name === cityName) {
                        cityId = citys[i].lists[j].id
                        break;
                    }
                }
            }
        }

        context.commit({
            type: CHANGE_CITY,
            city: {
                cityId,
                cityName
            },
            cities: citys
        })
    }
}