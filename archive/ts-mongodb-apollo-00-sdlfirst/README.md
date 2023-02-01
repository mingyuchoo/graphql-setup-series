# Server

앱을 실행하는데 필요한 방법을 적었습니다. 명령어가 어떻게 동작하는지 알고자 한다면 `package.json` 파일을 참고하세요.
`yarn`을 사용하려면 `npm install --global yarn`으로 전역에 먼저 설치하세요. 모든 실행 명령어 `yarn` 부분을 `npm run`로 바꿔 실행해도 됩니다.

## 앱을 실행하기 전에

- `npm install --global @paljs/cli`를 실행해서 @paljs/cli를 글로벌에 설치하세요.
- `yarn docker:build` 명령어로 PostgreSQL를 Docker 형태로 띄웁니다.
- `src/prisma/.env.test`파일을 복사해서 같은 위치에 `.env`파일을 만듭니다.

## 빌드 방법

`schema.prisma` 파일에 스키마를 만영한 뒤 아래 명령어를 실행하세요. 스키마 내용을 DB에 반영할 것입니다.

- `yarn` 또는 `npm install` - 모듈 설치
- `yarn create-migration` - 마이그레이션 파일 생성
- `yarn migrate-database` - DB에 마이그레이션 반영

그리고 아래 명령어를 실행하세요.

- `yarn generate` - `./node_modules/@prisma/client` 디렉토리 아래에 필요한 파일을 생성합니다.
- `pal g` - `src/graphql` 디렉토리 아래에 타입, 쿼리 리졸버, 뮤테이션 리졸버 파일 생성합니다.

## 개발 모드로 실행하기

- `yarn dev` - 개발모드로 실행

## 컴파일된 자바스크립트로 실행하기

- `yarn build`- 자바스크립트로 빌드
- `yarn start`- 자바스크립트로 실행

:warning: `yarn build` 명령어를 실행하고 타입관련된 오류가 생길 수 있습니다. lint 실행할 때 `as any` 같은 코드를 제거해버려 관련 테이터타입이 뭔지 몰라 오류가 나는 현상인데요.
이럴 경우 `src/generated/nexus.ts` 에 관련된 데이터타입이 선언되어 있으므로 이를 이용해서 누락된 데이터타입으로 지정하면 됩니다. (맞는 데이터타입을 찾는데 꽤 시간이 걸립니다.)

## 테스트 데이터 생성 방법

-`yarn prisma:seed`

## API 테스트 방법

1. 서버를 실행한 뒤 `http://localhost:4000/graphql` 화면에서 테스트해보세요.
2. `http://insomnia.rest`에서 insomnia를 다운로드 받아 설치한 뒤 `./tests/insomnia/*.yaml` 파일을 import하여 테스트합니다.

## 성능 테스트 방법

-`http://jmeter.apache.org`에서 jmeter를 다운로드 받아 설치한 뒤 `./tests/jmeter/*.jmx` 파일을 jmeter에서 열어서 테스트합니다.

## Local MongoDB 접속 방법

- `mongo "mongodb://test:test@localhost:27017/test"`

## 참고

- https://github.com/slicknode/graphql-query-complexity#usage-with-express-graphql
