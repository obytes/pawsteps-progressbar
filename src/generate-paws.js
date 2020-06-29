const paws = [];
const degree = 25;
const initialDegree = 90;
const MIN_SIZE = 0.35;
const MAX_SIZE = 0.65;

export default ({ width, height, spacing = 0 }) => {
  const amount = Math.floor(100 / (width + spacing));

  Array.from(Array(amount)).forEach((_, n) => {
    const isRightPaw = n % 2;
    const x = n * (width + MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE));
    const y = Math.random() * (height / 2) + (isRightPaw ? height : 0);
    const rotate = Math.random() * (degree * 2) - degree + initialDegree;
    const prev = n > 0 ? paws[n - 1] : null;
    const collided =
      prev &&
      Math.abs(y - prev.y) < height + 0.3 &&
      Math.abs(prev.x + width) > x;
    const curr = { x: collided ? prev.x + width : x, y: y, rotate };

    paws.push(curr);
  });

  return paws;
};
