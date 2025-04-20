# Change Log

Qmonus YAML Highlighter拡張機能の全ての重要な変更はこのファイルに記録されます。

[Keep a Changelog](http://keepachangelog.com/)のフォーマットに従っています。

## [Unreleased]

### 追加
- MITライセンスファイルを追加

## [0.0.2] - 2025-04-20

### 追加
- さまざまなPythonコードブロックパターンへの対応:
  - `script: |-` の後に続くブロック
  - `fakes:` の後に続くブロック
  - `output: |-`, `cleanup: |-`, `end: |-`, `body: |-` の後に続くブロック
  - `category:` の値に関わらず、`name:` + `fakes:` の組み合わせ対応

### 変更
- READMEの改善と使用例の追加
- パッケージ化とインストール方法の手順を追加

### 修正
- VS Codeバージョン要件を `^1.99.0` から `^1.60.0` に緩和
- 拡張機能の安定性向上のための内部コード改善

## [0.0.1] - 2025-04-19

### 追加
- 初期リリース
- 基本的なシンタックスハイライト機能
- `code: |-` および `action_type: script` パターンのサポート
