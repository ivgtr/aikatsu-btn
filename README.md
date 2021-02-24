<div align="center">
  <h3 align="center">アイカツ格言ボタン</h3>
  <p align="center">
    <a href="https://aikatsu.odayaka.work/">https://aikatsu.odayaka.work/</a>
  </p>
  <p align="center">アイカツ格言を再生するボタン、及びAPI</p>
</div>

--- 

## APIs
- 全て取得
```shell
$ curl https://aikatsu.glitch.me/api | jq
```
- 話数で検索
```shell
$ curl https://aikatsu.glitch.me/api/id/{params} | jq
```
- キーワードで検索
```shell
$ curl https://aikatsu.glitch.me/api/title/{params} | jq
```
- シーズンで検索
```shell
$ curl https://aikatsu.glitch.me/api/season/{params} | jq
```


## License

MIT ©[ivgtr](https://github.com/ivgtr)

[ivgtr](https://github.com/ivgtr)が作成しましたが、アイカツ！及びアイカツプラネット！に関するすべての著作権は &copy;BNP/BANDAI, DENTSU, TV TOKYOに帰属します。

[![Github Follow](https://img.shields.io/github/followers/ivgtr?style=social)](https://github.com/ivgtr) [![Twitter Follow](https://img.shields.io/twitter/follow/mawaru_hana?style=social)](https://twitter.com/mawaru_hana) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)