# 🏇 競馬予想シート生成テンプレート

このテンプレートを使用して、毎回同じフォーマットで競馬予想シートを生成できます。

## 📝 使い方

### 1. 基本情報の設定

`index.html`の以下の部分を編集してください：

```html
<!-- 基本情報セクション（60行目付近） -->
<h1>🏇 [レース名]</h1>
<p>総合評価シート</p>

<!-- 基本情報グリッド（63行目付近） -->
<div class="p-4 bg-slate-100 rounded-lg">
    <div class="text-sm text-gray-600">開催日</div>
    <div class="font-bold text-gray-800">[開催日]</div>
</div>
<!-- 以下、競馬場、コース、馬場状態、天候を編集 -->
```

### 2. コース特性セクション（オプション）

特定のコースの特徴を説明する場合は、92行目付近の「中山芝2000m（内回り）の特徴」セクションを編集してください。

### 3. 最終結論の設定

109行目付近の最終結論セクションを編集：

```html
<!-- 本命馬 -->
<div class="text-3xl font-bold text-gray-800 mb-2">
    ◎ [馬番]番 [馬名]
</div>
<div class="text-sm text-gray-700 space-y-2">
    <div><i class="fas fa-check-circle text-green-600"></i> [強み1]</div>
    <div><i class="fas fa-check-circle text-green-600"></i> [強み2]</div>
    <div><i class="fas fa-check-circle text-green-600"></i> [強み3]</div>
</div>
```

対抗馬、穴馬、危険な人気馬も同様に編集してください。

### 4. JavaScriptデータの編集

**最も重要：** 358行目付近の`horses`配列と`rankingData`配列を編集してください。

#### 馬データ（horses配列）のフォーマット

```javascript
{
    number: 1,                    // 馬番
    name: "馬名",                 // 馬名
    score: 40,                   // 総合評価点（60点満点）
    good: "○",                   // 良馬場適性（◎○△×）
    heavy: "○",                  // 稍重～適性（◎○△×）
    comment: "コメント",          // 一言コメント
    jockey: "騎手名",            // 騎手名
    trainer: "厩舎名（所属）",    // 厩舎情報
    blood: "父○○ × 母父△△",    // 血統情報
    weight: "57kg",              // 斤量
    badge: null,                 // バッジ（"honmei","taikou","ana","kiken",null）
    details: {
        pros: ["強み1", "強み2"],           // 良い点の配列
        cons: ["不安点1", "不安点2"],       // 不安材料の配列
        expect: ["期待点1"],                // 期待できる点の配列
        scores: [4, 3, 4, 3, 3, 3, 4, 5, 3, 3, 3, 3]  // 12項目評価（各5点満点）
    }
}
```

#### バッジの種類
- `"honmei"` - 本命（ピンク）
- `"taikou"` - 対抗（ブルー）
- `"ana"` - 穴馬（グリーン）
- `"kiken"` - 危険な人気馬（オレンジ）
- `null` - バッジなし

#### 12項目評価の順序
```javascript
scores: [
    着差重視,      // [0] /5点
    レースレベル,  // [1] /5点
    血統,          // [2] /5点
    コース適性,    // [3] /5点
    輸送適性,      // [4] /5点
    休み明け,      // [5] /5点
    脚質×展開,    // [6] /5点
    枠順×脚質,    // [7] /5点
    騎手相性,      // [8] /5点
    調教仕上,      // [9] /5点
    馬体状態,      // [10] /5点
    厩舎相性       // [11] /5点
]
```

#### ランキングデータ（rankingData配列）のフォーマット

```javascript
{ 
    rank: 1,                    // 順位
    number: 11,                 // 馬番
    name: "馬名",               // 馬名
    score: 56,                  // 総合点
    good: "◎",                  // 良馬場適性
    heavy: "◎",                 // 稍重～適性
    comment: "コメント"         // 一言コメント
}
```

### 5. 展開予測の編集

221行目付近：

```html
<div class="p-4 bg-blue-100 rounded-lg">
    <div class="font-bold text-gray-800">ペース予想</div>
    <div class="text-gray-700">[ペース予想]</div>
</div>
```

### 6. 買い目参考の編集

273行目付近：

```html
<div class="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100">
    <div class="font-bold text-gray-800 mb-2">単勝</div>
    <div class="text-lg text-gray-700">[馬番] [馬名]</div>
</div>
```

### 7. 注意事項の編集

304行目付近：

```html
<div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
    <div class="font-bold mb-1">⚠️ [タイトル]</div>
    <div>[内容]</div>
</div>
```

## 🎨 デザインカスタマイズ

### カラースキームの変更

10行目付近のCSSを編集：

```css
body {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.badge-honmei {
    background: linear-gradient(135deg, #e85d75 0%, #d53a5d 100%);
}
```

### グラフの高さ調整

161行目付近：

```html
<div id="rankingChartContainer" class="mb-8" style="height: 300px; position: relative;">
```

高さを変更したい場合は`height: 300px`の数値を変更してください。

## 📋 クイックスタートチェックリスト

- [ ] レース名を変更
- [ ] 開催日、競馬場、コース、馬場状態、天候を設定
- [ ] コース特性セクションを編集（必要に応じて）
- [ ] 最終結論（本命・対抗・穴馬・危険馬）を設定
- [ ] `horses`配列のデータを全頭分入力
- [ ] `rankingData`配列を総合点順にソート
- [ ] 展開予測を入力
- [ ] 買い目参考を入力
- [ ] 注意事項を入力
- [ ] ブラウザでプレビュー確認

## 🔧 トラブルシューティング

### グラフが表示されない
- ブラウザの開発者ツール（F12）でJavaScriptエラーを確認
- `horses`配列と`rankingData`配列のカンマ、括弧の位置を確認

### データが正しく表示されない
- `scores`配列が必ず12個の要素を持っているか確認
- 馬番（`number`）が重複していないか確認
- `badge`の値が`"honmei"`, `"taikou"`, `"ana"`, `"kiken"`, `null`のいずれかか確認

### スタイルが崩れる
- Tailwind CDNが正しく読み込まれているか確認（7行目）
- Chart.jsが正しく読み込まれているか確認（8行目）

## 📄 テンプレートファイル

現在の`index.html`がテンプレートとして使用できます。
新しいレースを作成する際は、`index.html`をコピーして編集してください。

## 🚀 デプロイ

編集完了後、Publishタブからデプロイしてください。

---

**作成者**: AI Assistant  
**最終更新**: 2025年12月27日  
**バージョン**: 1.0
