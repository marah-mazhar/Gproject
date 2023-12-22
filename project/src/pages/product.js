import React from "react";
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import Sidebar from "../components/Sidebar";
import "../styles/products.css";
import { Grid, Card, CardContent, Typography, CardActionArea, CardActions, Button } from "@mui/material";
import Container from "@mui/material/Container";
import data from "../data.json";

function Product() {
  return (
    <div className="Products">
      <Sidebar />
      <div className="ProductContent">
        <Container maxWidth="lg" style={{ backgroundColor: "ButtonShadow" }}>
          <Grid
            container
            spacing={3}
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            {data.map((result, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Card sx={{ maxWidth: 150 }}>
                  <CardActionArea
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {result.id}
                      </Typography>
                      <Typography variant="body2">{result.content}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Button
                      component={Link}
                      to={`/product/${result.id}/predict`}
                      variant="contained"
                      size="small"
                      color="success"
                    >
                      predict
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {/* Use Outlet to render nested routes */}
      <Outlet />
    </div>
  );
}

export default Product;