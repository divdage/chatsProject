const me ={
    
    template:`
    <div>
        <div class="meIcon-top">
            <img src="imgs/me相机Icon.png" class="camIcon">
        </div>
        <div class="meTop">
            <div class="meHeader" @click="goMeDetail">
                <img src="imgs/header01.jpg">
            </div>
            <div class="meMame">
                <span class="meName">冷血杀手</span>
                <span class="meName-bottom">微信号：zon120</span>
            </div>
            <div class="qrCode">
                <img src="imgs/二维码.png" class="meTopImg">
                <img src="imgs/右箭头.png" class="meTopImg">
            </div>
        </div>
        <div class="meBottom">
            <div>
                <div class="meList">
                    <div class="meListLeft">
                        <img src="imgs/meWatchIcon.png" class="meIcon">
                        <span>Watch 微信</span>
                    </div>
                    <div class="meListRight">
                        <img src="imgs/右箭头.png" class="meTopImg">
                    </div>
                </div>
            <div>
            <div class="meList">
                <div class="meListLeft">
                    <img src="imgs/mepayIcon.png" class="meIcon">
                    <span>支付</span>
                </div>
                <div class="meListRight">
                    <img src="imgs/右箭头.png" class="meTopImg">
                </div>
            </div>
            </div>
            <div class="meList-middle">
                <div class="meList-middle-item">
                    <div class="meList-item-left">
                        <img src="imgs/me收藏Icon.png" class="meIcon"> 
                        <span>收藏</span>
                    </div>
                    <div class="meList-item-right">
                        <img src="imgs/右箭头.png" class="meTopImg">
                    </div>
                </div>
                <div class="meList-middle-item">
                    <div class="meList-item-left">
                        <img src="imgs/me相册Icon.png" class="meIcon"> 
                        <span>相册</span>
                    </div>
                    <div class="meList-item-right">
                        <img src="imgs/右箭头.png" class="meTopImg">
                    </div>
                </div>
                <div class="meList-middle-item">
                    <div class="meList-item-left">
                        <img src="imgs/me卡包Icon.png" class="meIcon"> 
                        <span>卡包</span>
                    </div>
                    <div class="meList-item-right">
                        <img src="imgs/右箭头.png" class="meTopImg">
                    </div>
                </div>
                <div class="meList-middle-item">
                    <div class="meList-item-left">
                        <img src="imgs/me表情Icon.png" class="meIcon"> 
                        <span>表情</span>
                    </div>
                    <div class="meList-item-right">
                        <img src="imgs/右箭头.png" class="meTopImg">
                    </div>
                </div>
                
            </div>
            <div>
                <div class="meList">
                    <div class="meListLeft">
                        <img src="imgs/meSetIcon.png" class="meIcon">
                        <span>设置</span>
                    </div>
                    <div class="meListRight">
                        <img src="imgs/右箭头.png" class="meTopImg">
                    </div>
                </div>
            </div>
        
        </div>
        </div>
    </div>
    `,
    methods:{
        goMeDetail(){
            this.$router.push("/meDetail")
        }
    }
   
    
}
export default me