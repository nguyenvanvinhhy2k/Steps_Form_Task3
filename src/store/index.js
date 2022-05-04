import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        infos: [
            { id: 1, title: "", detail: "姓", type: "text", isActive: true, none: true },
            { id: 2, title: "", detail: "名", type: "text", isActive: true, none: true },
            { id: 3, title: "", detail: "姓", type: "text", isActive: true, none: true },
            { id: 4, title: "", detail: "セイ", type: "text", isActive: true, none: true },
            { id: 5, title: "", detail: "メイ", type: "text", isActive: true, none: true },
            {
                id: 6,
                title: "",
                detail: "姓（ローマ字）",
                type: "text",
                isActive: true,
                none: true,
            },
            { id: 7, title: "", detail: "性別", type: "check", isActive: true, none: true },
            {
                id: 8,
                title: "",
                detail: "生年月日",
                type: "date",
                isActive: true,
                none: true,
            },
            {
                id: 9,
                title: "",
                detail: "ビジネスネーム",
                type: "text",
                desc: "旧姓を利用する等の場合に入力をしてください。",
                isActive: false,
                none: false,
            },
        ],
        educations: [{
                id: 1,
                title: "",
                detail: "入学年月日",
                type: "date",
                isActive: true,
                none: true,
            },
            {
                id: 2,
                title: "",
                detail: "卒業年月日",
                type: "date",
                isActive: true,
                none: true,
            },
            {
                id: 3,
                title: "",
                detail: "卒業年月日",
                type: "drop",
                isActive: true,
                none: false,
            },
            {
                id: 4,
                title: "",
                detail: "卒業年月日",
                type: "text",
                isActive: true,
                none: true,
            },
            {
                id: 5,
                title: "",
                detail: "卒業年月日",
                type: "text",
                isActive: true,
                none: false,
            },
        ],
        pensions: [{
                id: 1,
                title: "",
                detail: "基礎年金番号",
                type: "text",
                isActive: true,
                none: true,
            },
            {
                id: 2,
                title: "",
                detail: "雇用保険被保険者番号",
                desc: "番号をお持ちの方は必ず入力してください",
                type: "text",
                isActive: true,
                none: false,
            },
            {
                id: 3,
                title: "",
                detail: "前職会社名",
                desc: "雇用保険番号が不明の場合は入力をしてください",
                type: "text",
                isActive: true,
                none: false,
            },
            {
                id: 4,
                title: "",
                detail: "資格証明書類（年金手帳",
                desc: "年金手帳の写真を添付してください",
                type: "upload",
                isActive: true,
                none: false,
            },
            {
                id: 5,
                title: "",
                detail: "資格署名書類（雇用保険被保険者証",
                desc: "雇用保険被保険者証の写真を添付してください",
                type: "upload",
                isActive: true,
                none: false,
            },
            {
                id: 6,
                title: "",
                detail: "確定拠出年金の利用希望",
                type: "check",
                isActive: true,
                none: false,
            },
        ],
        payrolls: [{
                id: 1,
                title: "",
                detail: "金融機関をフリーワードで検索",
                desc: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
                type: "search",
                isActive: true,
                none: true,
            },
            {
                id: 2,
                title: "",
                detail: "支店名をフリーワードで検索",
                desc: "｢しんじゅく｣や｢しぶや｣などの一単語のみで検索できます",
                type: "search",
                isActive: false,
                none: true,
            },
            {
                id: 3,
                title: "",
                detail: "口座番号（半角）",

                type: "text",
                isActive: true,
                none: true,
            },
            {
                id: 4,
                title: "",
                detail: "口座名義（カタカナ）",
                desc: "本人名義に限ります",
                type: "text",
                isActive: true,
                none: true,
            },
        ],
        residences: [{
                id: 1,
                title: "",
                type: "checkip",
                isActive: true,
                none: false,
            },
            {
                id: 2,
                title: "",
                detail: "姓（ローマ字）",
                type: "text",
                isActive: false,
                none: true,
            },
            {
                id: 3,
                title: "",
                detail: "名（ローマ字）",

                type: "text",
                isActive: false,
                none: true,
            },
            {
                id: 4,
                title: "",
                detail: "姓（カナ）",
                type: "text",
                isActive: false,
                none: true,
            },
            {
                id: 5,
                title: "",
                detail: "名（カナ）",
                type: "text",
                isActive: false,
                none: true,
            },
            {
                id: 6,
                title: "",
                detail: "名（カナ）",
                type: "text",
                isActive: false,
                none: true,
            },
            {
                id: 7,
                title: "",
                detail: "国籍",
                type: "drop",
                isActive: false,
                none: true,
            },
            {
                id: 8,
                title: "",
                detail: "在留資格",
                type: "drop",
                isActive: true,
                none: false,
            },
            {
                id: 9,
                title: "",
                detail: "在留期間（満了日）",
                type: "date",
                isActive: true,
                none: false,
            },
            {
                id: 10,
                title: "",
                detail: "資格外活動許選択してください",
                type: "drop",
                isActive: true,
                none: false,
            },
            {
                id: 11,
                title: "",
                detail: "就労区分",
                type: "drop",
                isActive: true,
                none: false,
            },
            {
                id: 12,
                title: "",
                detail: "在留カード番号（半角）",
                type: "text",
                isActive: false,
                none: true,
            },
            {
                id: 13,
                title: "",
                detail: "在留カードの写真（表）",
                desc: "カードの表の写真を添付してください。",
                type: "upload",
                isActive: true,
                none: false,
            },
            {
                id: 14,
                title: "",
                detail: "在留カードの写真（裏）",
                desc: "カードの裏の写真を添付してください。",
                type: "upload",
                isActive: true,
                none: false,
            },
        ],
        address: [{
                id: 1,
                title: "",
                detail: "姓（ローマ字）",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "姓（ローマ字）",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "郵便番号",

                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "都道府県",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "市区町村",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "番地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 7,
                title: "",
                detail: "建物名称・部屋番号",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 8,
                title: "",
                detail: "電話番号（半角）",
                desc: "自宅電話番号が無い場合、携帯電話番号のみ登録してください。",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 9,
                title: "",
                detail: "携帯電話番号（半角）",
                type: "text",
                none: true,
                isActive: true,
            },
        ],
        residents: [{
                id: 1,
                title: "",
                detail: "世帯主区分",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "住居区分",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "郵便番号",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "市区町村",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "番地",
                desc: "自宅電話番号が無い場合、携帯電話番号のみ登録してください。",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "建物名称・部屋番号",
                type: "text",
                none: false,
                isActive: true,
            },
        ],
        informations: [{
                id: 1,
                title: "",
                detail: "続柄",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "姓",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "名",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "セイ",

                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "メイ",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "姓（ローマ字）",

                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 7,
                title: "",
                detail: "名（ローマ字）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 8,
                title: "",
                detail: "性別",

                type: "check",
                none: true,
                isActive: true,
            },
            {
                id: 9,
                title: "",
                detail: "生年月日",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 10,
                title: "",
                detail: "同居/別居",
                desc: "別居を選択すると住所の入力が必須になります",
                type: "check",
                none: true,
                isActive: true,
            },
            {
                id: 11,
                title: "",
                detail: "郵便番号",
                type: "date1",
                none: true,
                isActive: true,
            },
            {
                id: 12,
                title: "",
                detail: "都道府県",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 13,
                title: "",
                detail: "市区町村",

                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 14,
                title: "",
                detail: "番地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 15,
                title: "",
                detail: "建物名称・部屋番号",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 16,
                title: "",
                detail: "勤務先・学校名",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 17,
                title: "",
                detail: "職業区分",
                type: "drop",
                none: false,
                isActive: true,
            },
            {
                id: 18,
                title: "",
                detail: "職業区分でその他を選択の理由",
                desc: "その他を選択した方は、詳細内容を入力してください。学生を選択した方は、大学○年生など、具体的に入力をお願いいたします",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 19,
                title: "",
                detail: "健康保険扶養区分",
                type: "drop",
                none: false,
                isActive: true,
            },
        ],
        commutings: [{
                id: 1,
                title: "",
                detail: "通勤手段",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "出発地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "到着地",
                type: "text",
                none: true,
                isActive: true,
            },
        ],
        finals: [{
                id: 1,
                title: "",
                detail: "入学年月日",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "卒業年月日",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "学歴区分",
                type: "drop",
                none: false,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "学校名",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "入学年月日",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "卒業年月日",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 7,
                title: "",
                detail: "学歴区分",
                type: "drop",
                none: false,
                isActive: true,
            },
            {
                id: 8,
                title: "",
                detail: "学校名",
                type: "text",
                none: true,
                isActive: true,
            },
        ],
        insurances: [{
                id: 1,
                title: "",
                detail: "基礎年金番号",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "雇用保険被保険者番号",
                desc: "番号をお持ちの方は必ず入力してください",
                type: "text",
                none: true,
                isActive: false,
            },
            {
                id: 3,
                title: "",
                detail: "前職会社名",
                desc: "雇用保険番号が不明の場合は入力をしてください",
                type: "text",
                none: true,
                isActive: false,
            },
            {
                id: 4,
                title: "",
                detail: "学校名",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "資格証明書類（年金手帳）",
                desc: "年金手帳の写真を添付してください",
                type: "box",
                none: true,
                isActive: false,
            },
            {
                id: 6,
                title: "",
                detail: "資格署名書類（雇用保険被保険者証）",
                desc: "年金手帳の写真を添付してください",
                type: "box",
                none: true,
                isActive: false,
            },
            {
                id: 7,
                title: "",
                detail: "確定拠出年金の利用希望",
                type: "check",
                none: true,
                isActive: false,
            },
        ],
        accounts: [{
                id: 1,
                title: "",
                detail: "学校名",
                type: "border",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "金融機関をフリーワードで検索",
                type: "border",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "普通",

                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "口座名義（カタカナ）",
                desc: "本人名義に限ります",
                type: "text",
                none: true,
                isActive: true,
            },
        ],
        cards: [{
                id: 1,
                title: "",

                type: "check",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "姓（ローマ字）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "名（ローマ字）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "姓（カナ）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "名（カナ）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "名（カナ）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 7,
                title: "",
                detail: "国籍",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 8,
                title: "",
                detail: "在留資格",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 9,
                title: "",
                detail: "在留資格",
                type: "date",
                none: false,
                isActive: true,
            },
            {
                id: 10,
                title: "",
                detail: "資格外活動許可",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 11,
                title: "",
                detail: "就労区分",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 12,
                title: "",
                detail: "在留カード番号（半角）",
                type: "text",
                none: true,
                isActive: true,
            },
        ],
        registers: [{
                id: 1,
                title: "",
                type: "check",
                none: false,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "郵便番号",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "都道府県",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "市区町村",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "番地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "建物名称・部屋番号",
                type: "text",
                none: false,
                isActive: false,
            },
        ],
        contacts: [{
                id: 1,
                title: "",
                detail: "関係姓",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "姓",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "セイ",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "メイ",
                detail: "市区町村",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "郵便番号",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "都道府県",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 7,
                title: "",
                detail: "市区町村",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 8,
                title: "",
                detail: "番地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 9,
                title: "",
                detail: "建物名称・部屋番号",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 10,
                title: "メイ",
                detail: "電話番号（半角）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 11,
                title: "メイ",
                detail: "携帯電話番号（半角）",
                type: "text",
                none: true,
                isActive: true,
            },
        ],
        familys: [{
                id: 1,
                title: "",
                detail: "関係姓",
                type: "drop",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "姓",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "セイ",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "メイ",
                detail: "姓（ローマ字）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "姓（ローマ字）",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "都道府県",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 7,
                title: "",
                detail: "市区町村",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 8,
                title: "",
                detail: "番地",
                type: "check",
                none: true,
                isActive: true,
            },
            {
                id: 9,
                title: "",
                detail: "生年月日",
                type: "date",
                none: true,
                isActive: true,
            },
            {
                id: 10,
                title: "メイ",
                detail: "同居/別居",
                desc: "別居を選択すると住所の入力が必須になります",
                type: "check",
                none: true,
                isActive: true,
            },
            {
                id: 11,
                title: "メイ",
                detail: "同居/別居",

                type: "date1",
                none: true,
                isActive: true,
            },
            {
                id: 12,
                title: "メイ",
                detail: "都道府県",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 13,
                title: "",
                detail: "市区町村",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 14,
                title: "",
                detail: "番地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 15,
                title: "",
                detail: "建物名称・部屋番号",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 16,
                title: "",
                detail: "勤務先・学校名",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 17,
                title: "",
                detail: "市区町村",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 18,
                title: "",
                detail: "番地",
                type: "drop",
                none: false,
                isActive: true,
            },
            {
                id: 19,
                title: "",
                detail: "建物名称・部屋番号",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 20,
                title: "",
                detail: "勤務先・学校名",
                type: "drop",
                none: false,
                isActive: true,
            },
        ],
        works: [{
                id: 1,
                title: "",
                detail: "通勤手段",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "出発地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "到着地",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 4,
                title: "",
                detail: "通勤手段",
                type: "textmax",
                none: true,
                isActive: true,
            },
            {
                id: 5,
                title: "",
                detail: "出発地",
                type: "textmin",
                none: true,
                isActive: true,
            },
            {
                id: 6,
                title: "",
                detail: "到着地",
                type: "textmin",
                none: true,
                isActive: true,
            },
            {
                id: 7,
                title: "",
                detail: "距離（高速優先）",
                type: "textmin",
                none: false,
                isActive: true,
            },
            {
                id: 8,
                title: "",
                detail: "時間（高速優先）",
                type: "textmin",
                none: false,
                isActive: true,
            },
            {
                id: 9,
                title: "",
                detail: "高速料金",
                type: "textmin",
                none: false,
                isActive: true,
            },
            {
                id: 10,
                title: "",
                detail: "通勤費/実費：生通勤の際に自家用車を利用する場合は",
                type: "checkip",
                none: false,
                isActive: true,
            },
            {
                id: 11,
                title: "",
                detail: "高速道路で通勤する理由",
                type: "textarea",
                none: true,
                isActive: false,
            },
            {
                id: 12,
                title: "",
                detail: "高速料金",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 13,
                title: "",
                detail: "高速料金",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 14,
                title: "",
                detail: "高速料金",
                type: "textarea",
                none: true,
                isActive: true,
            },
            {
                id: 15,
                title: "",
                detail: "通勤費/実費：生通勤の際に自家用車を利用する場合は",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 16,
                title: "",
                detail: "高速料金",
                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 17,
                title: "",
                type: "checkip",
                none: true,
                isActive: true,
            },
            {
                id: 18,
                title: "",

                type: "text",
                none: false,
                isActive: true,
            },
            {
                id: 19,
                title: "",
                detail: "備考",
                type: "textarea",
                none: false,
                isActive: true,
            },
        ],
        business: [{
                id: 1,
                title: "",
                detail: "自家用車の通勤許可を申請しますか？",
                type: "check",
                none: true,
                isActive: true,
            },
            {
                id: 2,
                title: "",
                detail: "申請事由",
                des: "※その他を選択した場合は、必ず理由を入力してください';[p",
                type: "text",
                none: true,
                isActive: true,
            },
            {
                id: 3,
                title: "",
                detail: "申請事由（その他）を選択した場合は理由",
                type: "textarea",
                none: true,
                isActive: false,
            },
            {
                id: 4,
                title: "",
                detail: "高速道路は原則利用不可。上長が認めた場合にかぎ",
                type: "textarea",
                none: true,
                isActive: false,
            },
            {
                id: 5,
                title: "",
                detail: "車両車検証コピー",
                desc: "車両車検証のコピーを添付してください",
                type: "box",
                none: true,
                isActive: false,
            },
            {
                id: 6,
                title: "",
                detail: "到着地",
                desc: "運転免許証（両面）のコピーを添付してください",
                type: "box",
                none: true,
                isActive: false,
            },
            {
                id: 7,
                title: "",
                detail: "任意保険の保険証コピー",
                desc: "任意保険の保険証のコピーを添付してください",
                type: "box",
                none: true,
                isActive: false,
            },

        ],

        users: [],
        search: "",
        filterUsers: [],
    },
    getters: {
        getInfos(state) {
            return state.infos;
        },
        getEducations(state) {
            return state.educations;
        },
        getPensions(state) {
            return state.pensions;
        },
        getPayrolls(state) {
            return state.payrolls;
        },
        getResidences(state) {
            return state.residences;
        },
        getAddress(state) {
            return state.address;
        },
        getResidents(state) {
            return state.residents;
        },
        getRegisters(state) {
            return state.registers;
        },
        getContacts(state) {
            return state.contacts;
        },
        getFamilys(state) {
            return state.familys;
        },
        getWorks(state) {
            return state.works;
        },
        getAccounts(state) {
            return state.accounts;
        },
        getCards(state) {
            return state.cards;
        },
        getCommutings(state) {
            return state.commutings;
        },
        getFinals(state) {
            return state.finals;
        },
        getInformations(state) {
            return state.informations;
        },
        getInsurances(state) {
            return state.insurances;
        },
        getBusiness(state) {
            return state.business;
        },
        users(state) {
            return state.users;
        },
        getSearch(state) {
            return state.search;
        },
        getFilterUser(state) {
            return state.filterUsers;
        },
    },
    actions: {
        setInfos({ state }, value) {
            let index = state.infos.findIndex(field => {
                return field.id === value.id;
            });
            state.infos[index].title = value.title;
        },
        setEducations({ state }, value) {
            let index = state.educations.findIndex(field => {
                return field.id === value.id;
            });
            state.educations[index].title = value.title;
        },
        setPensions({ state }, value) {
            let index = state.pensions.findIndex(field => {
                return field.id === value.id;
            });
            state.pensions[index].title = value.title;
        },
        setPayrolls({ state }, value) {
            let index = state.payrolls.findIndex(field => {
                return field.id === value.id;
            });
            state.payrolls[index].title = value.title;
        },
        setResidences({ state }, value) {
            let index = state.residences.findIndex(field => {
                return field.id === value.id;
            });
            state.residences[index].title = value.title;
        },
        setAddress({ state }, value) {
            let index = state.address.findIndex(field => {
                return field.id === value.id;
            });
            state.address[index].title = value.title;
        },
        setResidents({ state }, value) {
            let index = state.residents.findIndex(field => {
                return field.id === value.id;
            });
            state.residents[index].title = value.title;
        },
        setRegisters({ state }, value) {
            let index = state.registers.findIndex(field => {
                return field.id === value.id;
            });
            state.registers[index].title = value.title;
        },
        setContacts({ state }, value) {
            let index = state.contacts.findIndex(field => {
                return field.id === value.id;
            });
            state.contacts[index].title = value.title;
        },
        setFamilys({ state }, value) {
            let index = state.familys.findIndex(field => {
                return field.id === value.id;
            });
            state.familys[index].title = value.title;
        },
        setWorks({ state }, value) {
            let index = state.works.findIndex(field => {
                return field.id === value.id;
            });
            state.works[index].title = value.title;
        },
        setBusiness({ state }, value) {
            let index = state.business.findIndex(field => {
                return field.id === value.id;
            });
            state.business[index].title = value.title;
        },
        setCommutings({ state }, value) {
            let index = state.commutings.findIndex(field => {
                return field.id === value.id;
            });
            state.commutings[index].title = value.title;
        },
        getUsers({ commit }) {
            axios
                .get("https://provinces.open-api.vn/api/?depth=2")
                .then((repon) => {
                    commit("setUsers", repon.data);
                    commit("setFilterUsers", repon.data);
                })
                .catch((e) => {
                    this.errors.push(e);
                });
        },
        filterSearch({ commit }, value) {
            commit("filterUsers", value);
        },
    },
    mutations: {
        // setInfos(state, info) {
        //     state.infos.title = info;
        // },
        setUsers(state, users) {
            state.users = users;
        },
        setFilterUsers(state, users) {
            state.filterUsers = users;
        },
    },
});