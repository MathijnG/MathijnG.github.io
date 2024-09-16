import {AspectRatio, Card, createStyles, Image, Modal, Text, Title, Badge} from "@mantine/core";
import {useState} from "react";

const ItemCard = ({article}) => {

    const BREAKPOINT = '@media (max-width: 755px)';

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

        modalInner: {
            padding: 20
        },

        modalModal: {
            [BREAKPOINT]: {
                width: "100%"
            }
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
                    modal: classes.modalModal,
                    body: classes.modalInner,
                }}
            >
                <Title order={2}>{article.title}</Title>
                <Text>{article.component}</Text>
            </Modal>
            <Card key={article.title} p="md" radius="md" component="a" className={classes.card} onClick={() => setOpened(true)}>
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={article.image} />
                </AspectRatio>
                <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                    {article.date &&
                        article.date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})
                    }
                </Text>
                <Text className={classes.title} mt={5}>
                    <span style={{marginRight: "8px"}}>{article.title}</span>
                    {article.badges &&
                        article.badges.map(badge =>
                            <Badge style={{marginRight: "8px"}} color="blue">{badge}</Badge>
                        )
                    }
                </Text>

            </Card>
        </>
    )
}

export default ItemCard;
