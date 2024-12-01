export const createYearArr = () => {
  const yearsArr = [];
  const currentYear = new Date().getFullYear();
  const startYear = 1920;

  for (let i = currentYear; i > startYear; i--) {
    yearsArr.push({ key: i.toString(), value: i.toString() });
  }
  return yearsArr;
};
