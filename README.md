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

### 3.8 CSS in Javascript

* [__toggle()__](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) : 클래스가 리스트에 존재하면 remove(), 아니면 add()

``` javascript
const h1 = documents.querySelector("div:hello:first-child h1")

function handleTitleClick() {
    h1.classList.toggle("clicked")
}

title.addEventListenr("click", handleTitleClick)
```

> 💡 style을 이용하여 CSS 속성을 바로 건드리는 대신 Javascript는 class를 활용 ★


