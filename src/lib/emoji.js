import emojiData from "emoji-datasource";

const shortNames = emojiData.map(emoji => emoji.short_name);
const shortNamesWithColon = shortNames.map(name => `:${name}:`);

export const VALID_NAMES = [
    ...shortNames,
    ...shortNamesWithColon
];

const removeColons = str => {
    const index = str.indexOf(':');
    if (index > -1) {
        if (index === str.length - 1) {
            str = str.substring(0, index);
            return removeColons(str);
        } else {
            str = str.substr(index + 1);
            return removeColons(str);
        }
    }
    return str;
}

const convertFromUtf16 = utf16 => String.fromCodePoint(...utf16.split("-").map(u => `0x${u}`));

/**
 * Find emoji by short name.
 * @param  {string} shortName
 * @return {string}
 */
export const findByShortName = shortName => {
    const nonColonName = removeColons(shortName);
    const emoji = emojiData.find(emoji => emoji.short_name === nonColonName);
    if (!emoji) return undefined;
    return convertFromUtf16(emoji.unified);
}
