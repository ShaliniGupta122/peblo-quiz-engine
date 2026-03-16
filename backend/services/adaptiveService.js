
export const nextDifficulty = (current, correct) => {

  const levels = ["easy","medium","hard"];
  let index = levels.indexOf(current);

  if(correct && index < 2) index++;
  if(!correct && index > 0) index--;

  return levels[index];
};
