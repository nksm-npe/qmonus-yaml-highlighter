// ファイル名: svg-to-png.js
// SVGをPNGに変換するスクリプト
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const svg2img = require('svg2img');

// SVGファイルのパス
const svgPath = path.join(__dirname, 'highlight-example.svg');
const outputPath = path.join(__dirname, 'highlight-example.png');

// SVGファイルを読み込む
const svgContent = fs.readFileSync(svgPath, 'utf8');

// SVGをPNGに変換
svg2img(svgContent, {
  width: 800,
  height: 600,
}, (error, buffer) => {
  if (error) {
    console.error('変換エラー:', error);
    return;
  }
  
  // PNGファイルとして保存
  fs.writeFileSync(outputPath, buffer);
  console.log(`PNGファイルを保存しました: ${outputPath}`);
});
