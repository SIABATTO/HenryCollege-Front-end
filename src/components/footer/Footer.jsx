import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'


const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'grey.700' }}>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>

          <Typography>
            Questions? Call 007-803-321-2130
          </Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatum blanditiis optio? Minima harum accusantium temporibus voluptatem ullam, adipisci totam non ut qui facilis inventore, animi aliquam recusandae soluta.
                  </Typography>
                  
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Help Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Jobs
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Cookie Preferences
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Legal Notices
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Account
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Ways to Watch
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Corporate Information
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Only on Netflix
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Media Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Terms of Use
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Contact Us
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>

          <Typography variant="caption">@2020 Landify UI kit.All rights reserved</Typography>

        </Stack>
      </Container>

    </Box>
  )
}

export default Footer