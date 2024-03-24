# Task 나만의 보일러 템플릿 만들기

## 작업내용

### 1.폴더구조

<img width="150" alt="image" src="https://github.com/mobi-community/mobi-3rd-begginer-3/assets/144839872/eba0c23e-cdf3-42ca-b3b7-bcd35c68b879">

- 다음과 같이 폴더구조를 생성했습니다.

### 관리내용

- #### 1. common

  - 공용컴포넌트를 관리
  - ```
    const Spacer = ({ w, h }) => {
     return <div style={{ width: w, height: h, minHeight: '1rem', minWidth: '1rem' }}></div>
    }
    export default Spacer

    ```

  - 스타일 라이브러리와 상관없이 사용할 수 있게 style로 작성해봤습니다.

- #### 2. consts
  - <img width="228" height="120" alt="image" src="https://github.com/mobi-community/mobi-3rd-begginer-3/assets/144839872/15f2244b-8420-415e-8c22-588c179d6b26">
  - 상수파일들은 `consts`에서 관리
  - `key` | `text` 들은 `sysyem`에서 관리
  - dseign 관련 파일들은 `dseign-system`에서 관리
- #### 3. functions
  - `hooks` & `utils` 두가지 폴더를 생성해 일반함수와 hook함수를 `function`아래에서 관리합니다.
- #### 4. pages
  - <img width="228" height="100" alt="image" src="https://github.com/mobi-community/mobi-3rd-begginer-3/assets/144839872/b959f0a0-b1b4-433a-ae19-a589dcede111">
  - pages폴더에서는 페이지 컴포넌트들만 관리합니다.
  - `parts`란 재사용하는 컴포넌트가 아닌 `오직` page컴포넌트에서만 사용될 컴포넌트들을 관리합니다.

### 3.그 외

- 자주 사용하는 구조로 폴더구조와 파일관리하도록 boiler-template를 생성했습니다.
- 스타일라이브러리는 프로젝트마다 다를것 같아서 index.css , index-tailwind.css두가지를 생성해두었습니다.
- 1조 convention에맞는 prettier, eslint생성하고 text파일을 생성해 라이브러리 관련 설명들도 적어두었습니다.
