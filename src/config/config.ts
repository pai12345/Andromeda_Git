//Generate Config Data
const generateEnv = () => {
  const PORT = process.env.PORT || 8000;
  
  return {
    PORT: PORT
  };
};
  
export default generateEnv;