/* eslint-disable import/prefer-default-export */
const votingData = [
  {
    id: 1,
    name: 'Hirsch Pancast',
    votes: 5,
  },
  {
    id: 2,
    name: 'Larisa Chalcraft',
    votes: 5,
  },
  {
    id: 3,
    name: 'Leland Gridon',
    votes: 5,
  },
  {
    id: 4,
    name: 'Lonnard Calles',
    votes: 5,
  },
];
export const totalVotesNum = (data) => data.reduce((acc, cur) => acc + cur.votes, 0);

console.log(totalVotesNum(votingData));
