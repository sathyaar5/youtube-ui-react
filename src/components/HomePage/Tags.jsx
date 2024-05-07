import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import "./Tags.css";

function Tags() {
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <Box className="tags">
      <Box
        className={`miniTag ${activeTag === "All" && "active"}`}
        onClick={() => handleTagClick("All")}
      >
        All
      </Box>
      <Box
        className={`miniTag ${activeTag === "Live" && "active"}`}
        onClick={() => handleTagClick("Live")}
      >
        Live
      </Box>
      <Box
        className={`miniTag ${activeTag === "Music" && "active"}`}
        onClick={() => handleTagClick("Music")}
      >
        Music
      </Box>
      <Box
        className={`miniTag ${activeTag === "BattleGround Mobile India" && "active"}`}
        onClick={() => handleTagClick("BattleGround Mobile India")}
      >
        BattleGround Mobile India
      </Box>
      <Box
        className={`miniTag ${activeTag === "Mixes" && "active"}`}
        onClick={() => handleTagClick("Mixes")}
      >
        Mixes
      </Box>
      <Box
        className={`miniTag ${activeTag === "GTA V" && "active"}`}
        onClick={() => handleTagClick("GTA V")}
      >
        GTA V
      </Box>
      <Box
        className={`miniTag ${activeTag === "Olympics" && "active"}`}
        onClick={() => handleTagClick("Olympics")}
      >
        Olympics
      </Box>
      <Box
        className={`miniTag ${activeTag === "Valorant" && "active"}`}
        onClick={() => handleTagClick("Valorant")}
      >
        Valorant
      </Box>
      <Box
        className={`miniTag ${activeTag === "React JS" && "active"}`}
        onClick={() => handleTagClick("React JS")}
      >
        React JS
      </Box>
      <Box
        className={`miniTag ${activeTag === "Python" && "active"}`}
        onClick={() => handleTagClick("Python")}
      >
        Python
      </Box>
      <Box
        className={`miniTag ${activeTag === "Google Firebase" && "active"}`}
        onClick={() => handleTagClick("Google Firebase")}
      >
        Google Firebase
      </Box>
      <Box
        className={`miniTag ${activeTag === "Web Dev" && "active"}`}
        onClick={() => handleTagClick("Web Dev")}
      >
        Web Dev
      </Box>
      <NavigateNext className="next" />
    </Box>
  );
}

export default Tags;
