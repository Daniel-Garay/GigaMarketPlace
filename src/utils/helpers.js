import { months } from './constants';

export const mongoDateToString = (mongoDate, onlyDate) => {
  if (mongoDate === 'Sin reporte') return mongoDate;
  if (!mongoDate) return 'Sin reporte';

  const date = new Date(mongoDate);
  const month = months[date.getMonth()];
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const dateShow = `${date.getDate()} ${
    month ? month.short_description : ''
  } ${date.getFullYear()}`;

  if (onlyDate) return dateShow;
  return `${dateShow} - ${date.getHours()}:${minutes}`;
};

export const textToInt = (value) => {
  return parseInt(value, 10) || 0;
};
