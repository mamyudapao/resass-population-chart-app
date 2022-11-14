# Resas Population Chart App

## 概要

このアプリケーションは、RESAS APIを利用して、都道府県別の人口推移をグラフで表示するアプリケーションです。

## 技術構成

- React
- Jest
- Axios
- Storybook
- Prettier
- ESlint
- Docker

## アピールポイント

- コンポーネントの設計は、Atomic Designを採用しています。
- Atomicデザインを採用しているので当然ですが、atomic, moleculesではドメイン知識を持たず、
  organisms, templates, pagesではドメイン知識を持ちます。Templateは、Layoutに専念しています。
- 状態は、pagesでのみ持つようにしています。
- 外部通信はpagesで行い、その結果を子コンポーネントに渡すようにしています。
- Storybookを導入しています。
- Github ActionsでCIしています。
- Vercelへ自動デプロイしています。
- APIは、Axiosを用いてAPIクライアントを作成して、呼び出しを抽象化しています。
- Jestを用いて、Unitテストを記述しています。(ちょっとだけ)
- TypeScriptを用いています。
- APIの呼び出しは余計なリクエストを出さないように、過去のデータを上手に利用して、必要なデータだけを取得するようにしています。
- チャートの都道府県の色は、固定されるように工夫しています。
- CSSは、CSS Modulesを用いています。
- 余計なmarinやpaddingを設定せず、flexboxを用いて、レイアウトを組んでいます。
- 極力Typeセーフを意識しました。
- 蛇足ですが、Docker化しました。
- セキュリティに気を遣って、APIキーは環境変数に設定しています。
- huskyを用いてpre-commitで、コミット前にテストを実行するようにしています。

## 起動方法
  
  ### ローカルで起動
  ```bash
  $ git clone https://github.com/mamyudapao/resass-population-chart-app.git
  $ cd resass-population-chart-app
  $ yarn install
  $ yarn start
  ```

  ### Dockerで起動
  ```bash
  $ git clone https://github.com/mamyudapao/resass-population-chart-app.git
  $ cd resass-population-chart-app
  $ docker-compose up
  ```
