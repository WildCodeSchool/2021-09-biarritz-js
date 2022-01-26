const formatSortString = (sortString: string): string => {
  if (sortString) {
    const sortInArray: string[] = sortString
      .substring(1, sortString.length - 1)
      .replace(/"/gi, '') // We will replace all " we find in the string by nothing
      .split(',');
    return sortInArray[0] + ' ' + sortInArray[1];
  } else {
    return '';
  }
};

export { formatSortString };
