export const getAvatarUrl = (userId) => {
  return `https://api.dicebear.com/9.x/open-peeps/svg?seed=${userId}`;
};