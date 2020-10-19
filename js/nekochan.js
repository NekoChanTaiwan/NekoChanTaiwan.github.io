// 建議將輕觸動作和滑鼠滾輪事件監聽器標示為 `passive`，以提升網頁的捲動效能。
document.addEventListener('touchstart', onTouchStart, {passive: true});