export const generateToken = (fullName, userId) => {
  const firstThree = fullName.slice(0, 3).toLowerCase();

  return `${firstThree}.dk938hfyt3074b7.${userId}`;
};
