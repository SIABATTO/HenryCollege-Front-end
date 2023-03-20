import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import imageLogo from '../../assets/images/henryBlanco.png'
import React from 'react'


const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'white' }}>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Box>
                <img style={{ width : '60px'}} src={imageLogo} alt="logo" />
                </Box>
                  <Typography variant="caption" component="a" href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatum blanditiis optio? Minima harum accusantium temporibus voluptatem ullam, adipisci totam non ut qui facilis inventore, animi aliquam recusandae soluta.
                  </Typography>

                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography>
                    Quick Links
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Portfolio
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Blogs
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    About
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Press
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Careers We're hiring
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography>
                    Services
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    UX/UI Design
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    App Development
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Web Development
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Quality Assurance
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Machine Learning
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography>
                    Reach Us
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Hello@landify.co
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    +91 98765 43210
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    772 Lyonwood    Ave
                    Walnut, CA 91789
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>

          <Typography variant="caption">@2020 Landify UI kit.All rights reserved Terms & Conditions |Privacy Policy | Sitemap | Disclaimer</Typography>
        </Stack>
      </Container>

    </Box>
  )
}

export default Footer