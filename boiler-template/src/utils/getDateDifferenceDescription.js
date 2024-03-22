import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const getDateDifferenceDescription = (date) => {
	// 현재 날짜와 시간을 가져옴.
	const today = dayjs();
	// 주어진 날짜와 현재 날짜 사이의 기간 계산
	const diff = dayjs.duration(today.diff(date));

	// 연, 월, 일을 각각 계산.
	const yearDif = parseInt(diff.format("Y"), 10);
	const monthDif = parseInt(diff.format("M"), 10);
	const dateDif = parseInt(diff.format("D"), 10);

	// 연도에 차이가 있으면, 연도와 '년' 단위로 결과 반환
	if (yearDif > 0) {
		return `${yearDif}년`;
		// 월 차이만 있을 경우, 월과 '달' 단위로 결과 반환
	} else if (monthDif > 0) {
		return `${monthDif}달`;
		// 일 차이만 있을 경우, 일과 '일' 단위로 결과 반환
	} else if (dateDif > 0) {
		return `${dateDif}일`;
		// 같은 날짜이면, '하루' 반환
	} else {
		return "하루";
	}
};

export default getDateDifferenceDescription;
