const chatsDetail={
    template:`
    <div @click="goBack">111</div>
    
    
    `,
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
export default chatsDetail