import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './HomePage.css';

const HomePage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSign = () => {
    // Handle sign in action
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const products = [
    { id: 1, name: 'Aspirin', price: '$5.99', description: 'Relieves pain and reduces inflammation.', imageUrl: 'https://media2.s-nbcnews.com/i/MSNBC/Components/Video/201809/nn_jto_aspirin_heart_disease_180916_1920x1080.jpg' },
    { id: 2, name: 'Cough Syrup', price: '$8.99', description: 'Effective for relieving cough symptoms.', imageUrl: 'https://www.netmeds.com/images/product-v1/600x600/991497/isp_cough_syrup_100ml_432294_3_0.jpg' },
    { id: 3, name: 'Pain Reliever', price: '$6.49', description: 'Fast-acting pain relief for headaches and body aches.', imageUrl: 'https://familydoctor.org/wp-content/uploads/2005/09/52565278_l.jpg' },
    { id: 4, name: 'Allergy Medicine', price: '$12.99', description: 'Relieves allergy symptoms and nasal congestion.', imageUrl: 'https://images-cdn.ubuy.co.in/633ab8f478b8be09ff4c4186-kirkland-signature-allergy-medicine.jpg' },
    { id: 5, name: 'Antibiotics', price: '$15.99', description: 'Fights bacterial infections.', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 6, name: 'Vitamins', price: '$9.49', description: 'Essential nutrients for overall health.', imageUrl: 'data:image/jpeg;base64,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' },// Add more products as needed
  ];


  return (
    <div className="home-page">
      <AppBar position="static" color="transparent" elevation={1} sx={{ backgroundColor: 'skyblue', color: 'inherit' }}>
        <Toolbar>
          <img src="https://w7.pngwing.com/pngs/748/441/png-transparent-logo-pharmacy-pills-miscellaneous-trademark-pharmaceutical-drug-thumbnail.png" alt="Pharmacy Logo" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#333" }}>
            PHARMACY SHOP
          </Typography>
          <Button color='inherit' className='button'>Home</Button>
          <Button color='inherit' className='button'onClick={handleDialogOpen}>Products</Button>
          <Button color='inherit' className='button'>Contact</Button>
          <Button color='inherit' className='button'>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
          </Button>
          <p>/</p>
          <Button color='inherit' className='button'>
            <Link to="/registration" style={{ textDecoration: 'none', color: 'inherit' }}>Sign Up</Link>
          </Button>
          <Avatar src="/broken-image.jpg" />
        </Toolbar>
      </AppBar>

      <Container>
        <Box sx={{ mt: 10 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to our Pharmacy Management System!
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            This system provides you with tools to efficiently manage your pharmacy's inventory, sales, and more.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button variant="contained" color="primary" size="large" onClick={handleSign}>
              <Link to="/pharmacy_selling" style={{ textDecoration: 'none', color: 'inherit' }}>
                Get Started
              </Link>
            </Button>
          </Box>
          
        </Box>
      </Container>

      {/* Dialog for displaying products */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle><b>Our Products</b></DialogTitle>
        <DialogContent>
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
                    {products.map((product) => (
                      <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card elevation={3} sx={{ height: "100%" }}>
                          <CardContent>
                            <img src={product.imageUrl} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: 8 }} />
                            <Typography variant="h6" sx={{ marginTop: 2 }}>{product.name}</Typography>
                            <Typography variant="subtitle1">Price: {product.price}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {product.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HomePage;
