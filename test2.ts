/* Запрос */
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]

enum FaqStatus {
	Published = 'published',
	Draft = 'draft',
	Deleted = 'deleted',
}

type FaqRequest = {
	topicId: number,
	status: FaqStatus,
}

type FaqResponse = {
	question: string,
	answer: string,
	tags: string[],
	likes: number,
	status: FaqStatus
}


async function getFaqs(req: FaqRequest): Promise<FaqResponse[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
