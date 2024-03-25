module.exports = {
	endOfLine: "lf", // 파일의 끝은 Unix 스타일의 줄바꿈(LF)을 사용
	semi: true, // 명령문 끝에 세미콜론을 사용
	singleQuote: false, // 문자열에는 따옴표 대신 쌍따옴표 사용
	jsxSingleQuote: false, // JSX에서도 문자열에 쌍따옴표 사용
	tabWidth: 4, // 탭 너비를 4 스페이스로 설정
	useTabs: true, // 들여쓰기에 탭 사용
	printWidth: 80, // 한 줄의 최대 너비는 80 문자
	trailingComma: "es5", // 가능한 경우 ES5에서 유효한 위치에 후행 콤마 사용
	arrowParens: "always", // 화살표 함수의 매개변수를 항상 괄호로 감싸기
	bracketSpacing: true, // 객체 리터럴의 중괄호 안에 공백 포함
	bracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 배치 (Prettier 2.4 이하에서는 jsxBracketSameLine 사용)
};
