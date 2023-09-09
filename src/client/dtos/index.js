export const groupProductsByCategory = ( products) => (
  products.reduce((group, product) => {
    const category = product.category;

    if (!group[category]) group[category] = [];

    group[category].push(product);

    return group;
}, {})
)