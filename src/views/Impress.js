import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 15,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 5,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Kontaktadresse
                </Typography>
                    <Typography variant="h5" component="h2">
                        Pascal Christen
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Zugerstrasse 35<br />
                        6312 Steinhausen<br />
                        Schweiz
                </Typography>
                </CardContent>
                <CardActions>
                    <Button component="a" href="mailto:searchzone@pascalchristen.ch" size="small">Contact Me</Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Impressum
                </Typography>
                    <Typography variant="h5" component="h2">
                        Haftungsausschluss
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                        Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller
                        oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
                        Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden
                        ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder
                        das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung
                        zeitweise oder endgültig einzustellen.
                </Typography>
                    <Typography variant="h5" component="h2">
                        Haftung für Links
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs Es wird jegliche
                        Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene
                        Gefahr des Nutzers oder der Nutzerin.
                </Typography>
                    <Typography variant="h5" component="h2">
                        Urheberrechte
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören
                        ausschliesslich Pascal Christen oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher
                        Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                </Typography>
                </CardContent>
                <CardActions>
                    <Button component="a" href="https://webkoenig.ch" size="small">Quelle</Button>
                </CardActions>
            </Card>
        </>
    );
}