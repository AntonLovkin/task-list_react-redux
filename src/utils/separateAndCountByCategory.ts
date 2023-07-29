export function separateAndCountByCategory(data) {
  const categoryCounts = data.reduce((acc, item) => {
    const { category, isArchived } = item;
    const existingCategory = acc.find((c) => c.category === category);

    if (existingCategory) {
      if (isArchived) {
        existingCategory.archived++;
      } else {
        existingCategory.active++;
      }
    } else {
      const newCategory = {
        category,
        active: isArchived ? 0 : 1,
        archived: isArchived ? 1 : 0,
      };
      acc.push(newCategory);
    }

    return acc;
  }, []);
   return categoryCounts;
}