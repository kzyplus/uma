# 競馬レース総合評価シート - AIデベロッパー向け指示書

## 📋 プロジェクト概要
競馬レースの総合評価を視覚化するレスポンシブWebページを作成する。
PC/スマートフォンの両方で見やすく、グラフやチャートを活用した直感的なUIを実装する。

---

## 🎯 目的
同じフォーマットの競馬総合評価シートを、データを変えるだけで複数のレース向けに作成できるテンプレートシステムを構築する。

---

## 🛠️ 技術スタック
- **HTML5**: セマンティックな構造
- **Tailwind CSS**: CDN経由で読み込み（`https://cdn.tailwindcss.com`）
- **Chart.js**: グラフ描画（`https://cdn.jsdelivr.net/npm/chart.js`）
- **Font Awesome**: アイコン（`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css`）
- **Vanilla JavaScript**: データバインディングと動的レンダリング

---

## 📊 データ構造

### 基本情報
```javascript
const raceInfo = {
  raceName: "2025年ホープフルステークス 総合評価シート",
  date: "2025年12月27日（土）",
  location: "中山競馬場",
  course: "芝2000m・右回り（内回り）",
  grade: "GI",
  numHorses: 16,
  trackCondition: "良",
  weather: "曇"
};
```

### コース特徴
```javascript
const courseFeatures = {
  straight: "310m（短い）",
  elevation: "5.3m（急坂あり）",
  favoredStyle: "先行馬有利",
  requiredAbility: "パワー・スタミナ・器用さ",
  notes: "東京との違い: 真逆の特性"
};
```

### 評価項目（12項目）
```javascript
const evaluationItems = [
  "着差重視の過去実績",
  "レースレベル",
  "血統（産駒傾向）",
  "コース適性",
  "輸送適性",
  "休み明け実績",
  "脚質と展開相性",
  "枠順と脚質相性",
  "騎手との相性",
  "調教・仕上がり",
  "馬体の状態",
  "厩舎との相性"
];
```

### 馬データ構造（16頭分）
```javascript
const horses = [
  {
    number: 1,              // 馬番
    name: "ノチェセラーダ",  // 馬名
    score: 40,              // 総合点（基本60点満点＋追い切り補正＋新馬戦加点）
    good: "○",              // 良馬場適性（◎○△×）
    heavy: "○",             // 稍重〜重馬場適性（◎○△×）
    comment: "2連勝中、最内枠",  // 一言コメント
    jockey: "川田将雅",      // 騎手名
    trainer: "斉藤崇史厩舎（栗東）",  // 厩舎
    blood: "父サートゥルナーリア × 母父スウェプトオーヴァーボード",  // 血統
    weight: "57kg",         // 斤量
    badge: null,            // バッジ（"honmei"/"taikou"/"ana"/"kiken"/null）
    details: {
      pros: [               // 良い点（配列）
        "2連勝中の勢い",
        "最内枠で距離ロスなし"
      ],
      cons: [               // 不安材料（配列）
        "相手強化、G1では実績不足",
        "初中山、長距離輸送初"
      ],
      expect: "先行力を活かして粘り込み",  // 期待点
      scores: [4,3,4,3,3,3,4,5,3,3,3,3]     // 12項目の評価（各0-5点）
    }
  },
  // ... 以下15頭分のデータ
];
```

### ランキングデータ
```javascript
const rankingData = [
  {
    rank: 1,
    number: 11,
    name: "フォルテアンジェロ",
    score: 56,
    good: "◎",
    heavy: "◎",
    comment: "対抗・中山勝ち経験＋追い切りS"
  },
  // ... 以下15頭分
];
```

### 最終結論
```javascript
const finalConclusion = {
  honmei: { number: 4, name: "ロブチェン", reason: "追い切りS〜A+評価で状態抜群", concern: "キャリア1戦のみ" },
  taikou: { number: 11, name: "フォルテアンジェロ", reason: "中山実績◎＋追い切りS", concern: "重賞実績なし" },
  ana: { number: 15, name: "アスクエジンバラ", reason: "追い切り最高評価SSS〜S", concern: "外枠不利" },
  kiken: [
    { number: 12, name: "アンドゥーリル", reason: "東京実績のみ→中山適性不安" },
    { number: 13, name: "ショウナンガルフ", reason: "外枠＋休み明け14週" }
  ]
};
```

### 展開予測
```javascript
const raceStrategy = {
  pace: "ミドル〜やや速めのペース想定",
  favoredStyle: "先行・好位差し",
  keyHorses: "逃げ馬次第で差し馬の浮上/届くかは展開次第"
};
```

### 買い目参考
```javascript
const bettingSuggestions = {
  tansho: ["4番ロブチェン"],
  fukusho: ["4番ロブチェン", "15番アスクエジンバラ"],
  umaren: ["4-11"],
  wide: ["4-15", "11-15"],
  sanrenpuku: ["4-11-15"],
  sanrentan: ["4→11→15"],
  himo: ["3番ジャスティンビスタ", "6番バドリナート", "2番アーレムアレス"],
  keshi: ["12番アンドゥーリル", "13番ショウナンガルフ"]
};
```

---

## 🎨 UI/UX要件

### カラーパレット（落ち着いたグレー・ブルー系）
```css
本命: #e85d75（落ち着いた赤）
対抗: #4a90e2（落ち着いた青）
穴馬: #50c878（落ち着いた緑）
危険馬: #f5a623（落ち着いたオレンジ）
基調色: スレートグレー（#64748b）
背景: ライトグレー（#f8fafc）
```

### レスポンシブデザイン
```
PC（1024px以上）: 3カラムグリッド
タブレット（768-1023px）: 2カラムグリッド
スマートフォン（767px以下）: 1カラム、横スクロールテーブル
```

### セクション構成
1. **ヘッダー**: レース名、開催日、アイコン
2. **基本情報カード**: 5カラムグリッド（レース名/開催日/競馬場/コース/グレード/出走頭数/馬場状態/天候）
3. **コース特徴**: カード形式で特徴を列挙
4. **最終結論**: 本命・対抗・穴馬・危険馬をバッジ付きで表示
5. **総合評価ランキング**: 
   - 棒グラフ（Chart.js）: 上位10頭の総合点
   - テーブル: 全16頭の詳細データ
6. **個別馬評価**: 
   - フィルターボタン（全て/上位馬/穴馬候補）
   - 各馬カード（レーダーチャート付き）
7. **展開予測**: カード形式
8. **買い目参考**: カード形式
9. **注意事項**: カード形式

---

## 📈 グラフ仕様

### 棒グラフ（総合評価ランキング）
```javascript
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['11番 フォルテアンジェロ', '4番 ロブチェン', ...],
    datasets: [{
      label: '総合評価',
      data: [56, 54, 48, ...],
      backgroundColor: [
        'rgba(232, 93, 117, 0.8)',  // 1位: 本命色
        'rgba(80, 200, 120, 0.8)',  // 2位: 穴馬色
        'rgba(74, 144, 226, 0.8)',  // 3位: 対抗色
        ...
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  }
});
```

### レーダーチャート（個別馬評価）
```javascript
new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['着差重視実績', 'レースレベル', '血統', ...],
    datasets: [{
      label: '評価',
      data: [4, 3, 4, 5, 5, 3, 4, 3, 4, 5, 3, 5],
      backgroundColor: 'rgba(100, 116, 139, 0.2)',
      borderColor: 'rgba(100, 116, 139, 0.8)'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 5,
        ticks: { stepSize: 1 }
      }
    }
  }
});
```

---

## 🔧 実装手順

### Step 1: HTMLの基本構造を作成
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ホープフルステークス2025 総合評価シート</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
</head>
<body class="bg-gray-50 font-sans">
  <!-- コンテンツ -->
</body>
</html>
```

### Step 2: データ定義
- JavaScriptで上記のデータ構造をすべて定義
- HTMLの`<script>`タグ内にインライン記述

### Step 3: 動的レンダリング関数を実装
```javascript
// 基本情報のレンダリング
function renderBasicInfo() { ... }

// ランキングチャートのレンダリング
function renderRankingChart() { ... }

// 個別馬カードのレンダリング
function renderHorseCards(filter = 'all') { ... }

// レーダーチャートのレンダリング
function createRadarChart(canvasId, scores) { ... }
```

### Step 4: イベントリスナーの設定
```javascript
document.addEventListener('DOMContentLoaded', () => {
  renderBasicInfo();
  renderRankingChart();
  renderHorseCards('all');
  
  // フィルターボタンのイベント
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      renderHorseCards(filter);
    });
  });
});
```

### Step 5: レスポンシブデザインの確認
- Chrome DevToolsで各デバイスサイズをテスト
- グラフの高さを固定（`max-height: 400px`）
- テーブルに横スクロールを追加（`overflow-x-auto`）

---

## ✅ チェックリスト

### 必須機能
- [x] 基本情報の表示
- [x] コース特徴の表示
- [x] 最終結論（本命・対抗・穴馬・危険馬）
- [x] 総合評価ランキング（グラフ＋テーブル）
- [x] 個別馬評価（16頭分）
- [x] レーダーチャート（各馬12項目）
- [x] フィルター機能（全て/上位馬/穴馬候補）
- [x] 展開予測
- [x] 買い目参考
- [x] 注意事項

### デザイン
- [x] レスポンシブ対応（PC/タブレット/スマホ）
- [x] 落ち着いたカラーパレット
- [x] アイコンの適切な配置
- [x] ホバーエフェクト
- [x] グラフの高さ固定

### パフォーマンス
- [x] CDN経由でライブラリを読み込み
- [x] インラインJavaScript（外部ファイル不要）
- [x] 軽量なデータ構造

---

## 📝 カスタマイズ方法

### 新しいレースデータを作成する場合
1. **基本情報を変更**: `raceInfo`の内容を新しいレースに合わせて変更
2. **コース特徴を変更**: `courseFeatures`を該当コースに合わせて変更
3. **馬データを更新**: `horses`配列の16頭分を新しいデータに置き換え
4. **ランキングデータを更新**: `rankingData`を総合点順にソート
5. **最終結論を更新**: `finalConclusion`で本命・対抗・穴馬・危険馬を指定
6. **展開予測を更新**: `raceStrategy`でペースと展開を記述
7. **買い目参考を更新**: `bettingSuggestions`で推奨馬券を記述

### データ入力のヒント
- **総合点の計算**: 基本点（12項目×5点=60点満点）＋追い切り補正（-4〜+5点）＋新馬戦内容加点（0〜4点）
- **適性記号**: ◎（最適）/ ○（適性あり）/ △（やや不安）/ ×（不向き）
- **バッジ**: 本命=`"honmei"` / 対抗=`"taikou"` / 穴馬=`"ana"` / 危険馬=`"kiken"` / なし=`null`

---

## 🚀 デプロイ方法
1. `index.html`を作成
2. すべてのデータとJavaScriptをインラインで記述
3. ブラウザで動作確認
4. **Publishタブ**からデプロイ

---

## 📚 参考情報
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Chart.js Docs: https://www.chartjs.org/docs/
- Font Awesome Icons: https://fontawesome.com/icons

---

## 🎓 完成例
このプロジェクトの`index.html`が完成サンプルです。
新しいレースを作成する際は、このファイルをコピーしてデータ部分だけを変更してください。

---

## 💡 トラブルシューティング

### グラフが表示されない
- `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`が読み込まれているか確認
- `DOMContentLoaded`イベント内でChart.jsを初期化しているか確認

### レスポンシブが効かない
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`を確認
- Tailwind CSSのブレークポイント（`md:`, `lg:`）を正しく使用しているか確認

### データが表示されない
- JavaScriptのデータ構造が正しいか確認（カンマ、括弧の閉じ忘れ）
- ブラウザの開発者ツールでエラーを確認

---

## 📞 サポート
このテンプレートに関する質問は、`TEMPLATE_GUIDE.md`と`data-template.js`を参照してください。

---

**作成日**: 2025年12月27日  
**バージョン**: 1.0.0  
**作成者**: AI Static Website Developer
