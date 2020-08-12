module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhance = Math.min(item.enhancment + 1, 20);
  return { ...item, enhancment: enhance };
}

function fail(item) {
  let enhance = item.enhancment;

  if (enhance < 15) {
    enhance -= 5;
  } else if (enhance > 15 && enhance < 17) {
    enhance -= 10;
  } else {
    enhance -= 1;
  }

  return { ...item, enhancment: Math.max(enhance, 0) };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancment === 0) {
    return { ...item };
  } else {
    const name = `[+${item.enhancment}] ${item.name}`;
    return { ...item, name: name };
  }
}
