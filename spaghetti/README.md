# 🍝 Spaghetti Code Refactoring


## Mission
관심사 분리 ❌, 복잡한 상태 관리가 이뤄지고 있는 코드 개선하기


## Processing

### (1) react-router-dom, loader

`HomePage` 컴포넌트에 기상청 날씨 정보를 받아 당일 기온을 출력하는 로직이 포함되어 있습니다.


한 컴포넌트에서 데이터 패칭 로직을 줄줄이 작성하는 것은 그다지 좋아보이지 않다고 느낍니다. 😅 `src > utils` 폴더 에 `fetch.js` 파일을 두어, 비동기 함수를 작성했어요.


router 생성하고 path 를 등록한 과정에서, loader 기능을 활용해 Home 컴포넌트 랜더링 전에 위에서 작성한 함수를 먼저 실행했습니다.


상태 변경이 필요없고, 특정 페이지가 랜더될 경우 출력되어야 하는 경우 loader 를 활용함이 좋다고 생각합니다. 확실히 코드가 줄어들었죠?

_(추가,, 데이터 패칭이 늦어질 경우, 페이지 컴포넌트가 출력되지 않는 이슈가 있었습니다. 별도의 hook 을 만들고 패칭이 완료되지 않은 경우에 대한 ui 를 별도로 만드는게 더 나은 사용자 경험을 유도할 것 같습니다. --)_


같은 기준으로, 게시글에 대한 상세 내용을 출력하는 `PostDetailPage` 컴포넌트 역시 postId 값을 통해 전달받은 값은 상태로 관리할 필요없이 곧바로 출력이 가능해요.!




### (2) pagination component

`src > components > pagenation` 이라는 폴더 아래, `Pagenation.Comment.jsx`, `Pagenation.Post.jsx` 이라는 두 개의 파일이 있습니다.

_(너무 불편해서 미리 적고 갑니다. 저도 이번에 알았는데, pagenaiton 이 아니라 pagination 이 맞습니다, 철자,,, vscode 로 맞춤법 검사 기능을 켜두었는데 퍼런 줄이 찍찍 그어지네요;;; )_


근데, fetch function 외에 두개의 파일 구조가 거의 동일합니다. 두 컴포넌트 모두 데이터 요청 후 페이지네이션 관련 데이터만을 상태로 관리하고 있습니다. 

저는 Pagination 컴포넌트를 호출하는 상위의 컴포넌트에서 fetching 로직을 수행하고, 그 응답값 중 페이지네이션 관련 데이터를 url 에서 관리했습니다. 이를 위해 `usePagination` 이라는 훅함수를 일차적으로 작성했습니다. 
해당 hook 은 페이지네이션 관련 값을 useSearchParam 을 통해 url 에 저장, 조회 하는 기능을 가집니다.


`src > components` 폴더 아래 `Pagination` 컴포넌트 를 만들고, `usePagination` 을 통해 ui 다 출력되도록 했습니다.
`Pagination` 에서 fetching function 호출, 상태 등록 로직을 수행하지 않아도 됩니다.


`useFetchDataListAndPagination` 이라는 hook 을 하나 더 만들었어요. 
현재 위치한 페이지가 변경될 시, 해당 페이지에 대한 data-list (이 프로젝트에선 게시글 리스트, 댓슬 리스트가 있습니다.) 를 새로 요청하는 기능이 있습니다.

아쉬운 점이 있다면, `usePagination` 커스텀 훅이 없으면 사용이 불가능해요,, 
스스로 만든 로직 사이에 의존성이 생긴 것이 참으로 찜찜합니다..

아무튼 해당 hooke 을 통해 **페이지네이션 기능이 필요한 데이터 리스트 출력 컴포넌트** 의 데이터 호출, 상태 등록 로직을 분리 및 재사용 할 수 있었습니다.



### (3) 