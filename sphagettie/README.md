# Task 리펙터링 해보기

## 리펙터링 내용

### 1.재사용가능한 컴포넌트 합치기

- 기존 코드에서 `PageNation.Comment` , `PageNation.Post` 두개의 컴포넌트가 존재했습니다.
- 두컴포넌트에서 다른 점은 api주소만 다르기때문에 하나의 컴포넌트인
  `PageNation` 으로 만들었습니다.

- ```
  const PageNation = ({ path }) => {
      ...pageNation 로직
    }
  ```
  상위컴포넌트에서 props로 path를 전달받아 각각 다른 api요청을 보내는 하나의 컴포넌트로 만들었습니다.

### 2.api호출 & state 관심사 분리

- 기존 코드에서 page컴포넌트에서 `api호출함수`, `state` 를 모두 관리하고있어
  화면 과 기능의 관심사분리를 진행했습니다.
- #### 1.`hooks > use-url-manipulator.js`
  - use-url-manipulator.js에서는 url을 관리합니다.
  - 첫 로드시에 useEffect()를 사용해 초기값을 설정해두었습니다.
  - getParamValues() 를통해 value를 객체형태로 가져옵니다.
  - setParamsValuse({page,limit,take}) 를 통해 입력값에따라 url을 재설정하는 함수를 생성했습니다.
- #### 2.`hooks > use-fetch-comment.js`
  - use-fetch-comment.js에서는 commentList의 on off를 관리하는 state,commentList 데이터를 요청하는 함수를 관리합니다.
  - onClick함수들을 통해 commentList의 호출을 관리합니다.
  - useEffect()의 의존성배열에 url:page를 추가해 page의 값이바뀔때마다 호출하도록 했습니다.
- #### 3.`hooks > use-fetch-detail.js`
  - use-fetch-detail.js에서는 detailPage가 열렷을때 api요청을 하도록 했습니다.
- #### 4.`hooks > use-fetch-post.js`
  - use-fetch-post.js에서는 postList를 관리합니다.
  - page의 변경에 따라 요청을 보내도록 했습니다.
- #### 5.`hooks > use-fetch-pagenation.js`
  - use-fetch-pagenation.js에서는 페이지네이션 api요청을 관리합니다.
  - pageNation컴포넌트에 `props`로 전달되는 `path`를 매개변수로 받아 api요청을 다르게 하도록 했습니다.

### 3.그 외

- 그외에 utils, const파일을 생성해서 재사용 되는 것들을 관리했습니다.

## 리펙터링 못한부분

- 과제에서 api요청을 관리하고 받아온 data를 상태를 통해 fetching하는 것은 별도의 custom-hook을 만들어 페이지 컴포넌트에서 분리하는 것은 진행했습니다.
- modal컴포넌트를 페이지컴포넌트에서 분리하는 것은 아직 진행하지 못했습니다.
