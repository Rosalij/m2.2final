
export default {
  server: {
      proxy: {
          '/workexperience': 'http://localhost:3000', //proxy API request to backend
      },
  },
};
