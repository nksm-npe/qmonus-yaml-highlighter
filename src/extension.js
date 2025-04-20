// 拡張機能が有効化されたときに呼び出される関数
function activate(context) {
  console.log('Qmonus YAML Highlighter が有効化されました');
}

// 拡張機能が無効化されるときに呼び出される関数
function deactivate() {}

module.exports = {
  activate,
  deactivate
};
