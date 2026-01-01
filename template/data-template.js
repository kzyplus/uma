// ==========================================
// 競馬予想シート データ入力テンプレート
// ==========================================
// このファイルをコピーして、index.htmlの該当箇所に貼り付けてください

// ==========================================
// 【1】馬データ（horses配列）
// ==========================================
// 358行目付近の「const horses = [」以降を置き換え

const horses = [
    // ===== 1番馬 =====
    {
        number: 1,
        name: "馬名を入力",
        score: 40,                    // 総合点（60点満点）
        good: "○",                    // 良馬場適性（◎○△×）
        heavy: "○",                   // 稍重～適性（◎○△×）
        comment: "",                  // 一言コメント
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,                  // "honmei","taikou","ana","kiken",null
        details: {
            pros: [],                 // ["強み1", "強み2", ...]
            cons: [],                 // ["不安点1", "不安点2", ...]
            expect: [],               // ["期待点1", ...]
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  // 12項目評価（各5点満点）
        }
    },
    // ===== 2番馬 =====
    {
        number: 2,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 3番馬 =====
    {
        number: 3,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 4番馬 =====
    {
        number: 4,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 5番馬 =====
    {
        number: 5,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 6番馬 =====
    {
        number: 6,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 7番馬 =====
    {
        number: 7,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 8番馬 =====
    {
        number: 8,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 9番馬 =====
    {
        number: 9,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 10番馬 =====
    {
        number: 10,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 11番馬 =====
    {
        number: 11,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 12番馬 =====
    {
        number: 12,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 13番馬 =====
    {
        number: 13,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 14番馬 =====
    {
        number: 14,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 15番馬 =====
    {
        number: 15,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    },
    // ===== 16番馬 =====
    {
        number: 16,
        name: "馬名を入力",
        score: 40,
        good: "○",
        heavy: "○",
        comment: "",
        jockey: "騎手名",
        trainer: "厩舎名（栗東 or 美浦）",
        blood: "父○○ × 母父△△",
        weight: "57kg",
        badge: null,
        details: {
            pros: [],
            cons: [],
            expect: [],
            scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
        }
    }
    // 出走頭数に応じて削除または追加してください
];

// ==========================================
// 【2】ランキングデータ（rankingData配列）
// ==========================================
// 668行目付近の「const rankingData = [」以降を置き換え
// ★重要：総合点（score）の高い順に並べてください

const rankingData = [
    { rank: 1, number: 1, name: "馬名", score: 60, good: "◎", heavy: "◎", comment: "コメント" },
    { rank: 2, number: 2, name: "馬名", score: 58, good: "○", heavy: "◎", comment: "コメント" },
    { rank: 3, number: 3, name: "馬名", score: 56, good: "○", heavy: "○", comment: "コメント" },
    { rank: 4, number: 4, name: "馬名", score: 54, good: "○", heavy: "○", comment: "コメント" },
    { rank: 5, number: 5, name: "馬名", score: 52, good: "○", heavy: "○", comment: "コメント" },
    { rank: 6, number: 6, name: "馬名", score: 50, good: "○", heavy: "△", comment: "コメント" },
    { rank: 7, number: 7, name: "馬名", score: 48, good: "○", heavy: "○", comment: "コメント" },
    { rank: 8, number: 8, name: "馬名", score: 46, good: "○", heavy: "○", comment: "コメント" },
    { rank: 9, number: 9, name: "馬名", score: 44, good: "○", heavy: "○", comment: "コメント" },
    { rank: 10, number: 10, name: "馬名", score: 42, good: "○", heavy: "○", comment: "コメント" },
    { rank: 11, number: 11, name: "馬名", score: 40, good: "○", heavy: "○", comment: "コメント" },
    { rank: 12, number: 12, name: "馬名", score: 38, good: "○", heavy: "○", comment: "コメント" },
    { rank: 13, number: 13, name: "馬名", score: 36, good: "○", heavy: "○", comment: "コメント" },
    { rank: 14, number: 14, name: "馬名", score: 34, good: "○", heavy: "○", comment: "コメント" },
    { rank: 15, number: 15, name: "馬名", score: 32, good: "○", heavy: "△", comment: "コメント" },
    { rank: 16, number: 16, name: "馬名", score: 30, good: "△", heavy: "△", comment: "コメント" }
    // 出走頭数に応じて削除または追加してください
];

// ==========================================
// 【3】12項目評価の詳細
// ==========================================
// scores配列の各インデックスに対応する評価項目

/*
scores: [
    [0]  着差重視の過去実績  /5点
    [1]  レースレベル        /5点
    [2]  血統（産駒傾向）    /5点
    [3]  コース適性          /5点
    [4]  輸送適性            /5点
    [5]  休み明け実績        /5点
    [6]  脚質と展開相性      /5点
    [7]  枠順と脚質相性      /5点
    [8]  騎手との相性        /5点
    [9]  調教・仕上がり      /5点
    [10] 馬体の状態          /5点
    [11] 厩舎との相性        /5点
]
*/

// ==========================================
// 【4】バッジ（badge）の種類
// ==========================================
/*
"honmei"  → 本命（ピンク色）
"taikou"  → 対抗（ブルー色）
"ana"     → 穴馬（グリーン色）
"kiken"   → 危険な人気馬（オレンジ色）
null      → バッジなし
*/

// ==========================================
// 【5】適性記号
// ==========================================
/*
◎ → 非常に良い
○ → 良い
△ → 微妙
× → 悪い
*/
