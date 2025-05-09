import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { styled } from '@mui/material/styles';
import { ShoppingBag, ArrowForward } from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  height: '400px', // Reduced height
  width: '85%', // Slightly reduced width
  margin: '20px auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  [theme.breakpoints.down('md')]: {
    height: '350px',
    width: '95%',
  },
  '& .swiper-button-next, & .swiper-button-prev': {
    color: theme.palette.common.white,
    background: 'rgba(0, 0, 0, 0.3)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    '&::after': {
      fontSize: '20px',
    },
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  '& .swiper-pagination-bullet': {
    width: '12px',
    height: '12px',
    background: 'rgba(255, 255, 255, 0.5)',
    '&-active': {
      background: theme.palette.primary.main,
    },
  },
}));

const banners = [
  {
    title: "Premium Electronics",
    subtitle: "Experience Innovation",
    description: "Discover the latest in technology with exclusive deals on smartphones, laptops & more",
    discount: "UP TO 80% OFF",
    image: "/banners/banner1.jpg",
    gradient: "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)",
    cta: "Shop Electronics",
  },
  {
    title: "Smart Home Devices",
    subtitle: "Transform Your Living",
    description: "Make your home smarter with cutting-edge IoT devices and smart appliances",
    discount: "UP TO 60% OFF",
    image: "/banners/banner2.jpg",
    gradient: "linear-gradient(90deg, rgba(25,118,210,0.9) 0%, rgba(25,118,210,0.4) 50%, rgba(25,118,210,0.1) 100%)",
    cta: "Explore Smart Home",
  },
  {
    title: "Gaming Paradise",
    subtitle: "Level Up Your Game",
    description: "Premium gaming laptops, consoles, and accessories for the ultimate gaming experience",
    discount: "UP TO 70% OFF",
    image: "/banners/banner3.jpg",
    gradient: "linear-gradient(90deg, rgba(76,29,149,0.9) 0%, rgba(76,29,149,0.4) 50%, rgba(76,29,149,0.1) 100%)",
    cta: "View Gaming Deals",
  },
];

export default function HeroBanner() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 2 }}>
      <Container maxWidth="xl">
        <StyledSwiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  overflow: 'hidden',
                  bgcolor: '#f5f5f5',
                }}
              >
                {/* Content Section */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '50%', // Reduced width
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    background: banner.gradient,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: 450,
                      color: 'white',
                      p: { xs: 2, md: 3 },
                      ml: { xs: 2, md: 4 },
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        mb: 0.5,
                        display: 'block',
                      }}
                    >
                      {banner.subtitle}
                    </Typography>
                    <Typography
                      variant="h4" // Changed from h3
                      sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      {banner.title}
                    </Typography>
                    <Typography
                      variant="body2" // Changed from body1
                      sx={{
                        mb: 2,
                        opacity: 0.9,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      {banner.description}
                    </Typography>
                    <Typography
                      variant="h6" // Changed from h5
                      sx={{
                        color: theme.palette.secondary.light,
                        fontWeight: 'bold',
                        mb: 2,
                      }}
                    >
                      {banner.discount}
                    </Typography>
                    <Button
                      variant="contained"
                      size="medium" // Changed from large
                      endIcon={<ShoppingBag />}
                      sx={{
                        borderRadius: '25px',
                        px: 2.5,
                        py: 0.75,
                        bgcolor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      {banner.cta}
                    </Button>
                  </Box>
                </Box>

                {/* Image Section */}
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '50%', // Reduced width
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={banner.image}
                    alt={banner.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain', // Changed from cover
                      objectPosition: 'center right',
                      transform: 'scale(0.9)', // Reduced scale
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(0.95)',
                      },
                    }}
                  />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </Box>
  );
}
