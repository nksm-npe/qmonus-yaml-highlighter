# Qmonus YAML Highlighter

QmonusのYAMLファイル内に埋め込まれたPythonコードブロックに対するシンタックスハイライト機能を提供する拡張機能です。

## 機能

この拡張機能は以下の機能を提供します：

- QmonusのYAMLファイル内に埋め込まれたPythonコードブロックを自動的に検出
- 検出されたPythonコードに対して適切なシンタックスハイライトを適用
- 以下のパターンに対応:
  - `code: |-` の後に続くPythonコードブロック
  - `action_type: script` の後の `code: |-` で始まるPythonコードブロック
  - `script: |-` の後に続くPythonコードブロック
  - `fakes:` の後に続くPythonコードブロック
  - `output: |-`, `cleanup: |-`, `end: |-`, `body: |-` の後に続くPythonコードブロック
  - `category: example` と `name:` の後に続く `fakes:` ブロック

例：

![ハイライト例](images/highlight-example.png)

## 使い方

この拡張機能をインストールすると、`.yaml`および`.yml`ファイル内のQmonus形式のコードブロックが自動的にハイライトされます。

特定のファイルを`.qmonus.yaml`または`.qmonus.yml`として保存すると、専用のファイルタイプとして認識されます。

## サポートしているパターン

以下のYAMLパターン内のPythonコードが認識されます：

```yaml
# パターン1: code: |- の後にPythonコードが続く場合
commands:
  - command: script
    kwargs:
      code: |-
        # ここのPythonコードがハイライトされます
        result = some_function()
        if result.error:
            raise Error(result.code)
```

```yaml
# パターン2: action_type: script の後のcode: |- ブロック
cancellation:
  actions:
    - action_type: script
      code: |-
        # ここのPythonコードもハイライトされます
        await context.abort()
```

```yaml
# パターン3: script: |- の後のPythonコードブロック
hooks:
  pre_process:
    script: |-
      # ここのPythonコードもハイライトされます
      data = prepare_data(input_value)
      return data
```

```yaml
# パターン4: fakes: の後のPythonコードブロック
category: example
name: getHoge
fakes:
  # このPythonコードがハイライトされます
  hoge_data = {"id": 123, "name": "test"}
  return hoge_data
```

```yaml
# パターン5: output: |- の後のPythonコードブロック
scenarios:
  - name: get_data
    output: |-
      # ここのPythonコードもハイライトされます
      return {"status": "success", "data": result}
```

```yaml
# パターン6: cleanup: |- などの後のPythonコードブロック
tests:
  cleanup: |-
    # テスト終了時のクリーンアップコードもハイライトされます
    await db.delete_all_test_data()
```

## 要件

- Visual Studio Code 1.99.0以上

## 既知の問題

現在、特に既知の問題はありません。問題を発見した場合は、GitHubリポジトリにIssueを作成してください。

## リリースノート

### 0.0.2
- 機能強化: さまざまなPythonコードブロックパターンに対応
  - `script: |-` の後に続くブロック
  - `fakes:` の後に続くブロック
  - `output: |-`, `cleanup: |-`, `end: |-`, `body: |-` の後に続くブロック
  - `category: example` + `name:` + `fakes:` の組み合わせに対応

### 0.0.1
- 初期リリース
- 基本的なシンタックスハイライト機能の実装
- `code: |-` および `action_type: script` パターンのサポート
