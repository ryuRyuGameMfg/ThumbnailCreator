#!/bin/bash

# すべてのスライドファイルをレギュレーション準拠に一括修正するスクリプト
# このスクリプトは色のレギュレーション違反を修正します

echo "🔄 スライドファイルのレギュレーション違反を修正中..."

# プロジェクトルート
PROJECT_ROOT="/Users/okamotoryuya/Projects/ThumbnailCreator"

# レギュレーション違反の色を修正する関数
fix_color_violations() {
  local file="$1"
  
  # cyan色をレギュレーション準拠の色に置換
  sed -i '' 's/from-cyan-400 to-cyan-500/from-blue-500 to-blue-500/g' "$file"
  sed -i '' 's/from-cyan-400 to-blue-500/from-blue-500 to-blue-600/g' "$file"
  sed -i '' 's/cyan-600/blue-600/g' "$file"
  sed -i '' 's/cyan-500/blue-500/g' "$file"
  sed -i '' 's/cyan-400/sky-500/g' "$file"
  sed -i '' 's/cyan-300/sky-300/g' "$file"
  sed -i '' 's/cyan-200/blue-200/g' "$file"
  sed -i '' 's/cyan-50/sky-50/g' "$file"
  sed -i '' 's/cyan-700/blue-700/g' "$file"
  
  # teal色を削除してレギュレーション準拠の色に置換
  sed -i '' 's/from-teal-400 to-teal-500/from-indigo-500 to-indigo-500/g' "$file"
  sed -i '' 's/teal-600/blue-600/g' "$file"
  sed -i '' 's/teal-500/blue-500/g' "$file"
  
  # purple色を削除してレギュレーション準拠の色に置換
  sed -i '' 's/from-purple-400 to-purple-500/from-violet-500 to-violet-500/g' "$file"
  sed -i '' 's/from-purple-50 to-sky-50/from-sky-50 to-blue-50/g' "$file"
  sed -i '' 's/purple-50/violet-50/g' "$file"
  
  # sky-400などの統一されていない色階調を修正
  sed -i '' 's/from-sky-400 to-sky-500/from-sky-500 to-sky-500/g' "$file"
  sed -i '' 's/from-blue-400 to-blue-500/from-blue-500 to-blue-500/g' "$file"
  sed -i '' 's/from-indigo-400 to-indigo-500/from-indigo-500 to-indigo-500/g' "$file"
  sed -i '' 's/sky-400/sky-500/g' "$file"
  sed -i '' 's/blue-400/blue-500/g' "$file"
  sed -i '' 's/indigo-400/indigo-500/g' "$file"
}

# すべてのスライドファイルを検索して修正
find "$PROJECT_ROOT/projects" -name "*.tsx" -type f | while read -r file; do
  echo "修正中: $file"
  fix_color_violations "$file"
done

echo "✅ レギュレーション違反の修正が完了しました"
echo ""
echo "次のステップ:"
echo "1. npm run dev で動作確認"
echo "2. 各スライドをブラウザで確認"
echo "3. デザインが崩れていないか確認"
