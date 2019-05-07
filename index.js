function random(min, max) {
  if (typeof max !== 'number' && typeof min !== 'number') {
    throw new Error('Only integers accepted')
  }
  return Math.random() * (max - min) + min
}
module.exports = random
