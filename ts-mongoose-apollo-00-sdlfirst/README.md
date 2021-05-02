# Server

앱을 실행하는데 필요한 방법을 적었습니다. 명령어가 어떻게 동작하는지 알고자 한다면 `package.json` 파일을 참고하세요.
`yarn`을 사용하려면 `npm install --global yarn`으로 전역에 먼저 설치하세요. 모든 실행 명령어 `yarn` 부분을 `npm run`로 바꿔 실행해도 됩니다.

## 앱을 실행하기 전에

- `yarn docker:build` 명령어로 PostgreSQL를 Docker 형태로 띄웁니다.
- `.env.test`파일을 복사해서 같은 위치에 `.env`파일을 만듭니다.

## 빌드 방법

- `yarn` 또는 `npm install` - 모듈 설치
- `yarn clean` - 이전 빌드 결과 디렉토리 삭제
- `yarn lint` - Lint 확인
- `yarn codegen` - GraphQL schema에 따라 타입 자동 생성; '@types/codegen.d.ts' 가 만들어짐
- '@types/codegen.d.ts' 안에 있는 `export` 구문 제거 후 저장

### 개발 모드로 실행하기

- `yarn dev` - 개발모드로 실행

### 컴파일된 자바스크립트로 실행하기

- `yarn build`- 자바스크립트로 빌드
- `yarn start`- 자바스크립트로 실행

## API 테스트 방법

1. 서버를 실행한 뒤 `http://localhost:4000/graphql` 화면에서 테스트해보세요.
2. `http://insomnia.rest`에서 insomnia를 다운로드 받아 설치한 뒤 `./tests/insomnia/*.yaml` 파일을 import하여 테스트합니다.

## 성능 테스트 방법

-`http://jmeter.apache.org`에서 jmeter를 다운로드 받아 설치한 뒤 `./tests/jmeter/*.jmx` 파일을 jmeter에서 열어서 테스트합니다.

## Local MongoDB 접속 방법

- `mongo "mongodb://test:test@localhost:27017/test"`

## MongoDB 모델링 참고

id로 연결한다

- 입력할 때 같이 입력할 게 아니면
- 조회할 때 같이 조회할 게 아니면
- 사용자 흐름 상 부모의 ID를 조회해서 가지고 있다면

스키마로 연결한다.

- 입력할 때 같이 입력한다면
- 조회할 때 같이 조회한다면

## 참고한 페이지

- https://getstream.io/blog/tutorial-create-a-graphql-api-with-node-mongoose-and-express/
- https://github.com/slicknode/graphql-query-complexity#usage-with-express-graphql
