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
| `ex6/` | 6-1 객체 프로퍼티 추가·수정·삭제, 6-2 for…in 합계, 6-3 객체 메서드, 6-4 생성자 함수 |
| `ex7/` | 7-1 숫자(toString·parseInt·isNaN), 7-2 문자열(slice), 7-3 배열 연산, 7-4 값 제거, 7-5 스택으로 뒤집기 |
| `hello/` | Hello World 예제 (hello.html, hello.js) |

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
