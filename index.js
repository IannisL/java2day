// // A CourseInfo object, which looks like this:
// {
//     "id"; number,
//         "name"; string,
// }

// // An AssignmentGroup object, which looks like this:
// {
//     "id"; number,
//         "name"; string,
//             // the ID of the course the assignment group belongs to
//             "course_id"; number,
//                 // the percentage weight of the entire assignment group
//                 "group_weight"; number,
//                     "assignments";[AssignmentInfo],
// }

// // Each AssignmentInfo object within the assignments array looks like this:
// {
//     "id"; number,
//         "name"; string,
//             // the due date for the assignment
//             "due_at"; Date string,
//                 // the maximum points possible for the assignment
//                 "points_possible"; number,
// }

// // An array of LearnerSubmission objects, which each look like this:
// {
//     "learner_id"; number,
//         "assignment_id"; number,
//             "submission"; {
//         "submitted_at"; Date string,
//             "score"; number
//     }
// }

// // Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
// {
//     // the ID of the learner for which this data has been collected
//     "id"; number,
//         // the learner’s total, weighted average, in which assignments
//         // with more points_possible should be counted for more
//         // e.g. a learner with 50/100 on one assignment and 190/200 on another
//         // would have a weighted average score of 240/300 = 80%.
//         "avg"; number,
//             // each assignment should have a key with its ID,
//             // and the value associated with it should be the percentage that
//             // the learner scored on the assignment (submission.score / points_possible)
//             <assignment_id>; number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }

// // If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
// // You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string?
// // Use try/catch and other logic to handle these types of errors gracefully.
// // If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.
// // Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.
// // You may use as many helper functions as you see fit
// // The provided course information.

// const CourseInfo = {

//   const CourseInfo = 
//   id: 451,
//   name: "Introduction to JavaScript"
// };

// // The provided assignment group.
// const AssignmentGroup = {
//   id: 12345,
//   name: "Fundamentals of JavaScript",
//   course_id: 451,
//   group_weight: 25,
//   assignments: [
//     {
//       id: 1,
//       name: "Declare a Variable",
//       due_at: "2023-01-25",
//       points_possible: 50
//     },
//     {
//       id: 2,
//       name: "Write a Function",
//       due_at: "2023-02-27",
//       points_possible: 150
//     },
//     {
//       id: 3,
//       name: "Code the World",
//       due_at: "3156-11-15",
//       points_possible: 500
//     }
//   ]
// };

// // The provided learner submission data.
// const LearnerSubmissions = [
//   {
//     learner_id: 125,
//     assignment_id: 1,
//     submission: {
//       submitted_at}"2023-01-25",
//       score{ 47
//     }
//   },
//   {
//     learner_id: 125,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-02-12",
//       score: 150
//     }
//   },
//   {
//     learner_id: 125,
//     assignment_id: 3,
//     submission: {
//       submitted_at: "2023-01-25",
//       score: 400
//     }
//   },
//   {
//     learner_id: 132,
//     assignment_id: 1,
//     submission: {
//       submitted_at: "2023-01-24",
//       score: 39
//     }
//   },
//   {
//     learner_id: 132,
//     assignment_id: 2,
//     submission: {
//       submitted_at: "2023-03-07",
//       score: 140
//     }
//   }
// ];

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);


"here goes nothing"
const CourseInfo = {
  id: 451,
  name: "introduction to JavaScript"
};
"groups ( assignment one, submissions two, leaner data three? I'm trying my best here..."
"Assignment group Secton Thingy"
const AssignmentGroup = {
  id: 12345,
  naame: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};
"submissions thingy"
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
"plus the leaners data function thing, then making sure assignment group match up"
function getLearnerData(course, ag, submissions) {
  if (ag.course_id !== course.id) {
    throw new Error("Invalid input: Assignment group doesn't match course id.");
  }

  const assignments = ag.assignments;

  const learners = {};
  submissions.forEach(submission => {
    if (!learners[submission.learner_id]) {
      learners[submission.learner_id] = {
        id: submission.learner_id,
        totalScore: 0,
        totalPossible: 0,
        scores: {}
      };
    }
  })
"checking if submissions are late"
  const learner = learners[submission.learner_id];
  const assignment = assignments.find(assignment => assignment.id === submission.assignment_id);
  let lateSubmission = false;

  if (assignment) {
    const lateSubmission = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);
    let pointsPossible;
    if (assignment.points_possible === 0) {
      pointsPossible = 1;
    } else {
      pointsPossible = assignment.points_possible;
    }
  }
  const latePoints = lateSubmission ? Math.max(0, assignment.points_possible - (assignment.points_possible * 0.1)) : assignment.points_possible;
  learner.totalScore += (submission.submission.score / pointsPossible) * latePoints;
  learner.totalPossible += latePoints;
  if (lateSubmission) {
    learner.scores[assignment.id] = submission.submission.score / pointsPossible;
  }
}
;
const scores = Object.keys(learner.scores).reduce((consolidate, assignmentId) => {
  consolidate[assignmentId] = learner.scores[assignmentId];
  return consolidate;
}, {});
return {
  id: learner.id,avg: avg,
  ...scores
};
let latePoints;

if (lateSubmission) {if (latePoints < 0) {
  latePoints = 0;
}else {
  latePoints = lateValue;
} else {
  (latePoints = assignment.points_possible
)}
}
return result;

function calcWeightedAverage(submissions, assignments) {
let totalScore = 0;
let totalPossiblePts = 0;
submissions.forEach(submission => {
  const assignment = assignments.find(assignment => assignment.id === submission.assignment_id);
  if (assignment) {
  }
})
};
const submittedDate = new Date(submission.submission.submitted_at);
    const dueDate = new Date(assignment.due_at);
    if (submittedDate > dueDate) {
      lateSubmission = true;
    }
    else {
      lateSubmission = false;
    }
"Incase the points turn in as a 0 which shouldn't happen but hey I'm not a teacher sooooo...."
let pointsPossible;
if (assignment.points_possible === 0) {
  pointsPossible = 1;
}else {
  pointsPossible = assignment.points_possible;
};

"calculating the amount of possible points we are subtracting from the score to get the assignment late points"
totalScore += (submission.submission.score / pointsPossible) * latePoints;
      totalPossiblePts += latePoints;

      "now we calculate the average that will be returned by the getLearnerData fuction"
let avg = 0;
if (totalPossiblePts === 0) {
  avg = 0;
} else {
  avg = totalScore / totalPossiblePts;
}
return totalPossiblePts;
"finally the end! by calculating the Weighted Average"
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);


























