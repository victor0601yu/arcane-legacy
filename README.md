# Arcane Legacy | 秘法傳說

> 一段史詩般的浩瀚旅程，即將在深邃的魔法遺跡中展開。

**Arcane Legacy** 是一個以中世紀奇幻為主題的單頁式登陸頁面 (Landing Page) 概念展示作品。本專案專注於呈現史詩般、充滿沉浸感的視覺體驗，以及細膩的前端互動效果。

## ✨ 核心特色 (Features)

*   **真・視差滾動 (Parallax Scrolling):** 精心調校的 Hero Section，背景與前景標題隨著使用者捲動時產生不同速率的位移，營造出深邃的視覺層次感。
*   **3D 遠古遺物陳列館 (3D Carousel Gallery):** 使用純原生 JavaScript 與 CSS 3D Transforms (`rotateY`, `translateZ`)，實作具備立體空間感的魔幻輪播牆。
*   **動態互動感測 (Interactive 3D Elements):** 支援游標 Hover 追蹤（滑鼠跟隨），精確計算 `mousemove` 配合 `requestAnimationFrame` 帶來的高效能流暢 3D 視角傾斜互動。
*   **流暢過場動畫 (Smooth Animations):** 採用 `Intersection Observer API` 實作效能最佳化的 Scroll Reveal 動畫，當元素捲動進入視窗時優雅地淡入。
*   **現代化字體與排版:** 結合 `Playfair Display` 的古典優雅與 `Inter` 的高易讀性，打造出符合傳說主題的排版風格。

## 🛠️ 技術棧 (Tech Stack)

*   **前端語言:** Semantic HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **建置工具:** [Vite](https://vitejs.dev/) - 提供極致快速的開發伺服器與打包體驗
*   **字體服務:** Google Fonts
*   **圖示與素材:** 純 CSS 繪製特效與 AI 生成之概念視覺

## 🚀 本地端運行 (Getting Started)

本專案使用 Vite 作為開發伺服器。請確保你的環境已經安裝了 [Node.js](https://nodejs.org/)。

### 1. 安裝依賴

進入專案目錄後，使用 npm 安裝所需的開發套件：

```bash
npm install
```

### 2. 啟動開發伺服器

執行以下指令啟動 Vite 開發伺服器：

```bash
npm run dev
```

接著在瀏覽器中開啟終端機提示的本地網址 (通常為 `http://localhost:5173/`) 即可進行預覽。

### 3. 專案建置 (Production Build)

如需打包上線版本，請執行：

```bash
npm run build
```

打包後優化的靜態檔案將會統一輸出至 `dist` 資料夾。

## 📜 聲明 (Disclaimer)

*   本專案開發純為前端互動技術與排版展示。
*   專案內所有使用之美術視覺化設計皆由 AI (生成式人工智慧) 協助生成，僅作概念展示用途，**禁止任何商業行為使用**。
