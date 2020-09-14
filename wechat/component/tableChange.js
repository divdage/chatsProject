import chats from "./home/chats.js"
import contacts from "./home/contacts.js"
import find from "./home/find.js"
import me from "./home/me.js"
const tabChange={
    template:`
    <div class="tabBox">
        <component :is="pageName" class="component"></component>

        <div class="bottom">
            <div class="bottom-item" @click="changeChats">
                <img src="imgs/bottom-chat.png" class="bottomImg">            
                <span class="bottomName">微信</span>
            </div>
            <div class="bottom-item bottom-itemList" @click="changeContacts">
                <img src="imgs/联系人没点.png" class="bottomImg bottomImgsec">            
                <span class="bottomName">通讯录</span>
            </div>
            <div class="bottom-item" @click="changeFind">
                <img src="imgs/发现没点.png" class="bottomImg">            
                <span class="bottomName">发现</span>
            </div>
            <div class="bottom-item" @click="changeMe">
                <img src="imgs/我没点.png" class="bottomImg">            
                <span class="bottomName">我</span>
            </div>
        </div>
    </div>
    `,
    components:{
        chats:chats,
        contacts:contacts,
        find:find,
        me:me
    },
    data(){
        return{
            pageName:"chats"
        }
    },
    methods:{
        changeContacts(){
            this.pageName="contacts"
        }, 
        changeChats(){
            this.pageName="chats"
        }, 
        changeFind(){
            this.pageName="find"
        }, 
        changeMe(){
            this.pageName="me"
        }
    }
}
export default tabChange 