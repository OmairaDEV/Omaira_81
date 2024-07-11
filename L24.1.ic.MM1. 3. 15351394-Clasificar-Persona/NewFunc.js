function calculateAgeGroup(birthYear, currentYear) {
  const age = currentYear - birthYear;

  let ageGroup;

  if (age >= 18 && age <= 24) {
    ageGroup = 'Young Adult';
  } else if (age >= 25 && age <= 39) {
    ageGroup = 'Adult';
  } else if (age >= 40 && age <= 64) {
    ageGroup = 'Middle-aged';
  } else {
    ageGroup = 'Senior';
  }

  return ageGroup;
}