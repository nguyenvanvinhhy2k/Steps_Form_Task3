<template>
  <div class="first-step">
    <form action="">
      <div class="form-1">
        <div class="">
          <h3 style="padding: 10px; margin: 0">雇用契約期間の定め</h3>
          <div class="inpt-1">
            <p>契約期間の定め：なし</p>
          </div>
        </div>
      </div>

      <div class="form-2">
        <h4 style="padding: 10px; margin: 0">勤務地</h4>
        <form action="" style="height: 230px">
          <div class="mt-1" v-for="(i, index) in location" :key="index">
            <label for="">{{ i.label }}</label>
            <input
              type="text"
              placeholder="テキストテキストテキストテキストテキストテキスト"
            />
          </div>
        </form>
      </div>

      <div class="form-2">
        <h3 style="padding: 10px; margin: 0">勤務条件</h3>
        <form action="" style="height: 230px">
          <div class="mt-1">
            <label for="">テキストテ</label>
            <input type="text" placeholder="固定勤務" />
          </div>

          <div class="mt-1">
            <p>勤務開始時間 09:00 勤務終了時間: 18:00 休憩時間120分</p>
            <p>1週間の勤務日数 1ヶ月平均5日 休日：土日祝日、年末年始</p>
          </div>

          <div class="mt-1">
            <p>所定労:1日8時間所定労働時間1週間平均: 40時間</p>
            <p>労働時間選択区分：40時間</p>
          </div>
        </form>
      </div>

      <div class="form-3" style="min-height: 760px">
        <h3 style="padding: 10px; margin: 0">報酬条件</h3>
        <form action="" style="height: 230px">
          <div class="mt-1">
            <p>等級</p>
            <p>1等級</p>
          </div>

          <div class="mt-1">
            <p>基本給: 200,000円 年齢: 200,000円 職能給: 200,000円</p>
            <p>調整給: 200,000円 調整給1: 200,000円 調整給: 200,000円</p>
          </div>
          <h3 style="padding: 10px; margin: 0">手当</h3>
          <div class="mt-1">
            <p>ライフプラン手当: 200,000円</p>
          </div>
          <div class="mt-1">
            <p>役職手当: 200,000円 役職手当2: 200,000円 役職手当3: 200,000円</p>
          </div>
          <div class="mt-1">
            <p>
              資格手当: 200,000円 住宅地域手当: 200,000円 管理薬剤師手当:
              200,000円
            </p>
          </div>
          <div class="mt-1">
            <p>職務手当: 200,000円 職務手当2: 200,000円 職務手当3: 200,000円</p>
          </div>
          <div class="mt-1">
            <p>ブロック手当:200,000円 フィールドマネジャー手当: 200,000円</p>
          </div>
          <div class="mt-1">
            <p>単身赴任手当: 200,000円 社員区分手当: 200,000円</p>
          </div>
          <div class="mt-1">
            <label for="">合計支給額</label>
            <input type="text" placeholder="200,000円" />
          </div>
        </form>
      </div>

      <div class="form-2">
        <h3 style="padding: 10px; margin: 0">賃金の締日・支払日</h3>
        <form action="" style="height: 80px">
          <div class="mt-1">
            <label for="">テキストテ</label>
            <p>賃金締日：毎月末日 賃金支払日: 当月25日</p>
          </div>
        </form>
      </div>

      <div class="form-2" style="height: 320px">
        <h3 style="padding: 10px; margin: 0">制度</h3>
        <form action="" style="height: 80px">
          <div class="mt-1">
            <label for="">テキストテ</label>
            <p>昇給：あり 賞与：あり 退職金：あり</p>
          </div>
          <div class="mt-1">
            <label for="">テキストテ</label>
            <p>健康保険：加入する 厚生年金保険：加入する 雇用保険：加入する</p>
          </div>
          <div class="mt-1">
            <label for="">テキストテ</label>
            <p>定年制：あり 再雇用制度：ある 契約の更新: あり</p>
          </div>
        </form>
      </div>

      <div class="form-2" style="height: 700px">
        <h3 style="padding: 10px; margin: 0">誓約書</h3>
        <form action="" style="height: 80px">
          <div class="mt-1">
            <p>
              １ 私は アイングループ（以下 「 会社 」
              という。）の就業規則等の諸規則・
              諸規定を遵守し、誠実に職務に従事いたします。
            </p>
            <p>
              ２ 履歴書およびその他の提出書類の記載事項は事実に相違ありません。
            </p>
            <p>３ 貴社の社員としての体面を汚すような行為はいたしません。</p>
            <p>
              ４ 会社 の業務
              に関連して知りえた個人情報、企業情報（取引先・患者様・ お客様
              に関する情報、人事・財務・関連会社・紛争に関する情報、その他会
              社が秘密として指定する情報を含む。）、については、在職中はもとよりの
              こと、会社退職後であっても会社の許可なくして自ら使用し、又は第三者に
              開示するなど漏洩いたしません。
            </p>
            <p>
              ５
              会社在職中、私が保管・作成・従事を命じられた会社の個人情報・諸文書・
              資料・帳簿等（フロッピー、ＭＯその他記録媒体の如何を問わない。）は、
              情報管理者の監督のもと、責任をもって保管し、第三者に譲渡・漏洩せず、
              会社退職時には、これら総てを会社に返還いたします。
            </p>
            <p>
              ６
              職務中に知り得た第三者の個人情報につき、その情報管理者の承諾なくして
              自ら使用し、又は第三者に開示・漏洩いたしません。
            </p>
            <p>
              ７
              故意または重大な過失により貴社に損害を及ぼしたときは、その損害につい
              て賠償の責任を負います。
            </p>
          </div>
          <div class="form-2">
            <h3 class="h3-1">必須</h3>
            <form action="" style="height: 80px">
              <div class="mt-1" style="display: flex">
                <input
                  style="width: 20px; height: 20px; margin-right: 12px"
                  type="checkbox"
                  v-model="checkbox"
                  @change="$v.checkbox.$touch()"
                  @blur="$v.checkbox.$touch()"
                />
                <p>賃金締日：毎月末日 賃金支払日: 当月25日</p>
              </div>
              <div class="eror">
                <span style="color: red" v-if="$v.checkbox.$error"
                  >Please fill the check</span
                >
              </div>
            </form>
          </div>
          <div class="form-2" style="height: 100px; margin: 25px auto">
            <form action="" style="height: 80px">
              <div class="mt-2">
                <img
                  style="margin-right: 16px"
                  src="../assets/chat-info.svg"
                  alt=""
                />
                <label for=""
                  >雇用契約や入社手続きについて
                  ご不明点はお問い合わせください</label
                >
              </div>
            </form>
          </div>
          <div class="title-button">
            <p>入力ありがとうございました。</p>
            <p>続けて扶養控除申告の入力をお願いいたします。</p>
          </div>
          <div class="form-2" style="height: 60px">
            <button @click.prevent="submit">入社手続きの入力に進む</button>
          </div>
        </form>
      </div>
    </form>
  </div>
</template>

<script>
import { sameAs } from "vuelidate/lib/validators";

export default {
  name: "FirstStep",
  data() {
    return {
      checkbox: null,
      location: [
        {
          label: "事業所名",
        },
        {
          label: "事業所在地",
        },
        {
          label: "仕事内容",
        },
      ],
      
    };
  },
 validations: {
    checkbox: {
      sameAs: sameAs(() => true),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.checkbox.$error) {
        return;
      } else {
        this.$emit("nextStep");
      }
    },
  },
};
</script>

<style scoped>
.inpt-1 {
  background: #fff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.57rem 0.71rem;
  width: 95%;
  margin: 0 auto;
}
input {
  border: none;
  width: 100%;
  font-size: 1rem;
  line-height: 1rem;
  color: #333;
}
.h3-1 {
  margin-left: 15px;
  width: 42px;
  background: red;
  color: white;
  padding: 2px;
  border-radius: 3px;
  font-weight: 700;
}
button {
  width: 100%;
  border: none;
  height: 60px;
  margin-bottom: 60px;
  cursor: pointer;
  background: #b2b1ff;
  color: white;
  font-size: 20px;
  font-weight: 700;
}
.mt-2 {
  display: flex;
  padding: 20px;
}
.mt-1 {
  background: #fff;
  border: 1px solid #dcdcdc;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.57rem 0.71rem;
  width: 95%;
  margin: 5px auto;
}
.form-1 {
  height: 111px;
  width: 500px;
  margin: 6px auto;
  background-color: #f1f2f7;
}
.eror {
  font-size: 12px;
  padding: 5px 18px;
}
.form-3 {
  width: 500px;
  margin: 6px auto;
  background-color: #f1f2f7;
}
.first-step {
  margin-top: 20px;
  padding-bottom: 14px;
}
p {
  margin: 0;
}
</style>
