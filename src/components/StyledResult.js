import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { TextFields, VpnKey, VerifiedUser, AlternateEmail, Filter6, Filter4, Block, Lock, Security, VpnLock, InfoOutlined, Dns } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import { green, red } from '@material-ui/core/colors';

const StyledCard = withStyles({
    root: {
        marginBottom: '10px',
        paddingBottom: '5px',
    },
})(Card);

const StyledListItem = withStyles({
    root: {
        paddingTop: '5px',
        paddingBottom: '0px',
    },
})(ListItem);

function getFieldType(result, field, type) {
    if (result[field]) return result[field][type];
}

function getRaw(result, field) {
    return getFieldType(result, field, "raw");
}
function htmlEscape(str) {
    if (!str) return "";

    return String(str)
        .replace(/&/g, "&amp;")
        //.replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

export function isFieldValueWrapper(object) {
    return (
        (object && (object.hasOwnProperty("raw") || object.hasOwnProperty("snippet")) && !object.hasOwnProperty("score"))
    );
}

function getEscapedField(result, field) {
    // Fallback to raw values here, because non-string fields
    // will not have a snippet fallback. Raw values MUST be html escaped.
    let safeField =
        htmlEscape(getRaw(result, field));
    safeField = safeField.replaceAll(",", "\n");
    return Array.isArray(safeField) ? safeField.join(",") : safeField;
}

function getEscapedFields(result) {
    return Object.keys(result).reduce((acc, field) => {
        // If we receive an arbitrary value from the response, we may not properly
        // handle it, so we should filter out arbitrary values here.
        //
        // I.e.,
        // Arbitrary value: "_metaField: '1939191'"
        // vs.
        // FieldValueWrapper: "_metaField: {raw: '1939191'}"
        //if (!isFieldValueWrapper(result[field])) return acc;
        //console.log(field)
        if (field === 'id') {
            //console.log("remove" + field)
            //return { ...acc, [field]: getEscapedField(result, field) };
        }
        //console.log(getEscapedField(result, field))
        return { ...acc, [field]: getEscapedField(result, field) };

    }, {});
}

function generateListItems(result, icon, field, tooltip) {
    const DynamicIconButton = icon;
    const resultField = result[field]
    if (resultField !== undefined) {
        return (
            <StyledListItem>
                <Tooltip title={tooltip} aria-label={tooltip}>
                    <ListItemIcon>
                        <DynamicIconButton color="primary" />
                    </ListItemIcon>
                </Tooltip>
                <ListItemText multiline="true" style={{ wordWrap: "break-word" }}
                    primary={resultField}
                />
            </StyledListItem>
        );
    }
}

function generateButtonItems(result, icon, field, tooltip) {
    const DynamicIconButton = icon;
    const resultField = result[field]
    if (resultField === 'true') {
        return (
            <Tooltip title={tooltip} aria-label={tooltip}>
                <DynamicIconButton style={{ color: green[500] }} />
            </Tooltip>
        );
    } else {
        return (
            <Tooltip title={tooltip} aria-label={tooltip}>
                <DynamicIconButton style={{ color: red[500] }} />
            </Tooltip>
        );
    }
}

export default function ({ result }) {
    const fields = getEscapedFields(result);
    return (
        <>
            <StyledCard>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h2" color="primary">
                                {fields.domain}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container
                                direction="row"
                                justify="flex-end"
                                alignItems="center">
                                <Grid item>
                                    {(generateButtonItems(fields, VerifiedUser, "domain_valid", "Valid domain"))}
                                    {(generateButtonItems(fields, Lock, "dnskey_valid", "Valid DNSSEC"))}
                                    {/* {(generateButtonItems(fields, ContactMail, "info_valid", "Valid info@"))} */}
                                    {(generateButtonItems(fields, Security, "dmarc_valid", "Has DMARC"))}
                                    {(generateButtonItems(fields, Block, "spf_valid", "Has SPF"))}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Divider />
                    <Typography variant="body2" color="textPrimary" style={{ whiteSpace: 'pre-line' }} component="a">
                        <List>
                            {/* ToDo: Display message if everything is empty */}
                            {(generateListItems(fields, InfoOutlined, "soa_record", "SOA Record"))}
                            {(generateListItems(fields, Filter4, "a_record", "A Records"))}
                            {(generateListItems(fields, Filter6, "aaaa_record", "AAAA Records"))}
                            {(generateListItems(fields, Dns, "ns_record", "NS Records"))}
                            {(generateListItems(fields, AlternateEmail, "mx_record", "MX Records"))}
                            {(generateListItems(fields, TextFields, "txt_record", "TXT Records"))}
                            {(generateListItems(fields, VpnKey, "dnskey_record", "DNSKEY Record"))}
                            {(generateListItems(fields, VpnLock, "caa_record", "CAA Record"))}
                            {(generateListItems(fields, VpnLock, "dmarc_record", "DMARC Record"))}
                        </List>
                    </Typography>
                </CardContent>
            </StyledCard>

        </>
    );

}