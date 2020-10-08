# vue-3-test

帽田こすずが配信で作ったToDoアプリです。Vue3の使い方を確認するために作りました。

# メモ

## 作成時のオプション

作成には`vue-cli`を利用しています。<br>
プリセットは`Manually select features`を選択し、その内容は以下の通りです
* Check the features needed for your project
  * Choose Vue Version
  * Babel
  * TypeScript
  * Router
  * Vuex
  * Linter /Formatter
* Choose a version of Vue.js that you want to start the project with
  * 3.x
* あとはデフォルト

## setup()

Vue3はライフサイクルやdataなどをsetupという関数にまとめている。<br>
そのおかげで`this`を使う必要がなくなったが、書き方が大幅に変わっているので注意が必要。<br>

* create
  * 実行する処理をべた書き
* data
  * `return`するオブジェクトに変数を入れる
* computed
  * `computed()`関数の引数に渡す
* methods
  * 関数を`return`するオブジェクトに入れる

## vue-routerをsetup内で使用する

vue-routerをsetup内で設定するmethodなどに使用する場合は、`useRouter()`や`userRoute()`で戻ってくる値を使う。<br>
戻り値はこれまでの`this.$router`や`this.$route`と同じ感覚で使える。

## vuexを利用する

Vuexを利用するにはまず`vuex-shim.d.ts`を作る必要がある。これはvuexで使う`store`の型宣言をしている。<br>
基本的に今回作成したものを見ればいいが、作成する`interface State`はvuexで使いたいstoreのデータと同じにする必要がある。

setup内で利用するには、vue-routerと同じように`useStore()`の戻り値を使う。これもこれまでの`this.$store`と同じ扱い方になる。

## setupとpropsについて

setupを利用するときに第一引数としてpropsを宣言できる。この時にこれまでと同じような形でpropsを先に宣言する必要がある。（多分）また、`required`の設定をする必要があり、falseの場合は`default`も宣言しないとエラーになる。（多分）
