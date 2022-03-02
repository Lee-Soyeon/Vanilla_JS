# Vanilla_JS
## 바닐라 JS로 크롬 앱 만들기

* 일시 : 2022년 2월 24일 ~ 2022년 3월 일
* 링크 : https://nomadcoders.co/javascript-for-beginners/lobby

## 강의 노트
### 3.2 Searching For Elements

* [__querySelector()__](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector) : CSS 선택자를 이용하여 _첫번째 요소_ 가져옴

``` javascript
const title = documents.querySelector("div h1")

console.log(title)
```

### 3.3 Events

* [__addEventListener()__](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener) : 이벤트 타입과 함수 전달

``` javascript
const title = documents.querySelector("div h1")

function handleTitleClick() {
    title.style.color = "blue"
}

title.addEventListenr("click", handleTitleClick)
```
