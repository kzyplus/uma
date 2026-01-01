# Git プッシュ手順ガイド

## 前提条件
- Git がインストールされていること
- GitHub アカウントがあること
- Personal Access Token (PAT) が設定済みであること

---

## 初回セットアップ（済み）

```bash
# リポジトリの初期化
git init

# リモートリポジトリの追加
git remote add origin https://github.com/kzyplus/uma.git

# ユーザー情報の設定
git config user.name "kzyplus"
git config user.email "kzy0126plus@gmail.com"
```

---

## 日常のプッシュ手順

### 1. 変更状況の確認
```bash
git status
```

### 2. HTMLファイルをステージング
```bash
# 特定のファイルを追加
git add output/ファイル名.html

# または output/ 内のHTMLファイルをすべて追加
git add output/*.html
```

### 3. コミット
```bash
git commit -m "Add レース名 prediction HTML"
```

### 4. プッシュ
```bash
git push origin main
```

---

## よく使うコマンド

### 変更の確認
```bash
# 変更されたファイルの一覧
git status

# 差分の確認
git diff
```

### コミット履歴の確認
```bash
git log --oneline -5
```

### リモートの確認
```bash
git remote -v
```

---

## 注意事項

1. **HTMLファイルのみプッシュ**
   - `output/` フォルダ内のHTMLファイルのみをプッシュ
   - MDファイルやinputフォルダはプッシュしない

2. **ファイル名は英語**
   - 日本語ファイル名は避ける
   - 例: `tokyo-daishoten-2025.html`（○）
   - 例: `東京大賞典2025.html`（×）

3. **コミットメッセージ**
   - 英語で簡潔に記載
   - 例: `Add Tokyo Daishoten 2025 prediction HTML`

---

## トラブルシューティング

### 認証エラーが出た場合
PATの有効期限切れの可能性あり。新しいPATを作成して再設定：
```bash
git remote set-url origin https://kzyplus:新しいPAT@github.com/kzyplus/uma.git
```

### プッシュが拒否された場合
リモートに変更がある可能性。先にプルする：
```bash
git pull origin main
```

---

## GitHub Pages URL

プッシュ後、以下のURLでアクセス可能：
```
https://kzyplus.github.io/uma/
https://kzyplus.github.io/uma/output/ファイル名.html
```

---

*作成日: 2025/12/30*
