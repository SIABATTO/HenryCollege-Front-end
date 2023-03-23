import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import imageLogo from '../../assets/images/henryBlanco.png'
import React from 'react'


const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'white', mt:'5rem'}}>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Box>
                <img style={{ width : '60px'}} src={imageLogo} alt="logo" />
                </Box>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatum blanditiis optio? Minima harum accusantium temporibus voluptatem ullam, adipisci totam non ut qui facilis inventore, animi aliquam recusandae soluta.
                  </Typography>

                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography>
                    Quick Links
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Portfolio
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Blogs
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    About
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Press
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Careers We're hiring
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography>
                    Services
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    UX/UI Design
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    App Development
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Web Development
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Quality Assurance
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Machine Learning
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography>
                    Reach Us
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    Hello@landify.co
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
                    +91 98765 43210
                  </Typography>
                  <Typography variant="caption" component="a" href="#" color="secondary">
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