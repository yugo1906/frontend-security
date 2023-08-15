const getCurrentTimestamp = () => {
  const date = new Date();

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');  // Monthは0から始まるので+1しています。
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');

  return `${yyyy}/${mm}/${dd} ${hh}:${min}`;
}

module.exports = getCurrentTimestamp;