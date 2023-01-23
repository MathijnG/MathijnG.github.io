import {AspectRatio, Card, createStyles, Grid, Image, Modal, Text, Title} from "@mantine/core";
import {useState} from "react";

const ItemCard = ({article}) => {

    const [opened, setOpened] = useState(false);

    const useStyles = createStyles((theme) => ({
        card: {
            transition: 'transform 150ms ease, box-shadow 150ms ease',

            '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: theme.shadows.md,
                cursor: 'pointer'
            },
        },

        title: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 600,
        },

        modalTitle: {
            fontWeight: 700,
            fontSize: 22,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            textDecoration: 'none',
            lineHeight: 1.4,
            margin: 0,
            color: 'inherit'
        },

        modalClose: {

        },

        modalInner: {
            padding: 20
        }
    }));

    const { classes } = useStyles();

    return (
        <>
            <Modal
                centered
                size="50%"
                opened={opened}
                withCloseButton={false}
                onClose={() => setOpened(false)}
                classNames={{
                    title: classes.modalTitle,
                    close: classes.modalClose,
                    body: classes.modalInner,
                }}
            >
                <Title order={2}>{article.title}</Title>
                <Text>{article.component}</Text>
                {/*<Grid>
                    <Grid.Col span={2}></Grid.Col>
                    <Grid.Col span={8}>
                        <Title order={2}>{article.title}</Title>
                        <Text>{article.component}</Text>
                    </Grid.Col>
                    <Grid.Col span={2}></Grid.Col>
                </Grid>*/}
            </Modal>
            <Card key={article.title} p="md" radius="md" component="a" className={classes.card} onClick={() => setOpened(true)}>
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={article.image} />
                </AspectRatio>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                    {article.date}
                </Text>
                <Text className={classes.title} mt={5}>
                    {article.title}
                </Text>
            </Card>
        </>
    )
}

export default ItemCard;
