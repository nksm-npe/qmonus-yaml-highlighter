/**
 * Qmonus YAML Highlighter拡張機能のエントリーポイント
 * @param {import('vscode').ExtensionContext} context - 拡張機能のコンテキスト
 */
function activate(context) {
  console.log('Qmonus YAML Highlighter が有効化されました');
  // シンタックスハイライト拡張機能は、TextMate文法定義ファイルで動作するため
  // ここでは追加のコードは必要ありません
}

/**
 * 拡張機能が無効化されるときに呼び出される関数
 */
function deactivate() {
  // クリーンアップが必要な場合はここに記述
}

// CommonJSモジュールのエクスポート
module.exports = {
  activate,
  deactivate
};
