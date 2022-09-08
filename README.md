
# 익명 커뮤니티 서비스 API

<div>
  <img src="https://img.shields.io/badge/node-16.17.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/NestJS-9.0.0-E0234E?logo=NestJS"> 
  <img src="https://img.shields.io/badge/TypeScript-4.3.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/mysql2-2.3.3-4479A1?logo=MySQL"> 
  <img src="https://img.shields.io/badge/Swagger-6.1.1-DC382D?logo=swagger"> 
  <img src="https://img.shields.io/badge/TypeORM-0.3.9-010101"> 
</div>

## 1. 서비스 개요

- 본 서비스는 회원가입, 로그인 없이 비밀번호로 게시글을 올릴 수 있는 익명 커뮤니티 서비스입니다.
- 게시글 비밀번호 일치여부로 수정 및 삭제가 가능합니다.

## 2. 구현 사항
### 게시글
#### 1. 게시글 생성
- 게시글: 제목 (최대 20자), 본문(최대 200자), 비밀번호 (6자리 이상, 숫자 1개 이상 필수)
#### 2. 게시글 수정 & 삭제
- 비밀번호가 일치해야 게시글 수정 및 삭제 가능
- 비밀번호 수정 및 삭제 불가능
#### 3. 게시글 전체 리스트 조회
- 게시글 전체 리스트 조회할 때, 중복 없이 계속 무한 로드됩니다. (추가로드 단위 20개)
#### 4. 특정 게시글 상세 조회
- 게시글 ID를 통해 비밀번호를 제외한 게시글의 상세 정보들(생성일, 수정일, 삭제일)을 조회합니다.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev!

# production mode
$ npm run start:prod
```


# 관련 문서

### [Swagger API Document]()
