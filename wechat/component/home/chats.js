const Chats = {
    data() {
        return {
            chatList: [{
                    img: "imgs/header01.jpg",
                    name: "冷血杀手",
                    say:"[图片]"
                },
                {
                    img: "imgs/header02.jpg",
                    name: "大姐",
                    say:"视频",
                    time:"上午 9：10"
                },
                {
                    img: "imgs/header03.jpg",
                    name: "老爸",
                    say:"[视频通话]",
                    time:"上午 9：20"
                },
                {
                    img: "imgs/header04.jpg",
                    name: "老妈",
                    say:"[视频通话]",
                    time:"昨天"
                },
                {
                    img: "imgs/header05.jpg",
                    name: "小祖宗",
                    say:"出发回家了",
                    time:"昨天"
                },
                {
                    img: "imgs/header06.jpg",
                    name: "产爱军",
                    say:"[已取消]",
                    time:"昨天"
                },
                {
                    img: "imgs/header07.jpg",
                    name: "阿峰",
                    say:"[网站]",
                    time:"星期日"
                },
                {
                    img: "imgs/header08.jpg",
                    name: "小胖",
                    say:"可能苹果没有",
                    time:"星期日"
                },
                {
                    img: "imgs/header09.jpg",
                    name: "王兆阳",
                    say:"好",
                    time:"2020/9/1"
                },
                {
                    img: "imgs/header10.jpg",
                    name: "汪永",
                    say:"好吧",
                    time:"2020/9/2"
                },
                {
                    img: "imgs/header11.jpg",
                    name: "三娘",
                    say:"[动画表情]",
                    time:"2020/8/30"
                },
                
                
            ]
        }
    },
    template: `
    <div>
        <div class="title">
            <div class="top">
                <div class="titleName">
                    <p>微信</p>
                </div>
                <div class="topImg">
                     <img src="imgs/chats+.png" class="chatsImg">            
                </div>
            </div>
            <div class="inp">
                <input placeholder="搜索">
            </div>
        </div>
        <div class="middle">
            <div class="middleList" v-for="item in chatList" @click="goChatsDetail">
                <img :src="item.img" class="headerImg">
                <div class="middleListBox">
                    <div class="middleList-container">
                        <span class="chatsName">{{item.name}}</span>
                        <span class="chatsSay">{{item.say}}</span>
                    </div>
                    <div class="chatTime">
                        <span class="middleList-time">{{item.time}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        goChatsDetail(){
            this.$router.push("/chatsDetail")
        }
    }
}
export default Chats