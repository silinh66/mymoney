var isProduct = false;

//local
// export const apiUrl = "http://127.0.0.1:3000";

//product
// export const apiUrl = "https://ten-ticker-server.herokuapp.com";

//dev
// export const apiUrl = "https://ten-ticker-server-dev.herokuapp.com";

//cPanel
export const apiUrl = isProduct
  ? 'https://tentickers.net'
  : 'http://192.168.1.228:3000';
