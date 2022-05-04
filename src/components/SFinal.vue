<template>
<div class="">
    <div class="final-step" v-if="isShow === true">
        <div class="title accept-title">
            <h3>入社手続きの申請ありがとうございました。</h3>
        </div>
        <div class="accept-img">
            <img src="../assets/accept 1.svg" class="w-100" />
        </div>
        <div class="accept-desc">
            <p>申請がありがとうございました。</p>
            <p>入社手続きの承認をお待ちください。</p>
        </div>
        <div class="btn-submit">
            <button class="submit" @click="isShow = !isShow">申請した内容を見る</button>
        </div>
    </div>

    <div class="apply" v-if="isShow === false">
        <div class="form">
            <div class="title">
                <h3>入社手続きの申請をします</h3>
            </div>

            <div class="content">
                <div class="content-title">
                    <img style="width:24px" src="../assets/aaa.png" alt="">
                    <p>ご確認ください</p>
                </div>
                <div class="status">
                    <p>入力ありがとうございました。
                        登録した内容を確認する場合は「戻る」を選択してください。
                        手続きを申請する場合は「申請する」を選択してください。

                    </p>
                </div>
            </div>

            <div class="button">
                <div class="button1">
                    
                    <button @click="submit1" class="button2">戻る</button>
                
              
                    <button @click="submit2" class="button2">申請する</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {
          submit1(){
              this.$emit("reset");
          },
          submit2() {
              alert("Submit thanh cong")
          }
    }
  

}
</script>

<style scoped>
.content-title{
    display: flex
}
.final-step {
    padding-top: 1.57rem;
    margin: 0 auto;
    max-width: 51rem;
    text-align: center;
}
.submit{
    width: 20%;
    font-size: 13px;
    height:50px;
    text-align: center;
    margin:0 auto
}
.accept-img {
    padding-top: 1.43rem;
}

.accept-img {
    max-width: 9.14rem;
    max-height: 9.14rem;
    margin: 0 auto;
}
button{
        height: 33px;
   
    margin-left: 15px
}
.accept-title {
    text-align: center;
}
.content{
        background: antiquewhite;
    padding: 6px;
}

.accept-desc {
    padding-top: 2.3rem;
}

.accept-desc p {
    font-size: 1.3rem;
    line-height: 2.14rem;
}

.btn-submit {
    margin-top: 2.3rem;
    margin-bottom: 3.57rem;
    color: blue;
}

.btn-submit button {

    border: 1px solid #007bc3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0.857rem 1.14rem;
}

.button2 {
    width: 24%;
    font-size: 16px;
}
.button1{
    position: relative;
    right: -166px;
    top: 15px;
}
.apply{
        margin: 0 auto;
    width: 30%;
    height: 284px;
   
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
.form{
    padding:20px
}
</style>
