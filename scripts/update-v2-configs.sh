#!/bin/bash

# v2プロジェクトのconfig.jsonを更新
echo "Updating config files..."

# Unity Text Support v2
cat > /Users/okamotoryuya/Projects/ThumbnailCreator/projects/unity-text-support-v2/config.json << 'EOF'
{
  "name": "Unityテキストサポート v2",
  "description": "Unity開発72時間質問し放題サービス - 新デザイン",
  "createdAt": "2024-12-18",
  "platforms": ["coconala"],
  "status": "active"
}
EOF

# Unity Video Support v2
cat > /Users/okamotoryuya/Projects/ThumbnailCreator/projects/unity-video-support-v2/config.json << 'EOF'
{
  "name": "Unityビデオチャットサポート v2",
  "description": "60分間画面共有サポート - 新デザイン",
  "createdAt": "2024-12-18",
  "platforms": ["coconala"],
  "status": "active"
}
EOF

# Cluster Development v2
cat > /Users/okamotoryuya/Projects/ThumbnailCreator/projects/cluster-development-v2/config.json << 'EOF'
{
  "name": "Clusterワールド開発 v2",
  "description": "メタバース・VRワールド制作 - 新デザイン",
  "createdAt": "2024-12-18",
  "platforms": ["coconala"],
  "status": "active"
}
EOF

# AI Development v2
cat > /Users/okamotoryuya/Projects/ThumbnailCreator/projects/ai-development-v2/config.json << 'EOF'
{
  "name": "AI VTuber開発 v2",
  "description": "AI VTuber・自動配信システム - 新デザイン",
  "createdAt": "2024-12-18",
  "platforms": ["coconala"],
  "status": "active"
}
EOF

echo "Config files updated!"

