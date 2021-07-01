import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import EcoIcon from "@material-ui/icons/Eco";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ContactSupportRounded, TabletSharp } from '@material-ui/icons';

  
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        jooplayconsole@gmail.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Question',
    price: '0',
    description: ['나는 금사빠다', '* 금방 사랑에 빠진다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '2',
    stepNo: '4'
  },
  {
    title: 'Question',
    price: '0',
    description: ['연애할 때', '끌려다니는', '타입이다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '5',
    stepNo: '3'
  },
  {
    title: 'Question',
    price: '0',
    description: ['데이트 코스는', '미리 짜는게', '편하다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '6',
    stepNo: '5'
  },
  {
    title: 'Question',
    price: '0',
    description: ['감정기복이', '크지 않다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '7',
    stepNo: '5'
  },
  {
    title: 'Question',
    price: '0',
    description: ['감정 표현에', '솔직한 편이다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '8',
    stepNo: '6'
  },
  {
    title: 'Question',
    price: '0',
    description: ['활동적인', '데이트가 좋다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '8',
    stepNo: '9'
  },
  {
    title: 'Question',
    price: '0',
    description: ['연락이 없어도', '믿고 기다리는', '편이다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '10',
    stepNo: '8'
  },
  {
    title: 'Question',
    price: '0',
    description: ['이성친구는', '존재할 수 없다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '9',
    stepNo: '11'
  },
  {
    title: 'Question',
    price: '0',
    description: ['아무것도 아닌', '일에 쉽게', '섭섭함이 쌓인다'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '13',
    stepNo: '12'
  },
  {
    title: 'A타입',
    price: '0',
    description: ['서로에 대한 신뢰감이 깊고, 존중해주는', '어른스러운 연애를', '하는 타입!'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '1',
    stepNo: '1'
  },
  {
    title: 'B타입',
    price: '0',
    description: ['구속을 하는것도', '받는 것도 싫은', '자유로운 연애를 하는 타입!'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '1',
    stepNo: '1'
  },
  {
    title: 'C타입',
    price: '0',
    description: ['이것은 의리인가 사랑인가...', '친구같이 편안한 연애를 하는 타입!'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '1',
    stepNo: '1'
  },
  {
    title: 'D타입',
    price: '0',
    description: ['무조건 잘해주고,', '무조건 맞춰주는', '다 퍼주는 연애를 하는 타입!'],
    buttonTextYes: 'Yes',
    buttonTextNo: 'NO',
    buttonVariant: 'contained',
    stepYes: '1',
    stepNo: '1'
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];


export default function Home() {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setQuestions(tiers);
    setDisplay([tiers[0]]);
  }, []);

  const moveToQuestion = (param) => {
    setDisplay([questions[param-1]]);
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            연애 유형 테스트
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
          START!
        </Typography>
      </Container>

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end" align="center">
          {display.map(d => {
            return (
            <Grid item key={d.title} xs={12} >
              <Card>
                <CardHeader
                  title={d.title}
                  subheader={d.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={d.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {d.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                  {
                    d.title === 'Question' &&
                    <CardActions>
                      <Button fullWidth variant={d.buttonVariant} color="primary" onClick={() => { moveToQuestion(d.stepYes) }}>
                        {d.buttonTextYes}
                      </Button>
                      <Button fullWidth variant={d.buttonVariant} color="secondary" onClick={() => { moveToQuestion(d.stepNo) }}>
                        {d.buttonTextNo}
                      </Button>
                    </CardActions>
                  }
                  {
                    d.title !== 'Question' &&
                    <CardActions>
                      <Button fullWidth variant={d.buttonVariant} color="primary" onClick={() => { moveToQuestion(1) }}>
                        처음으로 돌아가기
                      </Button>
                    </CardActions>
                  }
              </Card>
            </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}