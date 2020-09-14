
import tableChange from "../component/tableChange.js"
import chatsDetail from "../component/home/chatsDetail.js"
import contactsDetail from "../component/home/contactsDetail.js"
import findDetail from "../component/home/findDetail.js"
import meDetail from "../component/home/meDetail.js"
const routes = [
    {path:"/",component:tableChange},
    {path:"/chatsDetail",component:chatsDetail},
    {path:"/contactsDetail",component:contactsDetail},
    {path:"/findDetail",component:findDetail},
    {path:"/meDetail",component:meDetail}
]


const router = new VueRouter({
    routes:routes
})
export default router