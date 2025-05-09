import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { styled } from '@mui/material/styles';
import { ShoppingBag } from '@mui/icons-material';
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
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3",
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
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 1, md: 2 } }}>
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
                  height: { xs: '300px', sm: '350px', md: '400px' },
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
                    width: { xs: '100%', md: '50%' },
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    background: {
                      xs: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
                      md: banner.gradient
                    },
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: { xs: '100%', md: 450 },
                      color: 'white',
                      p: { xs: 3, md: 4 },
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#fff',
                        fontWeight: 'bold',
                        mb: 0.5,
                        display: 'block',
                        fontSize: { xs: '0.7rem', md: '0.875rem' },
                      }}
                    >
                      {banner.subtitle}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      {banner.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        opacity: 0.9,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        display: { xs: 'none', sm: 'block' },
                      }}
                    >
                      {banner.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.secondary.light,
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      {banner.discount}
                    </Typography>
                    <Button
                      variant="contained"
                      size="medium"
                      endIcon={<ShoppingBag />}
                      sx={{
                        borderRadius: '25px',
                        px: { xs: 2, md: 2.5 },
                        py: { xs: 0.5, md: 0.75 },
                        bgcolor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                        },
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      {banner.cta}
                    </Button>
                  </Box>
                </Box>

                {/* Image Section */}
                <Box
                  sx={{
                    position: { xs: 'absolute', md: 'absolute' },
                    right: 0,
                    top: 0,
                    width: { xs: '100%', md: '50%' },
                    height: '100%',
                    overflow: 'hidden',
                    zIndex: { xs: 0, md: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={banner.image}
                    alt={banner.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: { xs: 'cover', md: 'contain' },
                      objectPosition: { xs: 'center', md: 'center right' },
                      transform: { xs: 'none', md: 'scale(0.9)' },
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: { xs: 'none', md: 'scale(0.95)' },
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
