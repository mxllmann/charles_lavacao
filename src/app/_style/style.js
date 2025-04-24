
export const header = {
  backgroundColor: "#fdfdfd",
  height: "15vh",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "white",
  textAlign: "center",
  width: "100%",
  padding: "0 2rem",
  top: "0",
  zIndex: 1000,
  position: "fixed",
  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.1)"
};

export const container_main = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "left",
  "@media (max-width: 1024px)": {
    padding: 0
  },
};

export const main_content = {
  marginTop: "17.5vh",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  "@media (max-width: 1024px)" : {
    width: "100%",
    padding: "1rem",
  },
};

export const main_content_text = {
  width: "100%",
  maxWidth: "700px",
  margin: "0 auto",
  padding: "0.5rem",
  "@media (max-width: 1024px)": {
    width: "90vw",
  },
};

export const imageStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "550px",
  aspectRatio: "102.4 / 51",
  margin: "0 auto",
  "@media (max-width: 768px)": {
    maxWidth: "90vw",
  },
};


export const main_content_text_h2 = {
  textAlign: "justify",
  padding: "0 0.5rem",
  fontSize: "2.5rem",
  "@media (max-width: 768px)": {
    textAlign: "left",       
    overflowWrap: "break-word", 
    wordSpacing: "normal"    
  },
};


export const main_content_text_p = {
  fontSize: "1.15rem",
  lineHeight: "1.8rem", 
  textAlign: "justify", 
  marginTop: "3vh",
  marginBottom: "3vh",
  padding: "0 0.5rem",
  "@media (max-width: 1024px)": {
    fontSize: "1rem",
    lineHeight: "1.6rem",
    textAlign: "justify",
    padding: "0 1rem",
  },
};

export const main_content_text_p_2 = {
  fontSize: "1.15rem",
  lineHeight: "1.8rem",
  textAlign: "justify", 
  marginTop: "1vh",
  padding: "0 0.5rem",
  "@media (max-width: 1024px)": {
    fontSize: "1rem",
    lineHeight: "1.6rem",
    textAlign: "justify",
    padding: "0 1rem",
  },
};

export const main_content_benefits_list = {
  marginBottom: "3vh",
}

export const slider_container =  {
  width: "100%",
  maxWidth: "700px",
  margin: "1rem auto",
  padding: "0.5rem",
  "@media (max-width: 1024px)": {
    width: "90vw",
    padding: "0",
    margin: "1rem 0",
  },
}

export const slide_image = {
  cursor: 'pointer', 
  width: '100%'
}

export const overlay_text = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "25%",
  background: "rgba(0, 0, 0, 0.6)",
  color: "white",
  padding: "0.8rem 1.2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
}

export const whatsapp_button = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#25d366",
  borderRadius: "50%",
  padding: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  zIndex: 1000,
  animation: "pulse-bounce 1.2s infinite ease-in-out",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
};

export const pulseBounceKeyframes = `
@keyframes pulse-bounce {
  0%, 100% {
    transform: scale(1) translateY(0) rotate(0deg);
  }
  25% {
    transform: scale(0.85) translateY(-2px) rotate(-50deg);
  }
  50% {
    transform: scale(0.9) translateY(1px) rotate(10deg);
  }
  75% {
    transform: scale(1.02) translateY(-1px) rotate(10deg);
  }
}
`;

export const footer = {
  marginTop: "7vh",
  height: "7vh",
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "center",
  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.1)", 
  backgroundColor: "orange",
};

export const footer_p = {
  fontSize: "1rem"
}

export const footer_link = {
    alignItems: "center", 
    fontSize: "1rem",
  }
