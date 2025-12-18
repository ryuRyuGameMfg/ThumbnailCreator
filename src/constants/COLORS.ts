/**
 * カラーレギュレーション定数
 * 
 * 全てのサムネイルで使用する色をここで一元管理します。
 * レギュレーション変更時はこのファイルのみを修正すれば、全スライドに反映されます。
 */

// ========================================
// 基本カラーパレット（4段階・青色系のみ）
// ========================================
export const BLUE_PALETTE = {
  // レベル1（最も明るい）
  LEVEL_1: {
    LIGHT: 'sky-500',
    DARK: 'sky-600',
    GRADIENT: 'from-sky-500 to-sky-600',
    SOLID: 'from-sky-500 to-sky-500',
  },
  // レベル2（中間・メイン）
  LEVEL_2: {
    LIGHT: 'blue-500',
    DARK: 'blue-600',
    GRADIENT: 'from-blue-500 to-blue-600',
    SOLID: 'from-blue-500 to-blue-500',
  },
  // レベル3（やや暗い）
  LEVEL_3: {
    LIGHT: 'indigo-500',
    DARK: 'indigo-600',
    GRADIENT: 'from-indigo-500 to-indigo-600',
    SOLID: 'from-indigo-500 to-indigo-500',
  },
  // レベル4（最も暗い）
  LEVEL_4: {
    LIGHT: 'violet-500',
    DARK: 'violet-600',
    GRADIENT: 'from-violet-500 to-violet-600',
    SOLID: 'from-violet-500 to-violet-500',
  },
} as const;

// ========================================
// スライドタイプ別の色定義
// ========================================

/**
 * Flowスライド（サービスの流れ）用の色
 * 4ステップ: sky-500, blue-500, indigo-500, violet-500
 */
export const FLOW_COLORS = [
  BLUE_PALETTE.LEVEL_1.SOLID,
  BLUE_PALETTE.LEVEL_2.SOLID,
  BLUE_PALETTE.LEVEL_3.SOLID,
  BLUE_PALETTE.LEVEL_4.SOLID,
] as const;

/**
 * Targetスライド（ターゲット）用の色
 * 4項目: sky-600, blue-600, indigo-600, violet-600
 */
export const TARGET_COLORS = [
  `from-${BLUE_PALETTE.LEVEL_1.DARK} to-${BLUE_PALETTE.LEVEL_1.DARK}`,
  `from-${BLUE_PALETTE.LEVEL_2.DARK} to-${BLUE_PALETTE.LEVEL_2.DARK}`,
  `from-${BLUE_PALETTE.LEVEL_3.DARK} to-${BLUE_PALETTE.LEVEL_3.DARK}`,
  `from-${BLUE_PALETTE.LEVEL_4.DARK} to-${BLUE_PALETTE.LEVEL_4.DARK}`,
] as const;

/**
 * Deliverablesスライド（納品内容）用の色
 * 6項目・循環: sky-500, blue-500, indigo-500, violet-500, sky-600, blue-600
 */
export const DELIVERABLES_COLORS = [
  BLUE_PALETTE.LEVEL_1.SOLID,
  BLUE_PALETTE.LEVEL_2.SOLID,
  BLUE_PALETTE.LEVEL_3.SOLID,
  BLUE_PALETTE.LEVEL_4.SOLID,
  `from-${BLUE_PALETTE.LEVEL_1.DARK} to-${BLUE_PALETTE.LEVEL_1.DARK}`,
  `from-${BLUE_PALETTE.LEVEL_2.DARK} to-${BLUE_PALETTE.LEVEL_2.DARK}`,
] as const;

/**
 * Pricingスライド（料金プラン）用の色
 * 3プラン: sky-600, blue-600, indigo-600
 */
export const PRICING_COLORS = [
  `from-${BLUE_PALETTE.LEVEL_1.DARK} to-${BLUE_PALETTE.LEVEL_1.DARK}`,
  `from-${BLUE_PALETTE.LEVEL_2.DARK} to-${BLUE_PALETTE.LEVEL_2.DARK}`,
  `from-${BLUE_PALETTE.LEVEL_3.DARK} to-${BLUE_PALETTE.LEVEL_3.DARK}`,
] as const;

/**
 * Featuresスライド（特徴）用の色
 * 4項目: sky-500, blue-500, indigo-500, violet-500（Flowと同じ）
 */
export const FEATURES_COLORS = FLOW_COLORS;

/**
 * UseCasesスライド（ユースケース）用の色
 * 4項目: sky-500, blue-500, indigo-500, violet-500（Flowと同じ）
 */
export const USECASES_COLORS = FLOW_COLORS;

// ========================================
// 共通グラデーション
// ========================================

/**
 * 基本グラデーション（デフォルト）
 * 用途: アイコン背景、カード背景など汎用的な箇所
 */
export const DEFAULT_GRADIENT = `from-${BLUE_PALETTE.LEVEL_1.LIGHT} to-${BLUE_PALETTE.LEVEL_2.DARK}`;

/**
 * 段階的グラデーション（差別化用）
 */
export const STEP_GRADIENTS = {
  LIGHT: `from-${BLUE_PALETTE.LEVEL_1.LIGHT} to-${BLUE_PALETTE.LEVEL_1.DARK}`,
  MIDDLE: `from-${BLUE_PALETTE.LEVEL_1.DARK} to-${BLUE_PALETTE.LEVEL_2.DARK}`,
  DARK: `from-${BLUE_PALETTE.LEVEL_2.DARK} to-${BLUE_PALETTE.LEVEL_3.DARK}`,
} as const;

// ========================================
// テキストカラー
// ========================================

export const TEXT_COLORS = {
  TITLE: `text-${BLUE_PALETTE.LEVEL_2.DARK}`,
  STEP_NUMBER: `text-${BLUE_PALETTE.LEVEL_2.DARK}`,
  FAQ_BADGE: `text-${BLUE_PALETTE.LEVEL_2.DARK}`,
  BORDER: 'text-blue-200',
} as const;

// ========================================
// アプリ別カラー（アプリ専用スライド用）
// ========================================

export const APP_COLORS = {
  LIVE: 'rose-600',      // ライブ配信
  VOICE: 'teal-600',    // 音声対話
  VIDEO: 'indigo-600',   // 動画生成
  CHAT: 'amber-600',    // チャット
} as const;
