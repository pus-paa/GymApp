/**
 * Quick Sort and Hash Map Algorithms for GymApp Application
 * 
 * This file contains:
 * 1. Quick Sort Algorithm - For sorting exercises
 * 2. Hash Map Algorithm - For grouping exercises by body part
 */

/**
 * QUICK SORT ALGORITHM
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n)
 * 
 * Use Case: Sort exercises by name, bodyPart, target, etc.
 */
const quickSort = (arr, compareFn = (a, b) => a > b ? 1 : -1) => {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];
  
  for (const item of arr) {
    const comparison = compareFn(item, pivot);
    if (comparison < 0) {
      left.push(item);
    } else if (comparison > 0) {
      right.push(item);
    } else {
      middle.push(item);
    }
  }
  return [...quickSort(left, compareFn), ...middle, ...quickSort(right, compareFn)];
};
/**
 * Sort exercises by name (alphabetically)
 */
export const sortExercisesByName = (exercises) => {
  return quickSort(exercises, (a, b) => {
    const nameA = (a.name || '').toLowerCase();
    const nameB = (b.name || '').toLowerCase();
    return nameA.localeCompare(nameB);
  });
};
/**
 * Sort exercises by body part
 */
export const sortExercisesByBodyPart = (exercises) => {
  return quickSort(exercises, (a, b) => {
    const partA = (a.bodyPart || '').toLowerCase();
    const partB = (b.bodyPart || '').toLowerCase();
    return partA.localeCompare(partB);
  });
};
/**
 * Sort exercises by target muscle
 */
export const sortExercisesByTarget = (exercises) => {
  return quickSort(exercises, (a, b) => {
    const targetA = (a.target || '').toLowerCase();
    const targetB = (b.target || '').toLowerCase();
    return targetA.localeCompare(targetB);
  });
};

// ============================================================

/**
 * HASH MAP / OBJECT LOOKUP ALGORITHM
 * Time Complexity: O(1) average for lookups
 * Space Complexity: O(n)
 * 
 * Use Case: Group exercises by body part using hash map for fast lookups
 */
export const groupExercisesByBodyPart = (exercises) => {
  const grouped = {};
  
  for (const exercise of exercises) {
    const bodyPart = exercise.bodyPart || 'unknown';
    if (!grouped[bodyPart]) {
      grouped[bodyPart] = [];
    }
    grouped[bodyPart].push(exercise);
  }
  
  return grouped;
};

