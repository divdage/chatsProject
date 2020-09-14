const Contacts = {
    data() {
        return {
            contactsLisy: [{
                    img: "imgs/contacts-newFriend.png",
                    name: "新的朋友"
                },
                {
                    img: "imgs/contacts-groupChat.png",
                    name: "群聊"
                },
                {
                    img: "imgs/contacts-label.png",
                    name: "标签"
                },
                {
                    img: "imgs/contacts-public.png",
                    name: "公众号"
                },
                {
                    img: "imgs/contacts-enterprise.png",
                    name: "企业微信联系人"
                },
            ],
            A: [{
                    img: "imgs/header01.jpg",
                    name: "冷血杀手"
                },
                {
                    img: "imgs/header02.jpg",
                    name: "大姐"
                },
                {
                    img: "imgs/header03.jpg",
                    name: "老爸"
                },
                {
                    img: "imgs/header04.jpg",
                    name: "老妈"
                },
                {
                    img: "imgs/header05.jpg",
                    name: "小祖宗"
                },
                {
                    img: "imgs/header06.jpg",
                    name: "产爱军"
                },
                {
                    img: "imgs/header07.jpg",
                    name: "阿峰"
                },
            ]
        }
    },
    template: `
    <div>
        <div class="title">
            <div class="top">
                <div class="titleName">
                    <p>通讯录</p>
                </div>
            <div class="topImg">
                <img src="imgs/添加好友icon.png" class="chatsImg">            
            </div>
        </div>
            <div class="inp">
                <input placeholder="搜索">
            </div>
        </div>
        <div class="middle">
            <div class="middleList" v-for="item in contactsLisy">
                <img :src="item.img" class="headerImg">
                <div class="middleListBox">
                    <div class="middleList-container">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div>A</div>
            <div class="middleList" v-for="item in A" @click="goContactsDetail">
                <img :src="item.img" class="headerImg">
                <div class="middleListBox">
                    <div class="middleList-container">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        goContactsDetail(){
            this.$router.push("/contactsDetail")
        }
    }
}
export default Contacts