const finde = {
    data() {
        return {
            findList: [{
                    img: "imgs/findIcon01.png",
                    name: "朋友圈"
                },
                {
                    img: "imgs/findIcon02.png",
                    name: "扫一扫"
                },
                {
                    img: "imgs/findIcon03.png",
                    name: "摇一摇"
                },
                {
                    img: "imgs/findIcon04.png",
                    name: "附近的人"
                },
                {
                    img: "imgs/findIcon05.png",
                    name: "游戏"
                },
                {
                    img: "imgs/findIcon06.png",
                    name: "小程序"
                },
            ]
        }
    },
    template: `
    <div>
        <div class="findTitle">
            <div class="findTop">
                <p class="findTopName">发现</p>
            </div>
        </div>
        <div class="middle">
            <div class="middleList findList" v-for="item in findList" @click="goFindDetail">
                <img :src="item.img" class="headerImg">
                <div class="findListBox">
                    <div class="middleList-container">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        goFindDetail(){
            this.$router.push("/findDetail")
        }
    }
}
export default finde