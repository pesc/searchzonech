import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dns from '@material-ui/icons/Dns';
import Divider from '@material-ui/core/Divider';
import { TextFields, VpnKey, MailOutline, VerifiedUser, AlternateEmail, Filter6, Filter4, DeleteForever } from '@material-ui/icons';

const StyledCard = withStyles({
    root: {
        marginBottom: '10px',
        paddingBottom: '5px',
        width: '90%',
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
        object && (object.hasOwnProperty("raw") || object.hasOwnProperty("snippet") && !object.hasOwnProperty("score"))
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

function generateListItems(result, icon, field) {
    const DynamicIconButton = icon;
    const resultField = result[field]
    if (resultField !== undefined) {
        return (
            <StyledListItem>
                <ListItemIcon>
                    <DynamicIconButton />
                </ListItemIcon>
                <ListItemText multiline="true" style={{ wordWrap: "break-word" }}
                    primary={resultField}
                />
            </StyledListItem>
        );
    }
}

function generateButtonItems(result, icon, field) {
    const DynamicIconButton = icon;
    const resultField = result[field]
    if (resultField !== undefined) {
        return (
            <>
                <IconButton size="small" disabled>
                    <DynamicIconButton />
                </IconButton>
            </>
        );
    }
}

export default function ({ result }) {
    const fields = getEscapedFields(result);
    return (
        <>
            <StyledCard>
                <CardContent>
                    <Typography variant="h5" component="h2" color="primary">
                        {fields.domain}
                        <>
                            {(generateButtonItems(fields, (fields?.valid_domain === 'true') ? VerifiedUser : DeleteForever, "valid_domain"))}
                            {(generateButtonItems(fields, MailOutline, "valid_info"))}
                        </>
                    </Typography>

                    <Divider />
                    <Typography variant="body2" color="textPrimary" style={{ whiteSpace: 'pre-line' }} component="a">
                        <List>
                            {(generateListItems(fields, Dns, "ns"))}
                            {(generateListItems(fields, Filter4, "a"))}
                            {(generateListItems(fields, Filter6, "aaaa"))}
                            {(generateListItems(fields, AlternateEmail, "mx"))}
                            {(generateListItems(fields, TextFields, "txt"))}
                            {(generateListItems(fields, VpnKey, "dnskey"))}
                        </List>
                    </Typography>
                </CardContent>
            </StyledCard>

        </>
    );

}