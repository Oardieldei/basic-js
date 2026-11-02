
/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  let timestamp

  try {
    timestamp = Date.prototype.getTime.call(date)
  } catch (error) {
    throw new Error('Invalid date!')
  }

  if (Number.isNaN(timestamp)) {
    throw new Error('Invalid date!')
  }

  const month = new Date(timestamp).getMonth()

  if (month < 2 || month === 11) return 'winter'
  if (month < 5) return 'spring'
  if (month < 8) return 'summer'
  return 'autumn'
}

module.exports = {
  getSeason
};
