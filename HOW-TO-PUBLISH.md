# How to publish to npmjs

[npmjs](https://www.npmjs.com/)に本パッケージをpublishする手順について説明します。

以下のプログラムが入っていることを前提とします。
* git
* nodejs v12.14以降
* npm v6.13以降
* grunt-cli(`npm i -g grunt-cli`)

手順を以下に示します。

1. 本パッケージのクローン
本パッケージを`git clone`にて取得します。  
`git clone https://github.com/enebular/enebular-node-red-1.0.git`
1. 必要パッケージのインストール
以下のコマンドを実行します。
`npm ci`
1. Versionの変更
Versionを変更します。本パッケージのVersionの規則は`1.0.5-alpha.n`とし、nの部分を加算していきます。`1.0.5`の部分は母体としたNode-REDのVersionであり、固定とします。Versionの変更は以下のコマンドにて実施します。  
`node scripts/set-package-version.js 1.0.5-alpha.n`
1. release用のパッケージファイル作成
以下のコマンドを実行します。
`grunt release`
1. Publish
パッケージファイルが作成されたフォルダに移動します。
`cd .dist/modules/`
生成されたスクリプトを実行します。
`sh publish.sh`

publishされるのは以下のパッケージです。

@uhuru/enebular-node-red
@uhuru/enebular-node-red-editor-api
@uhuru/enebular-node-red-editor-client
@uhuru/enebular-node-red-nodes
@uhuru/enebular-node-red-registry
@uhuru/enebular-node-red-runtime
@uhuru/enebular-node-red-util

各パッケージには`test`というタグが付与されます。

以上です。
