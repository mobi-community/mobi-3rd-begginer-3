import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const getDateDifferenceDescription = (date) => {
	const today = dayjs();
	const diff = dayjs.duration(today.diff(date));

	const yearDif = parseInt(diff.format("Y"), 10);
	const monthDif = parseInt(diff.format("M"), 10);
	const dateDif = parseInt(diff.format("D"), 10);

	if (yearDif > 0) {
		return `${yearDif}년`;
	} else if (monthDif > 0) {
		return `${monthDif}달`;
	} else if (dateDif > 0) {
		return `${dateDif}일`;
	} else {
		return "하루";
	}
};

export default getDateDifferenceDescription;
