import { Outlet, Link } from "react-router-dom";
import Mermaid from "../components/mermaid";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';

const ClassQuadrant = () => {
  const [chart, setChart] = useState('');

  useEffect(() => {
    const fetchFile = async (file) => {
      try {
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file}`);
        }
        const content = await response.text();
        return content;
      } catch (error) {
        console.error(error);
        return '';
      }
    };
    fetchFile('/mermaid_charts/cg_quadrant.mmd').then((content) => setChart(content));
  }, []);
  return (  
    <center>
    <Container maxWidth="lg" sx={{borderWidth: 10, padding: 10}} >
    <Paper elevation={3} > 
    <div>
      <h1 class="text-4xl font-mono">Class Quadrant</h1>
      <div>
        {chart && <Mermaid chart={chart} />}
      </div>
    </div>
    </Paper>
    </Container>
    </center>
  )
};

export default ClassQuadrant;