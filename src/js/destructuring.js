export default function getAttackInfo(obj) {
  const result = [];
  for (const {
    id, name, icon, description,
  } of obj.special) {
    const desc = description || 'Описание недоступно';
    result.push({
      id, name, icon, description: desc,
    });
  }
  return result;
}
