const PORT = process.env.PORT || 8000;

const generateEnv = () => {
    return {
      PORT: PORT
    };
  };
  
export default generateEnv;