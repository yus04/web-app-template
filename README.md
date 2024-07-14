# web-app-template
このリポジトリは、Web アプリケーションを使った簡単なデモ用の Web アプリ環境構築用テンプレートです。
デモの度に Web アプリを 1 から構築していると手間ですが、既に Web アプリとして利用できるテンプレートなので、開発者はコンテンツの開発に注力することができます。
Bicep での記述もされているので、デプロイも効率的に実施できます。

## React プロジェクト
このテンプレートは、以下のコマンドを実行することで作られる React アプリを元に構築しています。
```
npx create-react-app src/frontend --template typescript
```

## 起動手順

```
cd src/frontend
yarn start
```