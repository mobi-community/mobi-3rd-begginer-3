# React Hook Form & Yup

## 작업내용

### 1.결과물

- ![bandicam 2024-03-23 05-13-10-784](https://github.com/mobi-community/mobi-3rd-begginer-3/assets/144839872/142c41dd-1601-4d0f-beb8-8c804339b94f)

### 2.구현 내역

- #### 1.router
  - router설정을 통해 주소값을 변경시키며 페이지이동을 했습니다.
  - outlet을 생성해 모든 페이지가 동일한 layout적용받도록 설정했습니다.
- #### 2.react-hook-form
  - 공용컴포넌트 registerBase를 생성했습니다.
  - 해당 컴포넌트에서 props를 설정해 react-hook-form이 적용된 form태그를 생성해서 재사용할 수 있도록 했습니다.
- #### 3.yup
  - `schemes` 폴더아래서 각페이지별로 scheme들을 생성해서 관리했습니다.

### 3.그 외

- 이전데이터를 url에 정보를 담아 기억하도록 할까햇는데 잠깐의 데이터 저장이니 sessionStorage에 담아두었다가 회원가입이 완료되면 clear()시키는게 더좋을 것같아서 구현했습니다.
- url로관리하는게 좋을지 storage에 저장하는것이 좋은지 잘모르겠습니다...
  혹시 다른 방법도 존재하는건가요?
