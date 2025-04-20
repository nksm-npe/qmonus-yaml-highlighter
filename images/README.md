# ハイライト例画像の作成方法

このディレクトリには、Qmonus YAML Highlighter拡張機能のREADMEで使用するハイライト例画像とその作成に関するファイルが含まれています。

## ファイル構成

- `highlight-example.png` - READMEで使用されるPNG形式の画像ファイル
- `highlight-example.svg` - 元となるSVG形式の画像ファイル

## 画像作成手順

ハイライト例の画像を再作成したい場合は、以下の手順に従ってください。

### 方法1: SVGの直接編集（推奨）

1. `highlight-example.svg` ファイルを編集します
   - テキストエディタで開いて直接編集するか
   - Inkscapeなどのベクター画像編集ソフトで編集します

2. SVGをPNGに変換します
   ```bash
   cd images
   # 必要なパッケージをインストール
   npm install svg2img
   
   # 変換スクリプトを実行
   node svg-to-png.js
   ```

### SVGファイルについて

SVGファイルはベクター形式なので、任意のサイズに拡大・縮小しても画質が劣化しません。テキストエディタで開くと、次のような構造になっています：

- `<style>` セクションでは各要素の色やフォントを定義しています
- YAMLコード部分とPythonコード部分が別々に着色されています
- Pythonコードブロックには背景色と左側のボーダーが設定されています

例えば、色やフォントを変更したい場合は、SVGファイル内の対応するCSSクラス定義を編集します：

```xml
<style>
  .yaml-key {
    fill: #9cdcfe; /* YAMLのキーの色を変更する場合はここを編集 */
  }
  .python-keyword {
    fill: #569cd6; /* Pythonのキーワードの色を変更する場合はここを編集 */
  }
  /* その他のスタイル定義... */
</style>
```

## SVGからPNGへの変換スクリプト

`svg-to-png.js` は、SVGファイルをPNGに変換するシンプルなNode.jsスクリプトです。

```javascript
// SVGをPNGに変換するスクリプト
const fs = require('fs');
const path = require('path');
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
```

## 注意事項

- READMEでは相対パス `images/highlight-example.png` で画像を参照しています
- SVGからPNGへの変換時に解像度やサイズを調整したい場合は、`svg-to-png.js` の設定値を変更してください
- 拡張機能のテーマに合わせて色を調整すると、より一貫性のあるドキュメントになります
