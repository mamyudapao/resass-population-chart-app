# Resas Population Chart App

## 概要

このアプリケーションは、RESAS API を利用して、都道府県別の人口推移をグラフで表示するアプリケーションです。

## 技術構成

- React
- Jest
- Axios
- Storybook
- Prettier
- ESlint
- Docker

## アピールポイント

- コンポーネントの設計は、Atomic Design を採用しています。
- Atomic デザインを採用しているので当然ですが、atomic, molecules ではドメイン知識を持たず、
  organisms, templates, pages ではドメイン知識を持ちます。Template は、Layout に専念しています。
- 状態は、pages でのみ持つようにしています。
- 外部通信は pages で行い、その結果を子コンポーネントに渡すようにしています。
- Storybook を導入しています。
- Github Actions で CI しています。
- Vercel へ自動デプロイしています。
- API は、Axios を用いて API クライアントを作成して、呼び出しを抽象化しています。
- Jest を用いて、Unit テストを記述しています。(ちょっとだけ)
- TypeScript を用いています。
- API の呼び出しは余計なリクエストを出さないように、過去のデータを上手に利用して、必要なデータだけを取得するようにしています。
- チャートの都道府県の色は、固定されるように工夫しています。
- CSS は、CSS Modules を用いています。
- 余計な marin や padding を設定せず、flexbox を用いて、レイアウトを組んでいます。
- 極力 Type セーフを意識しました。
- 蛇足ですが、Docker 化しました。
- マルチステージビルドを用いて、ビルド後のファイルサイズを小さくしています。
- セキュリティに気を遣って、API キーは環境変数に設定しています。
- husky を用いて pre-commit で、コミット前にテストを実行するようにしています。

## 起動方法

### ローカルで起動

```bash
$ git clone https://github.com/mamyudapao/resass-population-chart-app.git
$ cd resass-population-chart-app
$ yarn install
$ yarn start
```

### Docker で起動

```bash
$ git clone https://github.com/mamyudapao/resass-population-chart-app.git
$ cd resass-population-chart-app
$ docker-compose up
```
