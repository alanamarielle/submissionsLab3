"use strict";

//1
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: false,
  },
];

//2
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Alana", 88, "2020-02-07");
console.log(submissions);

//3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

//4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((person) => {
    return person.name === name;
  });
  return deleteSubmissionByIndex(array, index);
};
// deleteSubmissionByName(submissions, "Alana");
// console.log(submissions);
//5
const editSubmission = (array, index, score) => {
  array.findIndex((person) => {
    if (person.score >= 60) person.passing = true;
    else person.passing = false;
  });
};
console.log(editSubmission(submissions));

//6
const findSubmissionByName = (array, name) => {
  let found = array.find((person) => {
    return person.name === name;
  });
  return found;
};
// console.log(findSubmissionByName(submissions, "Alana"));

//7
const findLowestScore = (array) => {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue.score < accumulator) {
      return currentValue.score;
    } else {
      return accumulator;
    }
  }, 100);
};
// console.log(findLowestScore(submissions));

//8
const findAverageScore = (array) => {
  let average = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
  }, 0);
  return average / array.length;
};
// console.log(findAverageScore(submissions));

//9
const filterPassing = (array) => {
  let passing = array.filter((person) => {
    return person.score >= 60;
  });
  return passing;
};
// console.log(filterPassing(submissions));

//10
const filter90AndAbove = (array) => {
  let above90 = array.filter((person) => {
    return person.score >= 90;
  });
  return above90;
};
// console.log(filter90AndAbove(submissions));
