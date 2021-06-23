import moment from 'moment';
import numeral from 'numeral';

export const listViewPagers = [
  {
    id: 1,
    text: `${moment().subtract(18, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(18, 'M').format('YYYYMM')}`,
  },
  {
    id: 2,
    text: `${moment().subtract(17, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(17, 'M').format('YYYYMM')}`,
  },
  {
    id: 3,
    text: `${moment().subtract(16, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(16, 'M').format('YYYYMM')}`,
  },
  {
    id: 4,
    text: `${moment().subtract(15, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(15, 'M').format('YYYYMM')}`,
  },
  {
    id: 5,
    text: `${moment().subtract(14, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(14, 'M').format('YYYYMM')}`,
  },
  {
    id: 6,
    text: `${moment().subtract(13, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(13, 'M').format('YYYYMM')}`,
  },
  {
    id: 7,
    text: `${moment().subtract(12, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(12, 'M').format('YYYYMM')}`,
  },
  {
    id: 8,
    text: `${moment().subtract(11, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(11, 'M').format('YYYYMM')}`,
  },
  {
    id: 9,
    text: `${moment().subtract(10, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(10, 'M').format('YYYYMM')}`,
  },
  {
    id: 10,
    text: `${moment().subtract(9, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(9, 'M').format('YYYYMM')}`,
  },
  {
    id: 11,
    text: `${moment().subtract(8, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(8, 'M').format('YYYYMM')}`,
  },
  {
    id: 12,
    text: `${moment().subtract(7, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(7, 'M').format('YYYYMM')}`,
  },
  {
    id: 13,
    text: `${moment().subtract(6, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(6, 'M').format('YYYYMM')}`,
  },
  {
    id: 14,
    text: `${moment().subtract(5, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(5, 'M').format('YYYYMM')}`,
  },
  {
    id: 15,
    text: `${moment().subtract(4, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(4, 'M').format('YYYYMM')}`,
  },
  {
    id: 16,
    text: `${moment().subtract(3, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(3, 'M').format('YYYYMM')}`,
  },
  {
    id: 17,
    text: `${moment().subtract(2, 'M').format('MM/YYYY')}`,
    value: `${moment().subtract(2, 'M').format('YYYYMM')}`,
  },
  {
    id: 18,
    text: `THÁNG TRƯỚC`,
    value: `${moment().subtract(1, 'M').format('YYYYMM')}`,
  },
  {
    id: 19,
    text: `THÁNG NÀY`,
    value: `${moment().format('YYYYMM')}`,
  },
  {
    id: 20,
    text: `TƯƠNG LAI`,
    value: `${moment().add(1, 'M').format('YYYYMM')}`,
  },
];

export function formatNumber(value) {
  let str = numeral(value).format('0,0');
  const newchar = '.';
  str = str.split(',').join(newchar);
  return str;
}

export function getValueOfNumberFormat(value) {
  if (isNaN(parseFloat(value))) {
    return value;
  } else {
    return numeral(value).value().toString();
  }
}
