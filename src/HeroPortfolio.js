import {Container, Text, SimpleGrid, createStyles, Input, Select, Grid} from '@mantine/core';
import ItemCard from "./ItemCard";
import data from "./data";
import {IconArrowsSort, IconSearch} from "@tabler/icons";
import {useEffect, useState} from "react";

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    marginBottom: 50,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  inputFields: {
    marginBottom: 40,
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

const HeroPortfolio = () => {
  const { classes } = useStyles();

  const [cards, setCards] = useState([]);

  const changeSort = (value) => {
    let sortedData = null;
    if (value === 'new') {
      sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (value === 'old') {
      sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (value === 'a-z') {
      sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === 'z-a') {
      sortedData = data.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (sortedData) {
      setCards(sortedData.map((article, i) => (
          <ItemCard key={i} article={article} />
      )));
    }
  }

  const searchData = (value) => {
    let searchedData = data.filter((article) => article.title.toLowerCase().includes(value.toLowerCase()));
    setCards(searchedData.map((article, i) => (
        <ItemCard key={i} article={article} />
    )));
  }

  useEffect(() => {
    changeSort('new');
  }, []);

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Portfolio<br />
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Mathijn Goossens
          </Text>
        </h1>

        <Grid className={classes.inputFields}>
          <Grid.Col span={8}>
            <Input onChange={(e)=>searchData(e.target.value)} icon={<IconSearch size={18} />} placeholder="Search..."/>
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
                onChange={(value)=>changeSort(value)}
                icon={<IconArrowsSort size={16} />}
                placeholder="Sort by"
                data={[
                  { value: 'new', label: 'Date: newest' },
                  { value: 'old', label: 'Date: oldest' },
                  { value: 'a-z', label: 'Title: A - Z' },
                  { value: 'z-a', label: 'Title: Z - A' }
                ]}
            />
          </Grid.Col>
        </Grid>

        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default HeroPortfolio;
