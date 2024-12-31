import { Box, Typography } from "@mui/material";
import { BlogCard } from "./components/Card/BlogCard";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(50px, 300px))",
          maxWidth: "80vw",
          minWidth: "0vh",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
       {
        Array.from({length: 10}).map((_, index) => (
          <BlogCard key={index} />
        ))
       }
      </div>
    </div>
  );
}

const GridItem = () => {
  return (
    <Box >
      <Typography variant="h2">Hello World</Typography>
      <Typography variant="h6">Hello World 2</Typography>
    </Box>
  );
};

export default App;
