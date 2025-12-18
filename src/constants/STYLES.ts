/**
 * スタイルレギュレーション定数
 * 
 * すべてのスライドで使用するスタイル（フォントサイズ、余白、サイズなど）をここで一元管理します。
 * デザインレギュレーション変更時はこのファイルのみを修正すれば、全スライドに反映されます。
 */

// ========================================
// フォント設定
// ========================================

export const FONTS = {
  // 英語タイトル用フォント
  ENGLISH: 'font-melete',
  // 日本語本文用フォント
  JAPANESE: 'font-hackgen',
} as const;

// ========================================
// フォントサイズ
// ========================================

export const FONT_SIZES = {
  // タイトル（英語）
  TITLE_ENGLISH: 'text-[36px]',
  TITLE_ENGLISH_LARGE: 'text-[48px]',
  
  // サブタイトル（日本語）
  SUBTITLE_JAPANESE: 'text-sm',      // 14px
  SUBTITLE_JAPANESE_SMALL: 'text-xs', // 12px
  
  // コンテンツ
  HEADING_LARGE: 'text-xl',          // 20px
  HEADING_MEDIUM: 'text-lg',         // 18px
  HEADING_SMALL: 'text-base',        // 16px
  
  // 本文
  BODY_LARGE: 'text-base',           // 16px
  BODY_MEDIUM: 'text-sm',            // 14px
  BODY_SMALL: 'text-xs',             // 12px
  BODY_TINY: 'text-[10px]',          // 10px
  
  // 価格・数字
  PRICE_LARGE: 'text-2xl',           // 24px
  PRICE_MEDIUM: 'text-xl',           // 20px
  PRICE_SMALL: 'text-lg',            // 18px
  
  // バッジ
  BADGE: 'text-xs',                  // 12px
  BADGE_SMALL: 'text-[10px]',        // 10px
} as const;

// ========================================
// フォントウェイト
// ========================================

export const FONT_WEIGHTS = {
  BLACK: 'font-black',               // 900
  BOLD: 'font-bold',                 // 700
  SEMIBOLD: 'font-semibold',         // 600
  MEDIUM: 'font-medium',             // 500
  NORMAL: 'font-normal',             // 400
} as const;

// ========================================
// スペーシング（余白）
// ========================================

export const SPACING = {
  // タイトルとコンテンツの間
  TITLE_CONTENT_GAP: 'mb-4',
  TITLE_CONTENT_GAP_SMALL: 'mb-3',
  
  // コンテンツ間の余白
  CONTENT_GAP_LARGE: 'gap-4',
  CONTENT_GAP_MEDIUM: 'gap-3',
  CONTENT_GAP_SMALL: 'gap-2',
  CONTENT_GAP_TINY: 'gap-1',
  
  // パディング
  CARD_PADDING_LARGE: 'p-4',
  CARD_PADDING_MEDIUM: 'p-3',
  CARD_PADDING_SMALL: 'p-2',
  CARD_PADDING_TINY: 'p-1',
  
  // マージン
  SECTION_MARGIN_TOP: 'mt-3',
  SECTION_MARGIN_BOTTOM: 'mb-3',
} as const;

// ========================================
// サイズ（アイコン、ボックスなど）
// ========================================

export const SIZES = {
  // アイコンサイズ
  ICON_LARGE: 'w-8 h-8',
  ICON_MEDIUM: 'w-6 h-6',
  ICON_SMALL: 'w-5 h-5',
  ICON_TINY: 'w-4 h-4',
  
  // アイコンボックスサイズ
  ICON_BOX_LARGE: 'w-16 h-16',
  ICON_BOX_MEDIUM: 'w-14 h-14',
  ICON_BOX_SMALL: 'w-12 h-12',
  ICON_BOX_TINY: 'w-10 h-10',
  
  // 数字バッジ
  NUMBER_BADGE_LARGE: 'w-12 h-12',
  NUMBER_BADGE_MEDIUM: 'w-10 h-10',
  NUMBER_BADGE_SMALL: 'w-8 h-8',
} as const;

// ========================================
// ボーダー・角丸
// ========================================

export const BORDERS = {
  // 角丸
  RADIUS_LARGE: 'rounded-2xl',
  RADIUS_MEDIUM: 'rounded-xl',
  RADIUS_SMALL: 'rounded-lg',
  RADIUS_TINY: 'rounded',
  
  // 円形
  RADIUS_FULL: 'rounded-full',
  
  // ボーダー
  BORDER_THIN: 'border',
  BORDER_MEDIUM: 'border-2',
  BORDER_THICK: 'border-4',
  
  // ボーダー色（青色系統一）
  BORDER_COLOR_LIGHT: 'border-sky-200',
  BORDER_COLOR_MEDIUM: 'border-blue-300',
  BORDER_COLOR_DARK: 'border-blue-500',
  
  // 透明度付きボーダー色
  BORDER_COLOR_LIGHT_ALPHA: 'border-sky-400/50',
  BORDER_COLOR_MEDIUM_ALPHA: 'border-blue-500/50',
} as const;

// ========================================
// シャドウ
// ========================================

export const SHADOWS = {
  SMALL: 'shadow-sm',
  MEDIUM: 'shadow',
  LARGE: 'shadow-lg',
  EXTRA_LARGE: 'shadow-xl',
} as const;

// ========================================
// 透明度
// ========================================

export const OPACITY = {
  FULL: 'opacity-100',
  HIGH: 'opacity-90',
  MEDIUM: 'opacity-75',
  LOW: 'opacity-50',
  VERY_LOW: 'opacity-25',
  MINIMAL: 'opacity-10',
} as const;

// ========================================
// 背景透明度（bg-white/20形式）
// ========================================

export const BG_OPACITY = {
  ICON_BOX: 'bg-white/20',
  OVERLAY_LIGHT: 'bg-white/10',
  OVERLAY_MEDIUM: 'bg-white/30',
  OVERLAY_DARK: 'bg-white/50',
} as const;

// ========================================
// テキストカラー（グレー系）
// ========================================

export const TEXT_COLORS = {
  // 白色
  WHITE: 'text-white',
  WHITE_HIGH: 'text-white/90',
  WHITE_MEDIUM: 'text-white/75',
  WHITE_LOW: 'text-white/50',
  
  // グレー
  GRAY_DARKEST: 'text-gray-900',
  GRAY_DARK: 'text-gray-800',
  GRAY_MEDIUM: 'text-gray-700',
  GRAY_DEFAULT: 'text-gray-600',
  GRAY_LIGHT: 'text-gray-500',
  GRAY_LIGHTER: 'text-gray-400',
  
  // 青色系タイトル
  TITLE_PRIMARY: 'text-sky-600',
  TITLE_SECONDARY: 'text-blue-600',
} as const;

// ========================================
// スライドレイアウト設定
// ========================================

export const LAYOUT = {
  // スライド全体のパディング
  SLIDE_PADDING: 'p-8',
  SLIDE_PADDING_SMALL: 'p-6',
  
  // コンテンツエリア
  CONTENT_FULL_HEIGHT: 'flex-1',
  
  // グリッド
  GRID_2_COLS: 'grid grid-cols-2',
  GRID_3_COLS: 'grid grid-cols-3',
  GRID_4_COLS: 'grid grid-cols-4',
  
  // フレックス
  FLEX_COL: 'flex flex-col',
  FLEX_ROW: 'flex flex-row',
  FLEX_CENTER: 'flex items-center justify-center',
  FLEX_BETWEEN: 'flex items-center justify-between',
} as const;

// ========================================
// アニメーション・トランジション
// ========================================

export const TRANSITIONS = {
  DEFAULT: 'transition-all duration-200',
  FAST: 'transition-all duration-150',
  SLOW: 'transition-all duration-300',
  
  // ホバー効果
  HOVER_SCALE_SMALL: 'hover:scale-105',
  HOVER_SCALE_MEDIUM: 'hover:scale-110',
  HOVER_SCALE_LARGE: 'hover:scale-125',
} as const;

// ========================================
// 組み合わせスタイル（よく使うパターン）
// ========================================

export const COMBINED_STYLES = {
  // カード
  CARD_BASE: `${BORDERS.RADIUS_MEDIUM} ${SHADOWS.LARGE} ${BORDERS.BORDER_THIN}`,
  CARD_HOVER: `${BORDERS.RADIUS_MEDIUM} ${SHADOWS.LARGE} ${TRANSITIONS.DEFAULT} hover:shadow-xl`,
  
  // タイトルコンテナ
  TITLE_CONTAINER: 'text-center',
  TITLE_ENGLISH: `${FONTS.ENGLISH} ${FONT_SIZES.TITLE_ENGLISH} ${FONT_WEIGHTS.BOLD} ${TEXT_COLORS.TITLE_PRIMARY} tracking-wider`,
  SUBTITLE_JAPANESE: `${FONT_SIZES.SUBTITLE_JAPANESE} ${TEXT_COLORS.GRAY_LIGHT} ${FONTS.JAPANESE}`,
  
  // アイコンボックス
  ICON_BOX: `${BG_OPACITY.ICON_BOX} ${BORDERS.RADIUS_MEDIUM} ${LAYOUT.FLEX_CENTER} flex-shrink-0`,
  
  // FAQ項目
  FAQ_ITEM: `bg-gradient-to-r ${BORDERS.RADIUS_MEDIUM} ${SHADOWS.SMALL} backdrop-blur`,
  FAQ_NUMBER: `${BORDERS.RADIUS_FULL} ${LAYOUT.FLEX_CENTER} flex-shrink-0 mt-0.5`,
} as const;
