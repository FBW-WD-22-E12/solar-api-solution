function findLargestAndSmallest(dataset, key) {

  const objects = dataset.sort((object1, object2) => {
    if (object1[key] > object2[key]) {
      return 1;
    }

    if (object1[key] < object2[key]) {
      return -1;
    }

    return 0;
  });

  const smallest = objects[0];
  const largest = objects[objects.length - 1];

  return {
    smallest,
    largest,
  };
}

function findByName(dataset, name) {
  return dataset.find((obj) => {
    return obj.name.toLowerCase() === name.toLowerCase();
  });
}
function returnAll(dataset) {
  return dataset
}

export { findLargestAndSmallest, findByName, returnAll };
