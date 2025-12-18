// 共通のピンク座布団タイトルコンポーネント（v2用）
export function PinkTitleV2({ english, japanese }: { english: string; japanese: string }) {
  return (
    <div className="text-center mb-4">
      {/* ピンク色の座布団（ギリギリまでピンク、端だけフェードアウト） */}
      <div className="relative w-full px-4 py-3 mb-2">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        />
        <h1 className="font-melete text-[40px] font-bold text-white tracking-wider relative z-10">
          {english}
        </h1>
      </div>
      <p className="text-base text-white font-hackgen">{japanese}</p>
    </div>
  );
}

