# Web_pro — 고급 웹프로그래밍 자바스크립트 연습

배재대학교 소프트웨어공학과 「고급 웹프로그래밍」 연습문제 풀이 저장소.

실행 환경은 Node.js야. 예: `node ex1/1_variables.js`, `node excode/p4-4.js 7`

## 수업 시간 연습 (ex1 ~ ex7)

| 폴더 | 내용 |
|---|---|
| `ex1/` | 문제1 변수와 상수 (우주선 Hope), 1-2 자료형, 1-3 형 변환 |
| `ex2/` | Math 객체, 2-1 산술연산자, 2-2 비교연산자, 2-3 논리연산자 |
| `ex3/` | 3-1 홀수/짝수 판별, 3-2 윤년 판별 |
| `ex4/` | 4-1 switch→if, 4-2 if→switch, 4-3 for→while, 4-4 구구단, 4-5 배수 판별, 4-6 소수 찾기 |
| `ex5/` | 5-1 min·pow 함수, 5-2 pow 입력값 검사, 5-3 지역/외부 변수·return, 5-4 try..catch |
| `ex6/` | 6-1 객체 프로퍼티 추가·수정·삭제, 6-2 for…in 합계, 6-3 객체 메서드, 6-4 생성자 함수, 6-5 생성자 함수 2 (Account) |
| `ex7/` | 7-1 숫자(toString·parseInt·isNaN), 7-2 문자열(slice), 7-3 배열 연산, 7-4 값 제거, 7-5 스택으로 뒤집기 |
| `hello/` | Hello World 예제 (hello.html, hello.js) |

## Node.js 수업 예제 (`nodejs1/`, `nodejs2/`, `nodejs3/`)

교재 NodeJS-1·NodeJS-2·NodeJS-3에 맞춰 폴더를 나눴어. 슬라이드에 파일 이름이 나온 예제는 그 이름을 그대로 썼어.

### `nodejs1/` — Node.js · 자바스크립트 비동기 I/O

| 파일 | 내용 |
|---|---|
| `hello.js` | 런타임 구성 — `hello()` 동기 호출과 `setTimeout` 비동기 호출 |
| `hello1.js` | 콜스택 동작 (greet → welcome) |
| `hello2.js` | 콜스택 동작 (logger → welcome, `console.trace`로 스택 출력) |
| `callback.js` | 콜백 함수 (greet + sayGoodbye) |
| `multiCallback.js` | 여러 개의 콜백 (함수표현식·화살표 함수) |
| `setTimeout.js` | `setTimeout(func, delay, arg1…)`, `clearTimeout` |
| `syncAsyncIO.js` | 동기 I/O vs 비동기 I/O |
| `eventLoop.js` | 이벤트루프 실행 순서 (동기 → 마이크로태스크큐 → 콜백큐) |
| `readFile.js` | `fs.readFile('test.txt', callback)` 비동기 파일 읽기 |

### `nodejs2/` — 비동기작업 스케쥴링

| 파일 | 내용 |
|---|---|
| `syncProcessing.js` | 동기식 처리 — 공항 출국 절차 |
| `asyncProcessing.js` | 비동기식 처리 — 순서가 보장되지 않음 |
| `callbackSchedule.js` | 콜백을 이용한 스케쥴링 |
| `amusementPark.js` | **비동기 스케쥴링 연습** — 바이킹 → 티익스프레스 → 허리케인 (콜백·Promise·async/await) |
| `promise.js` | promise 기본 구조 (resolve/reject, then/catch) |
| `promiseWorker.js` | promise 사용예 (worker) |
| `promiseChaining.js` | 프로미스 체이닝을 이용한 스케쥴링 |
| `asyncFunction.js` | async 함수는 항상 프로미스를 반환 |
| `await.js` | await, reject는 try..catch로 처리 |
| `asyncAwait.js` | async/await를 이용한 스케쥴링 |
| `burger.js` | **연습문제 1** — getBurger를 Promise·async/await로 구현 |

### `nodejs3/` — 모듈 (fs)

| 파일 | 내용 |
|---|---|
| `copyFile.js` | **연습문제: 파일 액세스 1** — `fs.readFile()`·`fs.writeFile()`로 파일 복사 |
| `copyFile2.js` | **연습문제: 파일 액세스 2** — `str.split()`으로 줄마다 줄 번호를 붙여 복사 |
| `copyFile3.js` | **연습문제: 파일 액세스 3** — `fs.copyFile()`로 파일 복사 |
| `lineNumber.js` | 수업 풀이 — `readFileSync`·`writeFileSync`로 `test.txt`에 줄 번호를 붙여 `test.sav`로 저장 |
| `test.txt` | `lineNumber.js` 입력 파일 |
| `urlParse.js` | **URL 파싱 테스트 1** — 브라우저가 보낸 URL(`req.url`)을 그대로 화면에 표시 (포트 8282) |
| `urlQuery.js` | **URL 파싱 테스트 2** — `url.parse(req.url, true).query`로 쿼리를 분석해 `id = …` 형태로 응답 (포트 8282) |
| `test1.txt` | 복사 테스트용 원본 파일 |
| `circle.js` · `moduleTest2.js` | **모듈 export/require 연습** — `PI`, `setRadius()`, `getArea()`를 내보내는 circle 모듈 |
| `eventEmitterTest1.js` | 이벤트 트리거/처리 예 + **연습**: `'data'` 이벤트(문자열·정수)와 리스너 추가 |
| `eventEmitterTest2.js` | EventEmitter를 이용한 비동기작업 스케쥴링 — 공항 프로세스 |
| `amusementParkEvent.js` | **연습**: 이벤트 객체를 이용한 스케쥴링을 놀이동산 문제에 적용 |
| `httpApp1/` | **연습1** — `index.html`·`login.html` 라우팅, 로그인 폼을 POST로 처리 (`main.js`, 포트 8282) |
| `httpApp2/` | **연습2** — `login.html`의 요청을 GET으로 처리 (`url.parse(req.url, true).query`, 포트 8282) |

### `nodejs4/` — 스트림 · 파일 서비스 · 스트리밍 서비스

| 파일 | 내용 |
|---|---|
| `makeLargeFile.js` | 실습용 대용량 파일 생성 — `file/largefile.txt`(약 6MB), `file/largerfile.txt`(약 60MB) |
| `readStream.js` | 스트림 읽기 예 — `createReadStream()`, `highWaterMark`, `data`·`end` 이벤트 |
| `writeStream.js` | 스트림 쓰기 예 — `createWriteStream()`, `write()`·`end()` |
| `pipe.js` | read → write 파이프 예 — `readStream.pipe(writeStream)` |
| `files.html` · `fileServer.js` | 파일 다운로드 서버 — `data`·`end` 이벤트로 응답 스트림에 쓰기 (포트 8282) |
| `fileServerPipe.js` | 파일 다운로드 서버 — `pipe()`를 이용한 스트림 연결 |
| `html/movie.html` · `html/kungfupanda4.html` | 무비클립 리스트 · 플레이 페이지 (`<video>` 태그) |
| `streamServer.js` | 비디오 스트리밍 서버 — `Range` 요청을 `206 Partial Content`로 응답 |
| `html/index.html` · `html/login.html` · `server.js` | **통합 서버** — NodeJS-4 프로그래밍 연습(파일서비스·스트리밍서비스) + NodeJS-3 연습1·2(로그인 POST·GET) |

`file/`, `video/`는 용량이 커서 저장소에 올리지 않아. `node nodejs4/makeLargeFile.js`로 파일을 만들고, 영상은 `nodejs4/video/kungfupanda4.mp4`에 직접 넣어.

```
node nodejs1/eventLoop.js
node nodejs2/amusementPark.js promise   # callback | promise | async
node nodejs2/promiseWorker.js true      # worker 값
node nodejs2/burger.js false            # shopOpen 값
cd nodejs3 && node copyFile.js test1.txt test2.txt   # copyFile2.js · copyFile3.js 도 같은 방식
node nodejs3/urlQuery.js   # 브라우저: http://127.0.0.1:8282/path/class.php?id=2018123&class=web&mid=90
node nodejs3/httpApp2/main.js   # 연습2, 브라우저: http://127.0.0.1:8282/  (httpApp1 도 같은 방식)
node nodejs4/server.js      # 브라우저: http://127.0.0.1:8282/
```

## 연습문제 풀이 (`excode/`)

과제1(1~6) 제출일: 2026-10-08 · 7 추가: 2026-10-18

| 파일 | 문제 |
|---|---|
| `p1-1.js` | 1. 변수와 상수 (우주선 Hope 화성·달 도착 시간, 발사무게) |
| `p2-1.js` | 2-1. 산술연산자 (수식 계산, x·y 입력 수식, 원의 넓이, 2차방정식 근) |
| `p2-2.js` | 2-2. 비교연산자 결과 예측 |
| `p2-3.js` | 2-3. 논리연산자 결과 예측 |
| `p3-1.js` | 3-1. 홀수/짝수 판별 |
| `p3-2.js` | 3-2. 윤년 판별 |
| `p4-1.js` | 4-1. switch → if..else 변환 |
| `p4-2.js` | 4-2. if → switch 변환 |
| `p4-3.js` | 4-3. for → while 변환 |
| `p4-4.js` | 4-4. 구구단 (입력한 단 + 1~9단 전체) |
| `p4-5.js` | 4-5. 3·5의 배수 판별 (for / while) |
| `p4-6.js` | 4-6. 1~100 소수 찾기 |
| `p5-1.js` | 5-1. 함수선언 (max, factorial, pibo, calc) |
| `p5-2.js` | 5-2. 함수표현식 |
| `p5-3.js` | 5-3. 화살표함수 |
| `p6-1.js` | 6-1. 객체 프로퍼티 추가·수정·삭제 |
| `p6-2.js` | 6-2. for…in으로 월급 합계 |
| `p6-3.js` | 6-3. calculator 객체 메서드 |
| `p6-4.js` | 6-4. Calculator 생성자 함수 |
| `p6-5.js` | 6-5. Account 생성자 함수 (deposit·withdraw·getBalance) |
| `p7-1.js` | 7-1. 숫자 (자릿수 합, 문자열 속 숫자 합, 2진수→16진수) |
| `p7-2.js` | 7-2. 문자열 (첫 글자 대문자, 가운데 글자 공백) |
| `p7-3.js` | 7-3. 배열 연산 (push·shift·unshift·pop) |
| `p7-4.js` | 7-4. 값이 일치하는 요소 제거 |
| `p7-5.js` | 7-5. 스택(push/pop)으로 문자열 뒤집기 |

입력이 필요한 문제는 명령줄 인수로 받고, 인수가 없으면 기본값으로 실행돼.

```
node excode/p2-1.js 2 1 5 1 -3 2   # x y 반지름 a b c
node excode/p3-1.js 7
node excode/p3-2.js 2024
node excode/p4-1.js Edge
node excode/p4-2.js 3
node excode/p4-4.js 7
node excode/p7-1.js 2025 "25misterm10.04 Mon"
node excode/p7-5.js javascript
```

### 압축파일

| 파일 | 설명 |
|---|---|
| `excode.zip` | `excode/` 압축본 (LMS 제출용) |

## 릴리즈

| 태그 | 내용 |
|---|---|
| [v1.0](https://github.com/pgc3344/Web_pro/releases/tag/v1.0) | 과제1 — 연습문제 1~6 (`excode.zip`) |
| [v1.1](https://github.com/pgc3344/Web_pro/releases/tag/v1.1) | 연습문제 1~7 (`excode.zip`), 수업 예제 ex1~ex7 |
